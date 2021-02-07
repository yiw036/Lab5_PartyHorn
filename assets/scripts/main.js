// main.js


//input field
document.getElementById("volume-number").addEventListener("input", volumeNumber);
function volumeNumber(){
    var volNum = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").value = volNum;
    document.getElementById("horn-sound").volume = volNum/100;
    document.getElementById("honk-btn").disabled = false;
    if(volNum >= 67 && volNum <= 100){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (volNum >= 34 && volNum <= 66){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(volNum >= 1 && volNum <= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(volNum == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}

//slider
document.getElementById('volume-slider').addEventListener("input", volumeSlider);
function volumeSlider(){
    var slideNum = document.getElementById("volume-slider").value;
    document.getElementById("volume-number").value = slideNum;
    document.getElementById("horn-sound").volume = slideNum/100;
    //vloume icon
    document.getElementById("honk-btn").disabled = false;
    if(slideNum >= 67 && slideNum <= 100){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (slideNum >= 34 && slideNum <= 66){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(slideNum >= 1 && slideNum <= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(slideNum == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}

// radio
document.getElementById("radio-air-horn").addEventListener("click", air_horn);
document.getElementById("radio-car-horn").addEventListener("click", car_horn);
document.getElementById("radio-party-horn").addEventListener("click", party_horn);

function air_horn() {
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
}

function car_horn() {
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}

function party_horn() {
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
}

// button
document.getElementById("honk-btn").addEventListener("click", honk);
function honk(e) {
  e.preventDefault();
  document.getElementById("horn-sound").play();
}
  
