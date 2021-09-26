const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validName = false;


username.addEventListener("blur", () => {
   
    let regex = /^[A-Za-z]([0-9a-zA-Z]){3,10}$/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) { 
        console.log("matched");
        username.classList.remove("is-invalid");
        validName = true;
    }
    else {
        console.log("not");
        username.classList.add("is-invalid");
        validName = false;
    }
   
})

email.addEventListener("blur", () => {
   
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) { 
        console.log("matched");
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else {
        console.log("not");
        email.classList.add("is-invalid");
        validEmail = false;
    }
   
})



phone.addEventListener("blur", () => {
   
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) { 
        console.log("matched");
        phone.classList.remove("is-invalid");
        validPhone = true;
    }
    else {
        console.log("not");
        phone.classList.add("is-invalid");
         validPhone = false;
    }
   
})

let submit = document.getElementById("submit")
submit.addEventListener("click", (e) => {
    e.preventDefault();  //to not reload while pressing submit

    console.log("click");
    console.log(validName,validEmail, validPhone, );
    
    if (validEmail && validName && validPhone) {
        console.log("all details are Valid");
        let success = document.getElementById('success');
        success.classList.add("show");
        failure.classList.remove("show");
    }
    else {
        console.log("all details are not Valid");
    
        let failure = document.getElementById('failure');
        failure.classList.add("show");
        success.classList.remove("show");
    }
    // submit.classList.add = "show";
})