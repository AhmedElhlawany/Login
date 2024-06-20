var useremail = document.getElementById("email")
var useremail1 = document.getElementById("email1")
var userpassword = document.getElementById("password")
var userpassword1 = document.getElementById("password1")
var firstName = document.getElementById("fname")
var danger=document.getElementById("danger");
var btn1 = document.getElementById("regbtn")

var regex= {
    name:{
        value:/^[a-z0-9_-]{3,15}$/,
        status:false
    },
    email:{
        value:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        status:false,
    },
    pass:{
        value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        status:false
    }
}
// reg
function ValidateName(){
    if (regex.name.value.test(firstName.value)){
        localStorage.setItem("name",firstName.value)
        regex.name.status=true;
        firstName.classList.remove("is-invalid")
        firstName.classList.add("is-valid")
        ndanger.classList.add("d-none")
        return true
    }else {
        regex.name.status=false;
        firstName.classList.remove("is-valid")
        firstName.classList.add("is-invalid")
        ndanger.classList.remove("d-none")
        return false

    }
}

function ValidateEmail(){
    if (regex.email.value.test(useremail.value)){
        regex.email.status=true;
        useremail.classList.remove("is-invalid")
        useremail.classList.add("is-valid")
        danger.classList.add("d-none")

        return true
    }else {
        regex.email.status=false;
        useremail.classList.remove("is-valid")
        useremail.classList.add("is-invalid")
        
        danger.classList.remove("d-none")
        return false

    }
}

function ValidatePass(){
    if (regex.pass.value.test(userpassword.value)){
        regex.pass.status=true;
        userpassword.classList.add("is-valid")
        userpassword.classList.remove("is-invalid")
        pdanger.classList.add("d-none")

        return true
    }else {
        regex.pass.status=false;
       
        userpassword.classList.remove("is-valid")
        userpassword.classList.add("is-invalid")
        
        pdanger.classList.remove("d-none")

        return false

    }
}

container=[];

function signup(){
    if (ValidateEmail() && ValidateName() && ValidatePass()==true)
{
    container.push({
        email:useremail.value,
        pass:userpassword.value,
    })
    localStorage.setItem("login",JSON.stringify(container))
    
    

   apear()
}else {
    
    error.classList.remove("d-none")
}
}


function apear(){
    window.location.href="index.html"
}

// login
function ValidateEmail1(){
    if (regex.email.value.test(useremail1.value)){
        regex.email.status=true;
        useremail1.classList.remove("is-invalid")
        useremail1.classList.add("is-valid")
        alert1.classList.add("d-none")

        return true
    }else {
        regex.email.status=false;
        useremail1.classList.remove("is-valid")
        useremail1.classList.add("is-invalid")
        alert1.classList.remove("d-none")
        return false

    }
}

function ValidatePass1(){
    if (regex.pass.value.test(userpassword1.value)){
        regex.pass.status=true;
        userpassword1.classList.add("is-valid")
        userpassword1.classList.remove("is-invalid")
        alert2.classList.add("d-none")

        return true
    }else {
        regex.pass.status=false;
       
        userpassword1.classList.remove("is-valid")
        userpassword1.classList.add("is-invalid")
        
        alert2.classList.remove("d-none")

        return false

    }
}




function logbtn()
{
    var loginData=JSON.parse(localStorage.getItem("login"))
    console.log(loginData);
    for (i=0;i<loginData.length;i++){
if (useremail1.value==loginData[i].email && userpassword1.value==loginData[i].pass){
    welcome()

}
else if(useremail1.value==""| userpassword1.value==""){
    error.classList.remove("d-none")
}else{
    error.classList.remove("d-none")
}
    }
}



function welcome(){
    window.location.href="welcome.html"
}

document.getElementById("username").innerHTML = localStorage.getItem("name");


