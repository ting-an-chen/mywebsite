$(document).ready(function() {
    var dir = "photography/ALBUM_1/IMG_";
          var i = 1;
          while (i <=4) {
            $("#album1_images").append('<img src="' + dir + i + '.JPG" />');
            i++;
          }
        setupgallery();
      });
      

$(document).ready(function() {
    var dir = "photography/ALBUM_2/IMG_";
          var i = 1;
          while (i <=3) {
            $("#album2_images").append('<img src="' + dir + i + '.JPG" />');
            i++;
          }
        setupgallery();
      });

$(document).ready(function() {
    var dir = "photography/ALBUM_3/IMG_";
          var i = 1;
          while (i <=3) {
            $("#album3_images").append('<img src="' + dir + i + '.JPG" />');
            i++;
          }
        setupgallery();
      });


$(document).ready(function() {
    var dir = "photography/ALBUM_4/IMG_";
          var i = 1;
          while (i <=9) {
            $("#album4_images").append('<img src="' + dir + i + '.JPG" />');
            i++;
          }
        setupgallery();
      });

      
      
      