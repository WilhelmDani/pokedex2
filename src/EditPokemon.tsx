import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

const AddPokemon: FC<Pokemon> = props => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => console.log(data)
    // fetch(
    //     'http://localhost:5000/api/pokemon/update',
    //     {
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //     }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className= "col-sm-4">
            <div>
                <div>
                <label className="text-white">Sprite: </label>
                <input type='file' ref={register} name='sprite'/>
                </div>
                <div>
                    <label className="text-white">Pokemon Name: </label>
                    <input type="text" ref={register} name="name" value={props.name}/>
                </div>
                <div>
                    <label className="text-white">Index Number: </label>
                    <input type="text" ref={register} name="number" value={props.number}/> 
                </div>
                <div>
                    <label className="white-text">Description: </label>
                    <input type="text" ref={register} name="description" value={props.description}/>
                </div>
                <div>
                    <label className="white-text"></label>
                </div>
            </div>
        </form>
    )
}