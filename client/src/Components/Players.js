import React from "react";

function Players(props) {
   console.log(props.players)

  return (
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
  );
}
export default Players;
