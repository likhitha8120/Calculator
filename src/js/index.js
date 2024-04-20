const acBtn= document.querySelector('.ac');
const displayScreen= document.querySelector('.display')
const zeroBtn= document.querySelector('.zero')
const oneBtn= document.querySelector('.one')
const twoBtn= document.querySelector('.two')
const threeBtn= document.querySelector('.three')
const fourBtn= document.querySelector('.four')
const fiveBtn= document.querySelector('.five')
const sixBtn= document.querySelector('.six')
const sevenBtn= document.querySelector('.seven')
const eightBtn= document.querySelector('.eight')
const nineBtn= document.querySelector('.nine')
const plusBtn= document.querySelector('.plus')
const minusBtn=  document.querySelector('.minus')
const intoBtn=  document.querySelector('.into')
const divideBtn=  document.querySelector('.divide')
const dotBtn=  document.querySelector('.dot')
const equalBtn= document.querySelector('.equal')
const plusMinusBtn= document.querySelector('.plusMinus')

let operator='';
let firstNum='';
let secondNum='';
let firstFilled=false;
let number1=''
let number2=''

acBtn.addEventListener('click', ()=>{
  displayScreen.innerText= '';
  operator='';
  firstNum='';
  secondNum='';
  firstFilled=false;
  number1=''
  number2=''
})

const assignValue= (value)=>{
  displayScreen.innerText+=value;
  firstFilled?secondNum=value:firstNum=value;
  firstFilled?firstNum='':(number1+=firstNum);
  firstFilled?(number2+=secondNum):secondNum='';

}

dotBtn.addEventListener('click',()=>{
  let value = '.';
  assignValue(value)
})


oneBtn.addEventListener('click',()=>{
  let value = '1';
  assignValue(value)
})

twoBtn.addEventListener('click',()=>{
  let value = '2';
  assignValue(value)
  

})

threeBtn.addEventListener('click',()=>{
  let value = '3';
  assignValue(value)

})

fourBtn.addEventListener('click',()=>{
  let value = '4';
  assignValue(value)

})

fiveBtn.addEventListener('click',()=>{
  let value = '5';
  assignValue(value)

})

sixBtn.addEventListener('click',()=>{
  let value = '6';
  assignValue(value)

})

sevenBtn.addEventListener('click',()=>{
  let value = '7';
  assignValue(value)

})

eightBtn.addEventListener('click',()=>{
  let value = '8';
  assignValue(value)

})

nineBtn.addEventListener('click',()=>{
  let value = '9';
  assignValue(value)

})

zeroBtn.addEventListener('click',()=>{
  let value = '0';
  assignValue(value)
})

let assingOpr=(value)=>{
  displayScreen.innerText+=value;
  operator=value;
  firstFilled=!firstFilled;

}

plusBtn.addEventListener('click',()=>{
  let value= '+'
  assingOpr(value)
})

minusBtn.addEventListener('click',()=>{
  let value= '-'
  assingOpr(value)
})

divideBtn.addEventListener('click',()=>{
  let value= '%'
  assingOpr(value)
})

intoBtn.addEventListener('click',()=>{
  let value= 'X'
  assingOpr(value)
})

plusMinusBtn.addEventListener('click',()=>{
  let value= '/'
  assingOpr(value)
})

let displayText= function(result){
  displayScreen.innerText='';
  displayScreen.innerText+=result;

}

let operations= function(){
  switch(operator){
    case'+':{
      let result= parseInt(number1)+parseInt(number2)
      displayText(result)

    }
    break
    case'-':{
      let result= parseInt(number1)-parseInt(number2)
      displayText(result)

    }
    break
    case'X':{
      let result= parseInt(number1)*parseInt(number2)
      displayText(result)

    }
    break
    case'%':{
      let result= parseInt(number1)%parseInt(number2)
      displayText(result)

    }
    break
    case'/':{
      let result= parseInt(number1)/parseInt(number2)
      displayText(result)

    }
    break
  } 
}

equalBtn.addEventListener('click',()=>{
  operations()
  
})


document.addEventListener('keyup', function(event){
  let {key} =event;
  console.log(key)
  switch(key){
    case '.' :{
      let value = '.';
      assignValue(value);
    }
    break;
    case '0' :{
      let value = '0';
      assignValue(value);
    }
    break;
    case '1':{
      let value = '1';
      assignValue(value);
    }
    break;
    case '2':{
      let value = '2';
      assignValue(value);
    }
    break;
    case '3':{
      let value = '3';
      assignValue(value);
    }
    break;
    case '4':{
      let value = '4';
      assignValue(value);
    }
    break;
    case '5':{
      let value = '5';
      assignValue(value);
    }
    break;
    case '6':{
      let value = '6';
      assignValue(value);
    }
    break;
    case '7':{
      let value = '7';
      assignValue(value);
    }
    break;
    case '8':{
      let value = '8';
      assignValue(value);
    }
    break;
    case '9':{
      let value = '9';
      assignValue(value);
    }
    break;
    case '+':{
      let value= '+'
      assingOpr(value)
    }
    break;
    case '-':{
      let value= '-'
      assingOpr(value)
    }
    break;
    case '*':{
      let value= 'X'
      assingOpr(value)
    }
    break;
    case '%':{
      let value= '%'
      assingOpr(value)
    }
    break;
    case '/':{
      let value= '/'
      assingOpr(value)
    }
    break;
    case '=':{
      operations()

    }
    break;
  }
})











