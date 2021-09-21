var left=document.querySelector(".btn-left");
var right=document.querySelector(".btn-right");
var output=document.querySelector(".output");
var image=document.querySelector(".image");
var item=0;
window.addEventListener('DOMContentLoaded',function () {
 fetch('https://hplussport.com/api/products').then(response=>response.json()).then(json=>{
    output.innerText=json[0].name;
   image.src=json[0].image;
 }) });
function changeLeft(json,item){
    
    output.innerText=json[item].name;

    image.src=json[item].image;
    
};
function changeRight(json,item){
    
    output.innerText=json[item].name;
   
    
    image.src=json[item].image;
    console.log(item);
};
function reflectLeft(){
fetch('https://hplussport.com/api/products').then(response=>response.json()).then(json=>{
 if(item>0)item--;
 changeLeft(json,item);   
});}
function reflectRight(){
    fetch('https://hplussport.com/api/products').then(response=>response.json()).then(json=>{
     if(item<29)item++;
     changeRight(json,item);   
    });}
left.addEventListener("click",reflectLeft);
right.addEventListener("click",reflectRight);