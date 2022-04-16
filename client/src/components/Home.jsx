import React from "react";
const stri = "Hello my dear"

const Home = () => {
    function handleChange(event) {
        let ustri = event.target.value;
        let inde = ustri.length;
        
        if (ustri[inde-1] === stri[inde-1]) {
            console.log("Trues");
        } else {
            console.log("False");
        }
      }
      
      return (
        <input name="firstName" onChange={handleChange} />
      );
    }

export default Home;