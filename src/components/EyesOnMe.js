import React from "react";

function EyesOnMe(){
  function handleFocus(){
   console.log("Good!")
  }
   function handeleBlur(){
    console.log("Hey! Eyes on me!")
   }





return(
    <button onFocus={handleFocus} onBlur={handeleBlur}>
        Eyes on me
    </button>
)
}

export default EyesOnMe;