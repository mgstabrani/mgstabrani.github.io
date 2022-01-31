let techStackDetail = document.getElementById("tech-stack-detail");

function techStackOnClick(){
    if(techStackDetail.hidden) {
        techStackDetail.hidden = false;
        showTechStackDetail();
    }
    else {
        techStackDetail.hidden = true;
        hideTechStackDetail();
    }
}

document.getElementById("tech-stack-trigger").onclick = techStackOnClick;