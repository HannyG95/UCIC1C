const inputEl1 = document.getElementById('inputEl1')
const inputEl2 = document.getElementById('inputEl2')
const inputE13 = document.getElementById("inputEl3")
const ulE1 = document.getElementById('ulE1')

document.getElementById("calc").addEventListener("click", function(){
	let password1 = inputEl1.value;
   let password2 = inputEl2.value;
   let password3 = inputEl3.value;
       ulE1.innerText = "Las contraseñas no coinciden."
   if(password1!==password2 || password3!==password2 || password3!== password1){
       ulE1.innerText = "Las contraseñas no coinciden."
   }
  else{
    ulE1.innerText ="Las contraseñas coinciden."
  }
})
	
	