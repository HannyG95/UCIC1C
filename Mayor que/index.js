const mi_edad = document.getElementById("mi_edad")
const edad_amigo = document.getElementById("edad_amigo")
const elemento_salida = document.getElementById("elemento_salida")

 


  function calc(){
  if(mi_edad.value>edad_amigo.value){
    elemento_salida.innerText="Eres mayor"
  }
  else if(mi_edad.value===edad_amigo.value){
    elemento_salida.innerText="Tienen la misma edad"
  }
  else{
    elemento_salida.innerText="Tu amigo es mayor que tu"
  }
  
   
}