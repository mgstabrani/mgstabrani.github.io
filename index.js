const DEV_MODE = true;
const body = document.body;

if(! DEV_MODE) { 
    document.getElementById("development").hidden = true;
    alert("Don't open it! You'll find that I'm not good enough at UI design and front end :)")
}
else document.getElementById("production").hidden = true;
