import ReactDOM from "react-dom";
import ScaleText from "react-scale-text";
import React from "react";

function App() {
  const [valorNaTela, setValorNaTela] = React.useState("0");
  const [operation, setOperation] = React.useState("");
  const [first, setFirst] = React.useState("");

  function reset() {
    setValorNaTela("0");
    setFirst("");
    setOperation("");
  }

  function inputNumber(number) {
    if (valorNaTela === "0") {
      setValorNaTela(number);
    } else {
      setValorNaTela(valorNaTela + number);
    }
  }

  function inputOperator(operator) {
    setFirst(valorNaTela);
    setOperation(operator);
    setValorNaTela("0");
  }

  let result;
  function calculate() {
    if (valorNaTela === "0") {
      return;
    } else {
        
        if (operation === "/") {
            result = Number(first) / Number(valorNaTela);
        }
        if (operation === "*") {
            result = Number(first) * Number(valorNaTela);
        }
        if (operation === "+") {
            result = Number(first) + Number(valorNaTela);
        }
        if (operation === "-") {
            result = Number(first) - Number(valorNaTela);
        }

      setValorNaTela(String(result));
    }
  }

  return (
    <div class="main">
      <div class="display">
        <ScaleText>
          <div class="text">{valorNaTela}</div>
        </ScaleText>
      </div>
      <div class="keypad">
        <div class="input-keys">
          <div class="function-keys">
            <button onClick={reset}>AC</button>
          </div>
          <div class="digit-keys">
            <button onClick={() => inputNumber("0")}>0</button>
            <button onClick={() => inputNumber("1")}>1</button>
            <button onClick={() => inputNumber("2")}>2</button>
            <button onClick={() => inputNumber("3")}>3</button>
            <button onClick={() => inputNumber("4")}>4</button>
            <button onClick={() => inputNumber("5")}>5</button>
            <button onClick={() => inputNumber("6")}>6</button>
            <button onClick={() => inputNumber("7")}>7</button>
            <button onClick={() => inputNumber("8")}>8</button>
            <button onClick={() => inputNumber("9")}>9</button>
          </div>
        </div>
        <div class="operator-keys">
          <button onClick={() => inputOperator("/")}>÷</button>
          <button onClick={() => inputOperator("*")}>×</button>
          <button onClick={() => inputOperator("-")}>−</button>
          <button onClick={() => inputOperator("+")}>+</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
