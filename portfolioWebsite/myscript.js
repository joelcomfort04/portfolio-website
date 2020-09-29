

addListeners();




function addListeners() {
    var about = document.getElementById("about-div");
    var projects = document.getElementById("projects-div");
    var resume = document.getElementById("resume-div");

    about.addEventListener('click', pageScrollOnClick);
    projects.addEventListener('click', pageScrollOnClick);
    resume.addEventListener('click', pageScrollOnClick);

    window.addEventListener("scroll", menuScroll);

}

function scrollToElement(elementID) {
    var target = elementID
    target.scrollIntoView();
}

function pageScrollOnClick() {

    var name = this.getElementsByTagName('p')[0].innerHTML.toLowerCase();

    if(name == "about"){
        var target = document.getElementById("about-content");
        scrollToElement(target);
    }
    if(name == "projects"){
        var target = document.getElementById("projects-content");
        scrollToElement(target);
    }
    if(name == "resume/github"){
        var target = document.getElementById("resume-content");
        scrollToElement(target);
    }
    else{return;}

}


