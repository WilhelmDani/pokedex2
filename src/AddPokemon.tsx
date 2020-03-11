import React, { FC, useState, useCallback, useEffect } from 'react'
import './App.css';
import { useForm, FieldError } from "react-hook-form";


export const AddPokemon = () => {
    const [regions, setRegions] = useState<Regions[]>([]);
    const [singleRegion, setSingleRegion] = useState<number>(0);
    const [types, setTypes] = useState<Types[]>([]);
    const [firstType, setFirstType] = useState<number>(0);
    const [secondType, setSecondType] = useState<number>(0);

    const { register, handleSubmit } = useForm()

    const submit = (data: Pokemon, sprite?: string) => {
        let pokemonData: Pokemon = {
            name: data.name,
            number: data.number,
            description: data.description,
            regionId: singleRegion,
            sprite,
            pokemonTypes: [{typeId: firstType} as PokemonTypes]
        }
        if(secondType) 
        {
            pokemonData.pokemonTypes.push({typeId: secondType} as PokemonTypes)
        }

        const formData = new FormData();
        formData.append("Pokemon", JSON.stringify(pokemonData))

        fetch(
            'http://localhost:5000/api/pokemon/add',
            {
                headers: {
                    Accept: "application/json"
                },
                method: 'POST',
                mode: 'no-cors',
                body: formData
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    } 

    const onSubmit = (data: any) => 
    {
        if (data.sprite && data.sprite.length > 0)
        {
            console.log('here')
            const reader = new FileReader();
            reader.onload = () => {
                const sprite = reader.result as string
                submit(data, sprite);
            }
            reader.readAsDataURL(data.sprite[0])
        }
        else {
            submit(data)
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/api/regions/getall')
          .then(x => x.json())
          .then((response: Regions[]) => response.sort((a,b) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
            )
            .then(sorted => setRegions(sorted))
          .catch(error => console.log(error));

          fetch('http://localhost:5000/api/types/getall')
          .then(x => x.json())
          .then((response: Types[]) => response.sort((a,b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        )
        .then(sorted => setTypes(sorted))
          .catch(error => console.log(error));
      }, []);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className= "col-sm-4">
             <div>
                <label className="text-white">Sprite: </label>
                <input type='file' ref={register} name='sprite'/>
                </div>
            <div>
                <label className="text-white">Pokemon Name: </label>
                <input type="text" ref={register} name="name"/>
            </div>
            <div>
                <label className="text-white">Index Number: </label>
                <input type="text" ref={register} name="number"/> 
            </div>
            <div>
                <label className="white-text">Description: </label>
                <input type="text" ref={register} name="description"/>
            </div>
            
            <div>
                <label className="white-text">Region: </label>
                <select value = {singleRegion} ref={register} onChange={(e) => { setSingleRegion(Number(e.target.value)) }}>
        {regions.map((region) => <option value={region.regionId}>{region.name}</option>)}
              </select>
            </div>

            <div>
                <label className="white-text">Type: </label>
                <select value = {firstType} ref={register} onChange={(e) => { setFirstType(Number(e.target.value)) }}>
        {types.map((type) => <option value={type.typeId}>{type.name}</option>)}
        </select> / <select value = {secondType} ref={register} onChange={(e) => {setSecondType(Number(e.target.value)) }}>
        <option value = {-1}>None</option>, {types.map((type) => <option value={type.typeId}>{type.name}</option>)}
        </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}