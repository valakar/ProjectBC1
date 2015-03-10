function dimmingImage(img, imgSource, fadeTime, intervalTime, images, timeoutTime) {
    var images2 = [];
    for (var j = 0; j < images.length; j++) {
        images2.push((new Image()).src = imgSource + images[j]);
    };

    // image.css('background-image','url(/assets/main/header.png)');
    var i = 0;
    setTimeout(function() {
        setInterval(function() {
            $(img).fadeOut(+fadeTime, function() {
                $(img).css('background-image', 'url(' + images2[i] + ')');
                console.log(i + ' img ' + images2[i]);
                $(img).fadeIn(+fadeTime);
            });
            i++;
            if (i === images2.length) {
                i = 0;
            };
        }, intervalTime);
    }, timeoutTime);
};
$(document).ready(dimmingImage('.homepage_background', 'http://localhost:3000', 2400, 5000,
    ['/assets/main/header6.jpg','/assets/main/header5.jpg','/assets/main/header4.png',
        '/assets/main/header3.png','/assets/main/header2.png','/assets/main/header1.png',
        '/assets/main/header.png'], 0));
$(document).ready(dimmingImage('#productBannerDim1', 'http://localhost:3000', 2400, 5000,
    ['/assets/products/l7.jpg','/assets/products/l8.jpg','/assets/products/l2.jpg'],1000));
$(document).ready(dimmingImage('#productBannerDim2', 'http://localhost:3000', 2400, 5000,
    ['/assets/products/l1.jpg','/assets/products/l2.jpg','/assets/products/l7.jpg'],3000));

//Show full image on click
var ready;
ready = function() {
	$(document).on("click", ".show-full-image", function() {
		$('.modal-body').empty();
	  	var title = $(this).parent('a').attr("title");
	  	var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','');
	  	var width = getImgSize(bg);
      if (width > ($(window).width() * 0.9)) {
        width = $(window).width() * 0.9;
      };
	  	$('.modal-dialog').css('width', width + 40);
	  	var img = $("<img src = " + bg + " style=\"width:"+width+"px\" data-dismiss=\"modal\"/>")
	  	$(img).appendTo('.modal-body');
	  	$('#myModal').modal({show:true});
	});
};
$(document).ready(ready);
$(document).on('page:load', ready);

function getImgSize(imgSrc) {
    var newImg = new Image();
    newImg.src = imgSrc;
    var width = newImg.width;
    return width;
}

// var ready;
// ready = function() {
// 	$(".item").each(function(i, elem) {
//           var img = $(elem);
//           var div = $("<div />").css({
//             background: "url(" + img.attr("src") + ") center no-repeat",
//             width: img.width() + "px",
//             height: img.height() + "px",
// 			"background-size": "cover"
//           });
              
//           div.addClass("item");
//           div.addClass("show-full-image");
            
//           img.replaceWith(div);
//         });
// 	$(".item").fadeIn();
// };
// $(document).ready(ready);
// $(document).on('page:load', ready);