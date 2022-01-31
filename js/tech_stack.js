function showTechStackDetail(){
    firstLine = document.createElement("hr");
    document.getElementById("tech-stack-detail").appendChild(firstLine);
    for(let i = 0; i < techStack.length; i++) {

        // Create element for image
        const techStackImage = document.createElement("img");
        techStackImage.src = techStack[i].image;
        techStackImage.width = '30';
        techStackImage.height = '30';
        techStackImage.alt = techStack[i].name;

        // Create element for link
        const techStackLink = document.createElement("a");
        techStackLink.href = techStack[i].url;
        techStackLink.title = techStack[i].name;

        // Append element to html
        techStackLink.appendChild(techStackImage);
        document.getElementById("tech-stack-detail").appendChild(techStackLink);
        document.getElementById('tech-stack-detail').innerHTML += '<span>&nbsp;&nbsp;&nbsp;</span>';
    }
}

function hideTechStackDetail(){
    document.getElementById("tech-stack-detail").innerHTML = "";
}