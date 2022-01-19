function showExperiencesDetail(){
    firstLine = document.createElement("hr");
    document.getElementById("experiences-detail").appendChild(firstLine);
    for(let i = 0; i < experiences.length; i++) {

        // Create element for position
        const experiencesPosition = document.createElement("h3");
        experiencesPosition.innerHTML = experiences[i].position;

        // Create element for company
        const experiencesCompany = document.createElement("p");
        experiencesCompany.innerHTML = experiences[i].company;

        // Create element for location
        const experiencesLocation = document.createElement("p");
        experiencesLocation.innerHTML = experiences[i].location;

        // Create element for period
        const experiencesPeriod = document.createElement("p");
        experiencesPeriod.innerHTML = experiences[i].period;

        // Create element for des
        const experiencesDesc = document.createElement("ul");
        for(let j = 0; j < experiences[i].desc.length; j++) {
            const pointDesc = document.createElement("li");
            pointDesc.innerHTML = experiences[i].desc[j];
            experiencesDesc.appendChild(pointDesc);
        }

        // Append element to html
        document.getElementById("experiences-detail").appendChild(experiencesPosition);
        document.getElementById("experiences-detail").appendChild(experiencesCompany);
        document.getElementById("experiences-detail").appendChild(experiencesLocation);
        document.getElementById("experiences-detail").appendChild(experiencesPeriod);
        document.getElementById("experiences-detail").appendChild(experiencesDesc);
    }
    lastLine = document.createElement("hr");
    document.getElementById("experiences-detail").appendChild(lastLine);
}

function hideExperiencesDetail(){
    document.getElementById("experiences-detail").innerHTML = "";
}