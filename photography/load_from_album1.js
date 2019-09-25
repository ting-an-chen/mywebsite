$(document).ready(function() {
    var dir = "ALBUM_1/IMG_";
          var i = 1;
          while (i <=4) {
            $("#images").append('<img src="' + dir + i + '.JPG" />');
            i++;
          }
        setupgallery();
      });
      