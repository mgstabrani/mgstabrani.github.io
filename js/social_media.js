const socialMediaDetail = document.getElementById('social-media');

for(let i = 0; i < socialMedia.length; i++) {
    socialMediaDetail.innerHTML += 
        '<a href="' + socialMedia[i].url + '"> ' + 
            '<img src="' + socialMedia[i].image + '">' +
        '</a>'
}
