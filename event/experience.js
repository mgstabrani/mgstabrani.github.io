let experiencesDetail = document.getElementById("experiences-detail");

function experiencesOnClick(){
    if(experiencesDetail.hidden) {
        experiencesDetail.hidden = false;
        showExperiencesDetail();
    }
    else {
        experiencesDetail.hidden = true;
        hideExperiencesDetail();
    }
}

document.getElementById("experiences-trigger").onclick = experiencesOnClick;