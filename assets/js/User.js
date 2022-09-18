var accountHolders = {
    emails: ["afuahsekyiwaaa@gmail.com"],
    passwords: ["goodToGo"]
}
console.log(accountHolders) 
let newUserEmail
const newUser = () => {
     newUserEmail = document.getElementById("signUpEmail").value
    // accountHolders.emails.push(newUserEmail)
    // let newUserPassword = document.getElementById("signUpPassword").value;
    // accountHolders.passwords.push(newUserPassword);
    console.log(newUserEmail) 

}

console.log(newUserEmail) 


const validateUser = () =>{
    let UserEmail = document.getElementById("email").value;
    let UserPassword = document.getElementById("password").value;
    let formSelector = document.getElementById("form")
    console.log(accountHolders)
    if(accountHolders.emails.includes(UserEmail) && accountHolders.passwords.includes(UserPassword)){
      formSelector.setAttribute("action", "Doctors.html");
      console.log("true")
    } else{
      console.log("false")
    }
  }