//things to fix for future parse float for decimal values. roiund decimals too 
//change css make it look nice
// try adding percent and negative changer


function add(num1,num2){

    result = num1+num2;
    console.log("result = " +result);
    return (result);
}
function subtract(num1 , num2 ){

    result = num1-num2;
    console.log(result);
    return (result);
}
function multiply(num1 , num2 ){

    result = num1*num2;
    console.log(result);
    return (result);
}
function divide(num1, num2){
    if(num2 != 0){
    result = num1/num2;
    }
    else{
        // console.log("DIV/0");
        return "DIV/0";
    }
    console.log(result);
    return (result)

}

function operate(num1,num2, operation){

    if(operation == "+"){
        let result = add(num1,num2);
        return result;
    }
    if(operation == "-"){
        let result = subtract(num1,num2);
        return result;
    }
    if(operation == "X"){
        let result = multiply(num1,num2);
        return result;
    }
    if(operation == "/"){
        let result = divide(num1,num2);
        return result;
    }

}
let displayValue = 0 ;

let num1 ='';
let num2 ='';
//can use display value as previous value to determine what to do next 
//starting value should be 0; 

let operators = ['/','X','=','-','+','AC'];
let operator1 ='';
let operator2 ='';
let previous = ''; //try and track previous value
//gets value of button press and puts it to display
//in this i can add if value is number or operartor
function getValue(button){

    let value = button.getAttribute('value');
    console.log("this is value clicked" +value);
    console.log("this is prev clicked" + previous);
    console.log('');
    //if value is an operator
    if(operators.includes(value)){
       // console.log("selected an operator");
        setOperator(value);
    }
    //if num1 is empty then update display value
    else if(num1 == ''){
     updateDisplay(value); //update to only when number1 is being put in
    }
    //if previous value was an operator, change display
    else if(operators.includes(previous) ){ 
        console.log("this is previous operator change display" +value)
        console.log('');
        changeDisplay(value);
        
    }
    //gets second string on numbers for num2
    else if( num1 != ''){

        console.log("this is num1 " +num1)
        console.log("this is num2 " +num2)
        updateDisplay(value);
    }
    previous = value;
}

//call this when operator is selected ands set operator to correct
function setOperator(operatorValue){
    //console.log(operatorValue + " this is the value called")
    //operaotr clears screen and values
    if(operatorValue == 'AC'){
        changeDisplay(0);
        operator1 ='';
        operator2 ='';
        num1 ='';
        num2 ='';
    }
    //if second operator is +
    // else if(operatorValue == '+' && operator1 !=''){
    //     operator2 = '+';
    //     // console.log("this is num1 "+num1);
    //     // console.log("this is op2 "+operator2);
    //     // console.log("this is display value "+displayValue);
    //      result = operate(parseInt(num1),2,operator1);
    //     //updating operator to next
    //     changeDisplay(result);
    //     operator1 ='+';
    //     operator2 ='';
    // }
    else if(operatorValue == '=' && operator1 !=''){
        operator2 = '=';
        // console.log("this is op2 " + operator2);
        // console.log("this is display value "+displayValue);
        num2 = displayValue;
        result = operate(parseInt(num1),parseInt(num2),operator1);
        changeDisplay(result);
        operator1 ='';
        operator2 ='';
        num1 =result;
        displayValue = result;
        console.log("new num1 = result " + num1);

    }
    else if(operatorValue == '-' && operator1 !=''){
        //if statement for if num1 exists but both operators are pressed suse num1 twice
        operator2 = '-';
        // console.log("this is op2 " + operator2);
        // console.log("this is display value "+displayValue);
        num2 = displayValue;
        console.log("num1 - num2 operator " + num1 + ' ' + num2 + ' ' +operator1);
        result = operate(parseInt(num1),parseInt(num2),operator1);
        changeDisplay(result);
        operator1 ='-';
        operator2 ='';
        num1 = result;
        displayValue = result;
        console.log("new num1 = result " + num1);

    }
    else if(operatorValue == '+' && operator1 !=''){
        //if statement for if num1 exists but both operators are pressed suse num1 twice
        operator2 = '+';
        // console.log("this is op2 " + operator2);
        // console.log("this is display value "+displayValue);
        num2 = displayValue;
        console.log("num1 - num2 operator " + num1 + ' ' + num2 + ' ' +operator1);
        result = operate(parseInt(num1),parseInt(num2),operator1);
        changeDisplay(result);
        operator1 ='+';
        operator2 ='';
        num1 = result;
        displayValue = result;
        console.log("new num1 = result " + num1);

    }
    else if(operatorValue == 'X' && operator1 !=''){
        //if statement for if num1 exists but both operators are pressed suse num1 twice
        operator2 = 'X';
        // console.log("this is op2 " + operator2);
        // console.log("this is display value "+displayValue);
        num2 = displayValue;
        console.log("num1 X num2 operator " + num1 + ' ' + num2 + ' ' +operator1);
        result = operate(parseInt(num1),parseInt(num2),operator1);
        changeDisplay(result);
        operator1 ='X';
        operator2 ='';
        num1 = result;
        displayValue = result;
        console.log("new num1 = result " + num1);

    }
    else if(operatorValue == '/' && operator1 !=''){
        //if statement for if num1 exists but both operators are pressed suse num1 twice
        operator2 = '/';
        // console.log("this is op2 " + operator2);
        // console.log("this is display value "+displayValue);
        num2 = displayValue;
        console.log("num1 / num2 operator " + num1 + ' ' + num2 + ' ' +operator1);
        result = operate(parseInt(num1),parseInt(num2),operator1);
        changeDisplay(result);
        operator1 ='/';
        operator2 ='';
        num1 = result;
        displayValue = result;
        console.log("new num1 = result " + num1);

    }
    //
    // else if(operator1 !=''){
        
    //     num2 = displayValue;
    //     console.log("value current2 =" + displayValue);
    // }
    else{ 
        operator1 = operatorValue;
        num1 = displayValue;
        // numbool = true;
        console.log("value current1 =" + displayValue);
    }
    
    console.log("this is op1 "+operator1);

}
function getOperator(button,displayValue,operator1){
    let value = button.getAttribute('value');
    console.log(value);
   
    //if display value and button pressed is an operator
    // if(operators.includes(displayValue)){

    // }
    

}
//call this when number is being selected and not operator
function updateDisplay(addVal){
    let display = document.getElementById('displayValue');
    if(display.innerHTML == '0'){
        display.innerHTML = '';
    }
    display.innerHTML += addVal; 
    // display.innerHTML = newVal;
    displayValue = display.innerHTML;

}
//call this when operator is selected and use 
//if clear is cvhosen set all to 0
function changeDisplay(newVal){
    let display = document.getElementById('displayValue');
    console.log("this is innerhtml " +display.innerHTML);
    display.innerHTML = newVal;
    displayValue = display.innerHTML;

}
