
//get elements into variabel

const inputElem = document.getElementById('input');
const btn=document.getElementById('btn')
const msg=document.getElementById('msg')

//events
btn.onclick=function(){
   //get value from input
  const inpuValue= inputElem.value ;
  console.log(inpuValue)
  //put into value to parograph
  if(inpuValue!==''){
   msg.innerHTML =inpuValue;

   //empty inputValue
   inputElem.value='';
  }


}