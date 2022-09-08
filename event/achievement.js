let achievementDetail = document.getElementById("achievement-detail");

function achievementOnClick(){
    if(achievementDetail.hidden) {
        achievementDetail.hidden = false;
        showAchievementDetail();
    }
    else {
        achievementDetail.hidden = true;
        hideAchievementDetail();
    }
}

document.getElementById("achievement-trigger").onclick = achievementOnClick;