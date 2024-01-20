var email = document.getElementById('emailinput')
var password = document.getElementById('passinput')

// datalist=[]
// function getData(){
//     data={
//         email : email.value,
//         password : password.value,
//     }
//     datalist.push(data)
//     console.log(datalist);
// }
signuplist=[];

if(localStorage.getItem('data')){
signuplist =JSON.parse(localStorage.getItem('data'))
checkinput();
}
 
function checkinput(){
for(var i=0 ; i < signuplist.length ;i++){
    if(email.value == signuplist[i].email && password.value == signuplist[i].password){

        localStorage.setItem('namedata',JSON.stringify(signuplist[i].name))
        console.log(signuplist[i].name)
        window.location = "../home.html";
    }else{
        document.getElementById('texti').innerHTML=`<p class="text-danger">invalid input</p>`;
    }

}
}

