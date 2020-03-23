import React from "react";

function Players(props) {
  return (
    <div>
      {props.players.map((person,key) => {
        return (
          <div>
            <h1 index={key}>{person.name}</h1>
            <p>{person.country}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Players;
