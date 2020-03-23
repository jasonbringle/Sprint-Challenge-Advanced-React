import React from 'react'
import useInput from '../Hooks/UseInput'

const AddPlayer = () =>{
    const [ values, handleChange, handleSubmit ] = useInput('form' ,
        {name:'',
        country:''   
        }, () =>
            alert('Added')
    );

return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
                <input
                name='name'
                value={values.name}
                onChange={handleChange}
                ></input>
            <label>
                Country of Origin
            </label>
                <input
                name='country'
                value={values.country}
                onChange={handleChange}
                >
                </input>
            <button>Submit</button>
        </form>
        <div>{values.name}</div>
        <div>From:{values.country}</div>
    </div>
)



}
export  default AddPlayer;