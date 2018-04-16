var settings = {
    delay: 6000,
    gm4Count: 14,
    gamenightCount:5,
    modpackCount:3
}

var gm4Slide = 1;
var gamenightSlide = 0;
var modpackSlide = 0;

var gm4Slides=document.getElementsByClassName("gm4Image");
var gamenightSlides=document.getElementsByClassName("gameImage")
var modpackSlides=document.getElementsByClassName("modpackImage")




var y = setInterval (function() {
    //gamemode 4 slideshow
    for (i = 0; i < gm4Slides.length; i++) {
      gm4Slides[i].style.display = "none"; 
    }
    
    gm4Slides[gm4Slide].style.display = "block";
    gm4Slide++;
    
    if (gm4Slide>=settings.gm4Count) {
        gm4Slide=0
    }
    
    //Gamenight Slide show
    for (i=0;i<gamenightSlides.length; i++) {
        gamenightSlides[i].style.display = "none";
    }
    
    gamenightSlides[gamenightSlide].style.display = "block";
    gamenightSlide++;
    
    if (gamenightSlide>=settings.gamenightCount) {
        gamenightSlide=0
    }
    
    //modpack image slide show
    for (i = 0; i < modpackSlides.length; i++) {
      modpackSlides[i].style.display = "none"; 
    }
    
    modpackSlides[modpackSlide].style.display = "block";
    modpackSlide++;
    
    if (modpackSlide>=settings.modpackCount) {
        modpackSlide=0
    }
   
}, settings.delay)