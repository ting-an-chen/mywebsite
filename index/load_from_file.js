$(document).ready(function() {
var dir = "image/img_";
      var i = 1;
      while (i <=9) {
        $("#images").append('<img src="' + dir + i + '.JPG" />');
        i++;
      }
    setupgallery();
  });
  