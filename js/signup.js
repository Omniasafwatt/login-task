var nameinput = document.getElementById('nameinput')
var email = document.getElementById('emailinput')
var password = document.getElementById('passinput')

datalist=[]

if(localStorage.getItem('data')){
datalist = JSON.parse(localStorage.getItem('data'))
}
function getData(){
    data={
        name : nameinput.value,
        email : email.value,
        password : password.value,
    }
    if(check(email.value) && nameinput.value.length>3 && password.value.length>7 && repeat()){
        document.getElementById('textm').innerHTML=`<p class="text-success text-bold">Success</p>`;
    datalist.push(data)
    localStorage.setItem('data',JSON.stringify(datalist))
    console.log(datalist);
    clear();
    }
    else{
        document.getElementById('textm').innerHTML=`<p class="text-danger">invalid input</p>`;
    }
}
function check(word){  
    var emailpattern = /^[A-Za-z0-9]{1,50}@(gmail|yahoo).com$/
     return emailpattern.test(word);
    
}
function clear(){
    nameinput.value=''
    email.value=''
    password.value=''
}
function repeat(){
    if(localStorage.getItem('data') == null){
        return true;
    }else{
    for(var i=0;i<datalist.length;i++){
    if(email.value == datalist[i].email){

         return false;
        // document.getElementById('textm').innerHTML=`<p class="text-danger">email already exist</p>`;

    }
}
return true;
}}