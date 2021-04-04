const name1= document.querySelector('#name')
const lastname= document.querySelector('#lastname')
const pesel= document.querySelector('#pesel')
const adres= document.querySelector('#adres')
const submit= document.querySelector('#submit')
const result = document.querySelector('.result')
let age=[]
let today=new Date()
let leadingZero=(i)=> {
    return (i < 10)? "0"+i : i;
        }
   let array = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00']     
   let hour = array[Math.floor(Math.random() * array.length)]
  function licz(){
    
    for(i=0;i<2;i++){

   
age.push(pesel.value.charAt(i));
    }
let x= String(age.join(''))
if(x=='00'||x=='01'||x=='02'||x=='03'||x=='04'||x=='05'||x=='06'||x=='07'||x=='08'||x=='09'||x=='10'){
    return 21-x
}
else{
return  100-x+21}
}
  

submit.addEventListener('click',(e)=>{
    e.preventDefault();
   
    result.innerHTML= `<div class="sheet">
    Osoba zarejestrowana:<br>
    ${name1.value} 
    ${lastname.value} <br>
    wiek: ${licz()} <br>
    Miejse szczepienia: ${adres.value}<br>
    Data szczepienia: ${leadingZero(today.getDate())+'-'+leadingZero(today.getMonth()+2)+'-'+today.getFullYear()}<br>
    Godzina szczepienia:${hour}<br>
    Zapisz i potwierdź
    <button class="btn" onclick="load()">OK</button>
    </div>`
})
function load(){
    result.innerHTML= `<div class="sheet"><img src="img/fasola.gif" alt=""></div>`
    setTimeout("window.location.reload()", 3000);
}
