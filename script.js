
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
    const hourhand = document.querySelector('.hour-hand');

function setDate(){
const now =new Date();
//seconds
const seconds=now.getSeconds();
const secondsDegrees=((seconds/60)*360)+90;
secondHand.style.transform= `rotate(${secondsDegrees}deg)`;


console.log(seconds);

//minutes

const minutes=now.getMinutes();
const minutesDegrees=((minutes/60)*360)+90;
minHand.style.transform= `rotate(${minutesDegrees}deg)`;





//hours
const hours=now.getHours();
const hoursDegrees=((hours/12)*360)+90;
hourhand.style.transform= `rotate(${hoursDegrees}deg)`;









}
setInterval(setDate,1000);