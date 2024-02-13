const buttons = document.querySelectorAll(".calcbtn");
const aC = document.querySelector(".AC");
const dE = document.querySelector(".DE");
const input = document.querySelector("#input")

let buttonsArray;
input.innerText = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

addEventListeners();

function addEventListeners()
{
    buttonsArray = Array.from(buttons);
    buttonsArray.forEach((item) => 
    {
        item.addEventListener("click", addDigit);
    });
    aC.removeEventListener("click", addDigit);
    dE.removeEventListener("click", addDigit);
    aC.addEventListener("click", AC);
    dE.addEventListener("click", DE);
}

function addDigit(Event)
{
    let digit = Event.target.innerText;
    if(IsOperator(digit))
    {
        if(firstNumber == "")
        {
            firstNumber = input.innerText;
            operator = digit;
            input.innerText = "";
        }
        else
        {
            if(IsOperator(input.innerText))
            {
                operator = digit;
            }
            else
            {
                secondNumber = input.innerText;
                input.innerText = Evaluate(firstNumber, operator, secondNumber);
                firstNumber = "";
                secondNumber = "";
                operator = "";
                return;
            }
        }
    }
    if(IsOperator(input.innerText))
    {
        input.innerText = "";
    }

    input.innerText += digit;
}

function DE()
{
    input.innerText = input.innerText.substring(0, input.innerText.length-1);
}
function AC()
{
    input.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function IsOperator(digit)
{
    if(digit == "+" || digit == "-" || digit == "*" || digit == "/" || digit == "=")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function Evaluate(_firstNumber, _operator, _secondNumber)
{
    _firstNumber = parseInt(_firstNumber);
    _secondNumber = parseInt(_secondNumber);
    let result;

    switch (_operator)
    {
        case "+":
            result = Add(_firstNumber, _secondNumber);
            break;
        case "-":
            result = Subtract(_firstNumber, _secondNumber);
            break;
        case "*":
            result = Multiply(_firstNumber, _secondNumber);
            break
        case "/":
            result = Divide(_firstNumber, _secondNumber);
            break
        default:
            console.log("Error Can't Specify Operator");
    }
    return result;
}

function Add(fn, sn)
{
    return fn + sn;
}
function Subtract(fn, sn)
{
    return fn - sn;
}
function Multiply(fn, sn)
{
    return fn * sn;
}
function Divide(fn, sn)
{
    return fn / sn;
}