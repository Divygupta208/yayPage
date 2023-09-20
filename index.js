
const form = document.querySelector("form")
    
form.addEventListener('submit' , (e) =>{
    if(!form.checkValidity()){
        e.preventDefault()
    }
    form.classList.add('was-validated')
})

function onsignup(event){
    event.preventDefault();

    console.log(document.getElementById('fname').value);
    console.log(event.target.email.value);
    console.log(event.target.phone.value);
    console.log(event.target.Date.value);
    console.log(event.target.time.value);

   }