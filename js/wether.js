document.querySelector("#btn").addEventListener("click", wetherWidget);
function wetherWidget() {
    let temp = [-1, 8, 16, 21, 25, 27, 10];
    let weekSelect = document.getElementById("daysOfWeek");
    let valSelectDay = parseInt(weekSelect.options[weekSelect.selectedIndex].value);
    let showTemp = document.querySelector("span#tempNum");
    showTemp.innerHTML = temp[valSelectDay];

let showman = parseInt(temp[valSelectDay]);

if (showman < 0 ){
    document.getElementById("promo").innerHTML = "A mai napon forró csokival kedveskedünk a nagy hidegben !";
}
else if (showman < 15){
 document.getElementById("promo").innerHTML ="A reggeli hűvösben jól fog esni egy meleg tea !"  ;
}
else if (showman < 20){
    document.getElementById("promo").innerHTML = "Ma is megéri benézni hozzánk egy finom sütire !"
}
else if (showman < 25){
    document.getElementById("promo").innerHTML = "Ma érdemes beugrani egy finom fagylaltra !"
}
else{
    document.getElementById("promo").innerHTML = "A nagy melegben ma jég hideg limonádéval várunk !"
}
}
    
