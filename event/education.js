let educationDetail = document.getElementById("education-detail");

function educationOnClick(){
    if(educationDetail.hidden) {
        educationDetail.hidden = false;
        showEducationDetail();
    }
    else {
        educationDetail.hidden = true;
        hideEducationDetail();
    }
}

document.getElementById("education-trigger").onclick = educationOnClick;