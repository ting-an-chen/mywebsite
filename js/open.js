function openPage(divID) {
    // get the pages
    var pages = document.getElementById('page_container').children;

    // hide all divs 
    //pages=array of divs
    //[] for the index(ex.0,1,2...) of the elements(pages of the children)
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // show the div with the id we want open
    //document=from the page
    document.getElementById(divID).style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = 'block';
}
function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";
}

//for the loading picture
$(window).load(function(){
  $('.preload').fadeOut();
});