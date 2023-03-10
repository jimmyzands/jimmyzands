let menuVisible = false;
//Show Hide menu
function menuShowHide() {
    if(menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select() {
    //Hide menu when select option
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Animation hability
function effecthability() {
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300) {
        let hability = document.getElementsByClassName("progress");
        hability[0].classList.add("html");
        hability[1].classList.add("css");
        hability[2].classList.add("javascript");
        hability[3].classList.add("typescript");
        hability[4].classList.add("python");
        hability[5].classList.add("java");
        hability[6].classList.add("flutter");
        hability[7].classList.add("kotlin");
        hability[8].classList.add("swift");
        hability[9].classList.add("c");
        hability[10].classList.add("cpp");
        hability[11].classList.add("csharp");
        hability[12].classList.add("react");
        hability[13].classList.add("php");
        hability[14].classList.add("mysql");
        hability[15].classList.add("teamwork");
        hability[16].classList.add("problem");
        hability[17].classList.add("leader");
        hability[18].classList.add("adaptability");
        hability[19].classList.add("critical");
        hability[20].classList.add("organizational");
        hability[21].classList.add("public");
        hability[22].classList.add("customer");
    }
}


//Scroll detection animation hability bar
window.onscroll = function() {
    effecthability();
} 
