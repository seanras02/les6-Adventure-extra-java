const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById('knopNoord')
const knopOost = document.getElementById('knopOost')
const knopZuid = document.getElementById('knopZuid')
const knopWest = document.getElementById('knopWest')

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties =[
    {
        "titel":"",
        "image":"img/0.jpg",
        "directions": {
            
        }

    },
]

//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg"


function show(index){
    myTitle.innerHTML = lokaties[index].titel
    myImage.src = lokaties[index].image;
    current_index = index;

    updateDirections();
}

function updateDirections(){
    let possible = lokaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);
    console.log(button_keys)

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}

function getInput(){
    show(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}

show(0);