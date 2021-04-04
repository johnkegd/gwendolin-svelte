<style>
.circle{
    width:12vmin; height:12vmin;
    position:fixed;
    border-radius:50%;
    background-color:rgb(113, 68, 218);
    transition:top 0.8s, left 0.8s, transform 0.1s, opacity 0.8s, width 0.25s;
    box-shadow:0 0 0.8vmin black;
    text-align:center;
    line-height:12vmin;
    font-size:2vmin;
}

.circle:active{
    transform:scale(0.88);
}

#HomeBtn{
    left:5vmin;
    top:5vmin;
    z-index:2;
}

#ProfileBtn{
    left:29vmin;
    top:5vmin;
}

#BackgroundMod{
    left:53vmin;
    top:5vmin;
}

#circle13{
    left:77vmin;
    top:5vmin;
}

#circle21{
    left:5vmin;
    top:29vmin;
}

#circle22{
    left:5vmin;
    top:53vmin;
}

#circle23{
    left:5vmin;
    top:77vmin;
}

/*-------------------*/

#col{
    position:absolute;
    width:70%;
    height:70%;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    border-radius:50%;
    outline:none;
}

body{
    background:white;
/*     transition:background 0.2s;
 */
}

a{
    color:black;
}

#copy{
    position:fixed;
    right:0;
    bottom:0;
    margin:0;
    color:white;
}

#gpsContent{
    position:absolute;
    left:0;
    top:0;
    z-index:-1;
    opacity:0;
    text-align:center;
    font-size:4vmin;
    font-weight:bold;
    border-radius:50vmax;
}

#set{
    position:fixed;
    bottom:-5vmin; left:0;
    font-size:4vmin;
    margin:0;
    transition:bottom 0.5s;
}

</style>
<script>

const attachEvents = () => {
    document.querySelectorAll("#HomeBtn, #BackgroundMod, #circle23, #circle22, #circle21").forEach(function(element){
        element.addEventListener("click", function(e) {
            eventController(e);
        });
    });
}

function eventController(e) {
    switch(e.target.id) {
            case "HomeBtn":
                draw();
                break;
            case "BackgroundMod":
                darkMode();
                break;
            case "circle23":
                showColorSwitch();
                break;
            case "circle22":
                showGps();
                break;
            case "circle21": 
                settings();
                break;

        }
}
var alpha = true;

function draw(){
    if(alpha == true){
        for(let k = 1; k < document.getElementsByClassName("main").length; k++){
        document.getElementsByClassName("main")[k].style.top="5vmin";
        document.getElementsByClassName("main")[k].style.left="5vmin";
        alpha = false;
        }
    }
    else{
        document.getElementById("ProfileBtn").style.left="29vmin";
        document.getElementById("BackgroundMod").style.left="53vmin";
        document.getElementById("circle13").style.left="77vmin";
        document.getElementById("circle21").style.top="29vmin";
        document.getElementById("circle22").style.top="53vmin";
        document.getElementById("circle23").style.top="77vmin";
        alpha = true;
    }
    GPS = true;
    showGps();
}


var activeColor = false;
function showColorSwitch(){
    if(activeColor == false){
        document.getElementById("circle23").innerHTML="<input type = color id = 'col' onchange = editColor()>";
        activeColor=true;
    }
    
}

function editColor(){
    for(let q = 0; q < document.getElementsByClassName("circle").length;q++){
        document.getElementsByClassName("circle")[q].style.background=document.getElementById("col").value;
    } document.getElementById("circle23").innerHTML="<i class = 'fas fa-edit'></i>";
        activeColor=false;
}

var dm = false;
function darkMode(){
    if(dm == false){
        document.body.style.background = "#323232";
        document.getElementById("dm").classList="fas fa-cloud-sun";
        dm = true;
    }
    else{
        document.body.style.background = "white";
        document.getElementById("dm").classList="fas fa-cloud-moon";
        dm = false;
    }
}

function gps() {
    jQuery.get("https://ipinfo.io", function(response) {
    let date = new Date();
    document.getElementById("gpsContent").style.width = "60vmin"
        setTimeout(function(){
            document.getElementById("gpsContent").innerText =date.getHours() + ":" + date.getMinutes() + "   " + response.city+" "+response.country;
        },250)
  
}, "json")
}


let GPS = false;
function showGps(){
    if(GPS == false){
        document.getElementById("gpsContent").style.left="200%";
        document.getElementById("gpsContent").style.opacity="1";
       // setTimeout(gps,1000);
        GPS = true;
    }
    else{
        document.getElementById("gpsContent").innerText="";
        document.getElementById("gpsContent").style.width = "12vmin";
            document.getElementById("gpsContent").style.left="0";
        document.getElementById("gpsContent").style.opacity="0";
        GPS = false;
    }
}


function settings(){
    document.getElementById("set").style.bottom= "0";
    setTimeout(function(){
        document.getElementById("set").style.bottom = "-5vmin"
    },1200);
}

document.addEventListener("DOMContentLoaded", attachEvents);
</script>

<div class = "circle main" id = "HomeBtn">
    <i class = "fas fa-home"></i>
</div>
<div class = "circle main" id = "ProfileBtn">
    <a href = "https://www.sololearn.com/Profile/7938943/?ref=app"><i class = "fas fa-address-book"></i></a>
</div>
<div class = "circle main" id = "BackgroundMod">
    <i class = "fas fa-cloud-moon" id = "dm"><img src="Assets/dark_mode-24px.svg" alt="" width="60px"></i>
</div>
<div class = "circle main" id = "circle13">
    <i class = "fas fa-bell"></i>
</div>
<div class = "circle main" id = "circle21">
    <i class = "fas fa-cogs"></i>
</div>
<div class = "circle main" id = "circle22">
    <div class = "circle" id = "gpsContent"></div>
    <i class = "fas fa-map"></i>
</div>
<div class = "circle main" id = "circle23">
    <i class = "fas fa-edit"></i>
</div>