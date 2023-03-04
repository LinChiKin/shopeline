let is_mobiletab_on=false;

function adsremove(){
    document.getElementById("ads_remove").style.left="-3000px";
    document.getElementById("ads_remove").style.animation="none";
}
function mobiletab(){
    if(is_mobiletab_on==false){
        document.querySelector("nav.nav-text .bar2").style.left="-3000px";
        document.querySelector("nav.nav-text .bar1").style.left="-3000px";
        document.querySelector(".mobile-tab").innerHTML="⏹";
        document.querySelector(".mobile-tab").style.fontSize="70px";
        document.querySelector(".mobile-tab").style.top="5px";
        document.querySelector(".mobile-tab").style.left="320px";
        is_mobiletab_on=true;
    } else{
        document.querySelector("nav.nav-text .bar2").style.left="0px";
        document.querySelector("nav.nav-text .bar1").style.left="0px";
        document.querySelector(".mobile-tab").innerHTML="&times;";
        document.querySelector(".mobile-tab").style.fontSize="130px";
        document.querySelector(".mobile-tab").style.top="-20px";
        document.querySelector(".mobile-tab").style.left="330px";
        is_mobiletab_on=false;
    }
}