let images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg'];
let currentIndex = 0;
let currentZoom = 100;
function slide(value){
    currentIndex+= value;
    if (currentIndex > images.length-1) {
        currentIndex = 0;
    }

    if (currentIndex < 0){
        currentIndex = images.length-1;
    }
   document.getElementById('slider').style.backgroundImage = "url('"+images[currentIndex]+"')";
}

function zoom(value){
    currentZoom+= value;
    document.getElementById('slider').style.backgroundSize = currentZoom+'%'; 
}


