function load_img_from_album(album_number,number_of_imgs) {
  var dir = "photography/ALBUM_"+album_number+"/IMG_";
  var i = 1;
  while (i <=number_of_imgs) {
    $("#album"+album_number+"_images").append('<img src="' + dir + i + '.JPG" />');
    i++;
  }
  setupgallery();
}

$(document).ready(function() {
  load_img_from_album(1,21);
  load_img_from_album(2,16);
  load_img_from_album(3,9);
  load_img_from_album(4,18);
  });



      
      
      