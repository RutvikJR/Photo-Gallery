var img = document.getElementById("gallery").children;
var i;
var j;
var imgno;
var title;

for (i = 1; i < img.length; i++) {
    img[i].addEventListener('click', (event) => {
        var imgclass = event.target.parentElement.className;
        imgno = imgclass.substring(3, imgclass.length);
        title = event.target.innerText;
        console.log(imgno + title);
        if (imgno != '') {
            document.getElementById("display").style.display = "flex";
            document.getElementById("displayimg").src = "img/" + imgno + ".jpg";
            document.getElementById("displaytitle").innerText = title;
        }
    });
}

document.getElementById("prev").children[0].addEventListener('click', () => {
    if (imgno == 1) {
        imgno = 15;
    }
    var newimgno = parseInt(imgno) - 1;
    imgno = newimgno.toString();
    document.getElementById("displayimg").src = "img/" + imgno + ".jpg";
    title = document.getElementsByClassName("img" + imgno)[0].children[0].innerText;
    document.getElementById("displaytitle").innerText = title;

});

document.getElementById("next").addEventListener('click', () => {
    if (imgno == 14) {
        imgno = 0;
    }
    var newimgno = parseInt(imgno) + 1;
    imgno = newimgno.toString();
    document.getElementById("displayimg").src = "img/" + imgno + ".jpg";
    title = document.getElementsByClassName("img" + imgno)[0].children[0].innerText;
    document.getElementById("displaytitle").innerText = title;
});



document.getElementById("close").addEventListener('click', () => {
    document.getElementById("display").style.display = "none";
});