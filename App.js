import React from "react";
import { useState } from "react";
import "./index.css";

function App() {
  const [calc, setCalc] = useState("");

  const [result, setResult] = useState();

  const ops = ["/", "*", "+", "-", "."];

  const updatecalc = value => {
    //that line will prevented fro over adding ops after opps 
    if (
      ops.includes(value) && calc ==='',
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }


  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        //that will you to dispay the ops and calc into your display block
        <button onClick={() => updatecalc(i.toString())}
          key={i}>{i}</button>);
    }
    return digits;
  }
  const calculate = () => {
    setCalc(eval(calc).toString());
  }
const deleteit=()=>{
   if(calc===''){
    return;
   }
   const value=calc.slice(0, -1);
   setCalc(value);
}

  return (
    <div>
      <h1 className="title">My Calculator</h1>
    <div className="App">
      <div className="calculator">
        <div className="display">

        {result ? <span>({result})</span> : ''} {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updatecalc('*')} >*</button>
          <button onClick={() => updatecalc('+')} >+</button>
          <button onClick={() => updatecalc('/')} >/</button>
          <button onClick={() => updatecalc('-')} >-</button>



          <button  onClick={() => deleteit('Del')}  >Del</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updatecalc('0')} >0</button>
          <button onClick={() => updatecalc('.')} >.</button>


          <button onClick={() => calculate('=')}  >=</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
