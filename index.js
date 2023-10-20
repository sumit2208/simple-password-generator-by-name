function generatePassword(){
    const username = document.getElementById("username").value;
    const passwordLength = 12;
    const copy = document.getElementById("copy");
  

    function generateRandomPassword(username, length){

        if(username.length >= length){
            return username.slice(0, length);
        }
        else{
            const extraChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
            const remainingLength = length - username.length;
            let password = username;
        

        for(let i = 0; i < remainingLength; i++){
            const randomChar = extraChars[Math.floor(Math.random() * extraChars.length)];
            password += randomChar;
        }
        return password;
    }
}
           
        const password = generateRandomPassword(username, passwordLength);
        document.getElementById("password").textContent =  password;
        // document.getElementById("password").textContent =  generateRandomPassword(username, passwordLength); 
        document.getElementById("password").style.color="white"
        document.getElementById('password').appendChild(copy); 
 
        const Password = document.getElementById('password');
 
 
    copy.addEventListener('click', function(){
    const range = document.createRange();
    range.selectNode(Password);
    
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    document.execCommand("copy");

    window.getSelection().removeAllRanges();

    Password.style.color="black";
 
    
}); 
       
};












 