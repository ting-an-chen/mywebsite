function openAlbum(divID) {
    // get the pages
    var album = document.getElementById('all_album').children;

    // hide all divs 
    //pages=array of divs
    //[] for the index(ex.0,1,2...) of the elements(pages of the children)
    for(var i = 0; i < album.length; i++) {
        album[i].style.display = "none";
    }

    // show the div with the id we want open
    //document=from the page
    document.getElementById(divID).style.display = "block";

    document.getElementById("coverphoto").style.display = "none";
}
