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

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("page_container").style.marginLeft = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("page_container").style.marginLeft= "0";
  }
