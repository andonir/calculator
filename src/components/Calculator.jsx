import "../css/calculator.css";
const showNumberInTerminal = (symbol)=>{
    const terminal = document.getElementById('terminal');
    terminal.textContent += `${symbol}`;
}
const showOperationinTerminal = (symbol)=>{
    const terminal = document.getElementById('terminal');

    terminal.textContent += `${symbol}`
}
const getResult = ()=>{
    let num1,num2;

    const terminal = document.getElementById('terminal');
    for(let i = 0; i<terminal.textContent.length; i++){
        if('*' == terminal.textContent[i]){
            num1 = terminal.textContent.split('*')[0];
            num2 = terminal.textContent.split('*')[1];
            terminal.textContent = num1*num2;
        }else if('/' == terminal.textContent[i]){
            num1 = terminal.textContent.split('/')[0];
            num2 = terminal.textContent.split('/')[1];
            terminal.textContent = num1/num2;
        }else if('+' == terminal.textContent[i]){
            num1 = parseInt(terminal.textContent.split('+')[0]);
            num2 = parseInt(terminal.textContent.split('+')[1]);
            terminal.textContent = num1+num2;
        }else if('-' == terminal.textContent[i]){
            num1 = terminal.textContent.split('-')[0];
            num2 = terminal.textContent.split('-')[1];
            terminal.textContent = num1-num2;
        }
    }
}
const Calculator = () => {
  return (
    <div className="calculator-component-container">
      <div className="calculator-container">
        <h1>Calculator</h1>
        <div className="container-items">
          <span className="terminal" id="terminal"></span>
          <div className="buttons">
            <button className="special" id="buttonAC" onClick={()=>{
    const terminal = document.getElementById('terminal');
    terminal.textContent = ''
}}>
              AC
            </button>
            <button className="operation" id="buttonDivide" onClick={()=>showOperationinTerminal('/')}>
              /
            </button>

            <button className="normal" id="button1" onClick={()=>showNumberInTerminal(1)}>
              1
            </button>
            <button className="normal" id="button2" onClick={()=>showNumberInTerminal(2)}>
              2
            </button>
            <button className="normal" id="button3" onClick={()=>showNumberInTerminal(3)}>
              3
            </button>
            <button className="operation" id="buttonMultiply" onClick={()=>showOperationinTerminal('*')}>
              *
            </button>

            <button className="normal" id="button4" onClick={()=>showNumberInTerminal(4)}>
              4
            </button>
            <button className="normal" id="button5" onClick={()=>showNumberInTerminal(5)}>
              5
            </button>
            <button className="normal" id="button6" onClick={()=>showNumberInTerminal(6)}>
              6
            </button>
            <button className="operation" id="buttonPlus"  onClick={()=>showOperationinTerminal('+')}>
              +
            </button>

            <button className="normal" id="button7" onClick={()=>showNumberInTerminal(7)}>
              7
            </button>
            <button className="normal" id="button8" onClick={()=>showNumberInTerminal(8)}>
              8
            </button>
            <button className="normal" id="button9" onClick={()=>showNumberInTerminal(9)}>
              9
            </button>
            <button className="operation" id="buttonRest"  onClick={()=>showOperationinTerminal('-')}>
              -
            </button>

            <button className="normal" id="button0" onClick={()=>showNumberInTerminal(0)}>
              0
            </button>
            <button className="operation" id="buttonEqual"  onClick={()=>getResult()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
