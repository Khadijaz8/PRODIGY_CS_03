let result=document.querySelector(".result");
let password =document.querySelector("#password");
let strength=document.querySelector("#strength");
password.addEventListener( "input",()=>{
if(password.value.length> 0){
    result.style.display="block";
}
else{
    result.style.display="none";
}
if(password.value.length<4){
    strength.innerHTML="weak.";
    result.style.color="red";
}
else if(password.value.length>=4 &&password.value.length<8 ){
    strength.innerHTML="medium.";
    result.style.color="yellow";
}
else if(password.value.length >= 8){
    strength.innerHTML="strong.";
    result.style.color="greenyellow";

}
});