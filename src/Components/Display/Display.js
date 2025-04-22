import * as math from "mathjs";
import React, { useState } from "react";
import "../Display/Display.css"

const operators = ["+", "-", "/", "*", "="];
const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function MyCalculatorDisplay() {
    const [numbers, setNumbers] = useState(0);
    const [display, setDisplay] = useState("");
    const [isDecimal, setIsDecimal] = useState(false);
    const [isZero, setIsZero] = useState(false);

    function handleClick(e) {
        if (operators.includes(e.target.value)) {
            setIsDecimal(false)
            setIsZero(false)
        }
        if (keys.includes(e.target.value)) {
            setIsZero(true)
        }
        setDisplay(display + e.target.value)
        setNumbers(numbers + e.target.value)
        }

    function clear() {
    setDisplay("")
    setNumbers(0)
    setIsDecimal(false)
    setIsZero(false)
    }

  function zero(e) {
      if (!isZero) {
          setNumbers(0)
      }else if (isZero) {
          setNumbers(numbers + e.target.value)
          setDisplay(display + e.target.value)
      }
  }

   function decimal(e) {
        setIsDecimal(true)
        if (isDecimal === true) {
            console.log("No")
        
        }else{
            setNumbers(numbers + e.target.value)
            setDisplay(display + e.target.value)
        }
   }

    function equals() {
        try { 
            setDisplay(math.evaluate(display))
            setNumbers(math.evaluate(numbers)) } 
            catch (error) {
                setDisplay("☠☠☠");
                setNumbers("☠☠☠");
            }        
    }

return (
        <div id="body">
            <h1> My Snappy Calculator </h1>

            <div id="buttoncontainer">

            <div id="screen">
            <h4 id="display">{!display ? numbers : display}</h4>
            </div>

            <button value="clear" onClick={clear} id="clear" className="myButton">AC</button>

            <button value="/" onClick={handleClick} id="divide" className="myButton">/</button>

            <br />

            <button value="7" onClick={handleClick} id="seven" className="myButton">7</button>

            <button value="8" onClick={handleClick} id="eight" className="myButton">8</button>

            <button value="9" onClick={handleClick} id="nine" className="myButton">9</button>

            <button value="*" onClick={handleClick} id="multiply" className="myButton">*</button>
           
            <br />

            <button value="4" onClick={handleClick} id="four" className="myButton">4</button>

            <button value="5" onClick={handleClick} id="five" className="myButton">5</button>

            <button value="6" onClick={handleClick} id="six" className="myButton">6</button>

            <button value="-" onClick={handleClick} id="subtract" className="myButton">-</button>
            
            <br />

            <button value="1" onClick={handleClick} id="one" className="myButton">1</button>

            <button value="2" onClick={handleClick} id="two" className="myButton">2</button>

            <button value="3" onClick={handleClick} id="three" className="myButton">3</button>

            <button value="+" onClick={handleClick} id="add" className="myButton">+</button>

            <br />

            <button value="0" onClick={zero} id="zero" className="myButton">0</button>

            <button value="." onClick={decimal} id="period" className="myButton">.</button>

            <button value="=" onClick={equals} id="equals" className="myButton">=</button>                    
                            
            </div>
            </div>
)
}
