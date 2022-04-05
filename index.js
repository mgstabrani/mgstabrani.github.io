const DEV_MODE = false;
const body = document.body;

if(! DEV_MODE) { 
    document.getElementById("development").hidden = true;
}
else document.getElementById("production").hidden = true;
