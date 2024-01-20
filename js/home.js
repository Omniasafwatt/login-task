var welcome =JSON.parse(localStorage.getItem('namedata'));



document.getElementById('welcomename').innerHTML=`<h1 class="m-4">Welcome ${welcome}</h1>`
console.log(welcome);
    
function logout(){
    window.location = "../index.html"
}