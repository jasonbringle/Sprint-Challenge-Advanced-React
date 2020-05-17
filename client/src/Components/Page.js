import React from "react";
import useInput from './Hooks/UseInput'

function Players(props) {
  const [ values, changeHandler, handleSubmit ] = useInput([{
        name:'',
        country:''   
        }, 
        () =>
            console.log('Added')
      ]);

  return (
    <div>
        <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
                <input
                name='name'
                value={values.name}
                onChange={changeHandler}
                ></input>
            <label>Country of Origin</label>
                <input
                name='country'
                value={values.country}
                onChange={changeHandler}
                >
                </input>
            <button>Submit</button>
        </form>
        <div>{values.name}</div>
        <div>From:{values.country}</div>
    </div>
        <div>
          {props.players.map((person,index) => {
            return (
              <div key={index}>
                <h1>{person.name}</h1>
                <p>{person.country}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
export default Players;
