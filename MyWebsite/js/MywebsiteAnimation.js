if($(window).width() >= 974){      
      
                $(document).ready(function(){
                $(window).scroll(function(){
                        var scroll = $(window).scrollTop();
                        if(scroll>900){
                                $("header").css("background","rgb(245, 125, 195)","opacity", 0.3);
                                $("header").css("box-shadow","0 7px 7px -2px rgba(255,255,255)", 0.3);
                                $(".logotext").css("font-size",27);
                                $("#nav li a ").css("font-size",14);
                                
                        }
                        else{
                                $("header").css("box-shadow","none", 0.3);
                                $("header").css("background","");
                                $(".logotext").css("font-size",24);
                                $("#nav li a ").css("font-size",12);
                        }
                        if(scroll>50 && scroll<400){
                                $(".buttonpart p").css("opacity", 1);   
                                $(".buttonpart p").css("font-size", 20);  
                        }
                        else{
                          
                                $(".buttonpart p").css("opacity", 0); 
                                $(".buttonpart p").css("font-size",2);  
                        }
                        
                })
                })
}


  
        
$("fa").click(function(){
        alert("The paragraph was clicked.");
      });

window.onload=function(){
        var $button = document.querySelector('.button');
        $button.addEventListener('click', function() {
                var duration = 0.3,
                    delay = 0.08;
                    
                TweenMax.to($button, duration, {transition:7,scaleY: 1.3, ease: Expo.easeOut});
                TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
                TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
              });
}
 

                
   

function detectmob() {
        if(window.innerWidth <= 800 && window.innerHeight <= 600) {
          return true;
        } else {
          return false;
        }
     }







  $(document).ready(function(){
       
  $("#dropdown").toggle(
    function(){$("nav ul").css({"display": "block"});
    $("nav").css("background","rgb(245, 125, 195)");       
    $("greensmall").css({"position":"none"});
    $("#dropdown").css({"color":"rgb(0,0,0)"});
    

},
function(){$("nav ul").css({"display": "none"});
$("nav").css("background","none");
$("#dropdown").css({"color":""});
  });
});

//or(animating)  jsanimate-fade-out //// 
 /*
 var images = [ "../Img/adsnodawjidawjod.png",
 "../Img/macbook.jpg",
 "../Img/hello-world.jpg",
 ];
    $(function () {
        var i = 0;
        $("#slide1").css("background-image", "url(images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#slide1").fadeOut("slow", function () {
                $(this).css("background-image", "url(images/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 10000);
    });
*/


    var i = 0;
function change() {
  var doc = document.getElementById("theend");
  var color = ["rgb(105,105,105)", "black"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000); 
          
                                        //My counter numbers option 
$(document).ready(function(){
$("#counter").counterUp({
  delay: 1,
  time: 3000
  });                                      
  $("#counter1").counterUp({
  delay: 10,
  time: 3000
  });
  $("#counter2").counterUp({
  delay: 10,
  time: 3000
  });
  $("#counter3").counterUp({
  delay: 10,
  time: 3000
  });
});


