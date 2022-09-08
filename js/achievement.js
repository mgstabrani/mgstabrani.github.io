function showAchievementDetail(){
    firstLine = document.createElement("hr");
    document.getElementById("achievement-detail").appendChild(firstLine);
    for(let i = achievement.length - 1; i > -1; i--) {

        // Create element for title
        const achievementTitle = document.createElement("h3");
        achievementTitle.innerHTML = achievement[i].title;
        const achievementTitleLink = document.createElement('a');
        achievementTitleLink.append(achievementTitle);
        achievementTitleLink.href = achievement[i].link;
        achievementTitleLink.target = '_blank';

        // Create element for issuer
        const achievementIssuer = document.createElement("a");
        achievementIssuer.innerHTML = achievement[i].issuer;
        achievementIssuer.href = achievement[i].issuerLink;
        achievementIssuer.target = '_blank';

        // Create element for date
        const achievementDate = document.createElement("p");
        achievementDate.innerHTML = achievement[i].date;

        // Create element for desc
        const achievementDesc = document.createElement("p");
        achievementDesc.innerHTML = achievement[i].description;

        // Create transition line 
        const transitionLine = document.createElement("hr");


        // Append element to html
        document.getElementById("achievement-detail").appendChild(achievementTitleLink);
        document.getElementById("achievement-detail").appendChild(achievementIssuer);
        document.getElementById("achievement-detail").appendChild(achievementDate);
        document.getElementById("achievement-detail").appendChild(achievementDesc);
        document.getElementById("achievement-detail").appendChild(transitionLine);
    }
}

function hideAchievementDetail(){
    document.getElementById("achievement-detail").innerHTML = "";
}