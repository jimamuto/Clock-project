
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-Hand');
    const Hourhand = document.querySelector('.hour-Hand');

function setDate(){
const now =new setDate();
//seconds
const seconds=now.getSeconds();
const secondsDegrees=((seconds/60)*360)+90;
secondHand.style.transform= `rotate(${secondsDegrees}deg)`;


console.log(seconds);

//minutes

const minute=now.getMinutes();
const minutesDegrees=((seconds/60)*360)+90;
minutes.style.transform= `rotate(${minutesDegrees}deg)`;





//hours
const hour=now.getHours();
const hoursDegrees=((seconds/12)*360)+90;
hourHand.style.transform= `rotate(${hoursDegrees}deg)`;









}
setInterval(setDate,1000);