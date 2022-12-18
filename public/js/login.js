function eye(){
    const IpPassword = document.getElementById("myPassword");
    const seen = document.getElementById("hide1");
    const unseen = document.getElementById("hide2");

    if(IpPassword.type === 'password'){
        IpPassword.type = "text";
        seen.style.display = "block";
        unseen.style.display = "none";
    }
    else{
        IpPassword.type = "password";
        seen.style.display = "none";
        unseen.style.display = "block";        
    }
}

// var attempt=3;
// function validate()
// {
// var username = document.getElementById("email").value;
// var password = document.getElementById("password1").value; 
// var filter = /^([a-zA-Z0-9_\.\-])+\@((a-zA-Z0-9]{2-4})+$/;
// if(username == )
// {
// alert("Enter the username");
// }
// else if(password == '')
// {
//  alert("enter the password");
// }
// else if (password.length < 8 || password.length > 8)
// {
// alert("password min and max length is 8.");
// }
// else if(!filter.test(username))
// {
// alert("Enter valid email id.");
// }
// else if 
// {
 
//  alert("Login Successfully & You are redirecting to Ucompare Website");
//  window.location = "https://www.         ";
// }
// else
// {attempt--;
// alert("You have left "+attempt+" attempt;"};
// if(attempt == 0)
// {
// document.getElementById("email").disabled=true;

// document.getElementById("password1").disabled=true;
// document.getElementById("submit").disabled=true;
// else
// return false;

// }

// function clearFunc()
// {
//  document.getElementById("email").value="";
//  document.getElementById("password1").value="";
// }
