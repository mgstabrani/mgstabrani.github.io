function showEducationDetail(){
    firstLine = document.createElement("hr");
    document.getElementById("education-detail").appendChild(firstLine);
    for(let i = education.length - 1; i > -1; i--) {

        // Create element for institution
        const educationInstitution = document.createElement("h3");
        const educationInstitutionlink = document.createElement("a");
        educationInstitution.appendChild(educationInstitutionlink);
        educationInstitutionlink.innerHTML = education[i].institution;
        educationInstitutionlink.href = education[i].website;

        // Create element for period
        const educationPeriod = document.createElement("p");
        educationPeriod.innerHTML = education[i].period;

        // Create element for major
        const educationMajor = document.createElement("h4");
        educationMajor.innerHTML = education[i].major;

        // Create transition line
        const transitionLine = document.createElement("hr");

        // Append element to html
        document.getElementById("education-detail").appendChild(educationInstitution);
        document.getElementById("education-detail").appendChild(educationPeriod);
        document.getElementById("education-detail").appendChild(educationMajor);
        document.getElementById("education-detail").appendChild(transitionLine);
    }
}

function hideEducationDetail(){
    document.getElementById("education-detail").innerHTML = "";
}