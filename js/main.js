
$(document).ready(function() {
  
function fullscreen() {
    $('a').click(function() {
        if(!$(this).hasClass('noeffect')) {
            window.location = $(this).attr('href');
            return false;
        }
    });
}
 
fullscreen();

var setBanner = {
  init:function(){
    this.bannerSize();
    this.setFooter();
  },

  setFooter:function() {
    var top = $(document).height();
    //alert(top);
    $("#foot").css("top",top - 40);
  },

  bannerSize:function() {
    var viewportHeight = $(window).height() / 2;
    var stick = viewportHeight -65;
    $(".banner").css("height",viewportHeight + 150);
  }
};

/*
var stickyHeader = {
    init:function() {
      this.stick();
    },

    stick: function() {
      $(window).scroll(function(){
      var viewportHeight = $(window).height();
      var stick = viewportHeight -65;
      var top =  $(this).scrollTop();
      var height = $(this).height() - 60;
      height = (height / 100) * 100;
      if(top > height) {
        $(".navList").addClass("headerStick");
        $(".navList").css("top",0);
        $(".bannerOnly").addClass("blackOut");
      } else {
        $(".navList").removeClass("headerStick");
        $(".bannerOnly").removeClass("blackOut");
        $(".navList").css("top",stick);
      }
      });
    }
  };

*/

  var showInfo = {
    init:function() {
      this.info();
    },

    info:function() {
      $('.infoLi').hover(
          function(){ 
            var block = $(this).attr("data-id");
            if(block == 0) { $(".aboutInfo0").slideDown();}
            if(block == 1) { $(".aboutInfo1").slideDown();}
            if(block == 2) { $(".aboutInfo2").slideDown();}
          

         },
          function(){ $(".hideInfo").slideUp(); }
    )
    
    }
  };

  var tabs = {
    init:function() {
      this.switchTabs();
    },

    switchTabs:function() {
      var activeTab = $("#overviewTab");
      $("#overviewTab").addClass("activeTab");
      $(".campaignProfile").hide();
      $(".campaignComments").hide();
      $(".campaignUpdates").hide();

      $("#profileTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#profileTab");
        $("#profileTab").addClass("activeTab");
        $(".campaignSummary").hide();
        $(".campaignComments").hide();
        $(".campaignUpdates").hide();
        $(".campaignBanner").hide();
        $(".campaignProfile").fadeIn("fast");
        $(".footer").hide();
      });

      $("#overviewTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#overviewTab");
        $("#overviewTab").addClass("activeTab");
        $(".campaignBanner").fadeIn("fast");
        $(".campaignSummary").fadeIn("fast");
        $(".campaignComments").hide();
        $(".campaignUpdates").hide();
        $(".campaignProfile").hide();
        $(".footer").show();
      });

      $("#commentsTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#commentsTab");
        $("#commentsTab").addClass("activeTab");
        $(".campaignBanner").hide();
        $(".campaignSummary").hide();
        $(".campaignComments").fadeIn("fast");
        $(".campaignUpdates").hide();
        $(".campaignProfile").hide();
        $(".footer").show();
      });

      $("#updatesTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#updatesTab");
        $("#updatesTab").addClass("activeTab");
        $(".campaignBanner").hide();
        $(".campaignSummary").hide();
        $(".campaignComments").hide();
        $(".campaignUpdates").fadeIn("fast");
        $(".campaignProfile").hide();
        $(".footer").show();
      });
    }
  };

  var postComment = {
    init:function() {
      this.post();
    },

    post:function(){
      $(".postButton").click(function(){
        var text = $(".commentsInput").val();
        var insert = "<div class='comment'><img src='img/face2.jpg'><h4>Shaun Manic</h4><h5>Just Now</h5><p>"+text+"</p></div>";
        $(insert).appendTo(".commentsContainer").hide().slideDown();
        $(".commentsInput").val("");
      });
    }
  };

  var slider = {
    init:function(){
      this.slide();
    },

    slide:function(){
      var numberOfSlides = 3;
      var currentSlide = 1;
      var nextSlide = 2;
      var lastSlide = 3;
      //set arrow position 
      $("#right").css("left",$(window).width() - 40);
      //set slide width
      $(".slide img").css("width",$(window).width());
      //show first slide 
      $("#slide"+currentSlide).show();
      //on right arrow click 
      $("#right").click(function(){
        $("#slide"+nextSlide).css("left","-1500px");
        $("#slide"+nextSlide).show();
        $("#slide"+currentSlide).animate({
            "left":"1500px",
          }, 500);
        $("#slide"+nextSlide).animate({
            "left":"0px",
          }, 500);
        setTimeout(
          function() 
          {
            $("#slide"+currentSlide).hide();
            //update variables 
            lastSlide = currentSlide;
            currentSlide = nextSlide;
            nextSlide = nextSlide+1;
            if(nextSlide > numberOfSlides) {
              nextSlide = 1;
            }
          }, 501);
      });
      //on left arrow click 
      $("#left").click(function(){
        $("#slide"+lastSlide).show();
        $("#slide"+lastSlide).css("left","1500px");
        $("#slide"+currentSlide).animate({
            "left":"-1500px",
          }, 500);
        $("#slide"+lastSlide).animate({
            "left":"0px",
          }, 500);
        setTimeout(
          function() 
          {
            nextSlide = currentSlide;
            currentSlide = lastSlide;
            lastSlide = lastSlide -1;
            if(lastSlide < 1) {
              lastSlide = numberOfSlides;
            }

          }, 501);
      });
    }

  };

  var gallery = {
    init:function() {
      this.switchPic();
    },

    switchPic:function() {
      $(".thumbPic").click(function(){
        var src = $(this).attr('src');
        $("#mainDisplay").fadeOut();
        setTimeout(
          function() 
          {
           $("#mainDisplay").attr('src',src);
           $("#mainDisplay").fadeIn();
          }, 400);
      });
    }
  };

var BannerTitle = {
  init:function() {
    this.citySwitch();
  },



  citySwitch:function(){
    var counter = 0;
    setInterval(
          function() 
          {
            var cities = ["Atlanta","Savannah","Athens"];
            $("#city").fadeOut("slow");
            var insert = '<span id="city">'+cities[counter]+'</span>';
            counter++;
            if(counter > 2){counter =0;}
            setTimeout(
              function() 
              {

                $("#city").remove();
                $(insert).appendTo(".bannerTitle");
                $("#city").fadeIn("slow");

              }, 400);

          }, 3000);
  }
};

var projectSlider = {
  init:function() {
    this.NextProject();
  },

  NextProject:function() {
    var numberOfProjects = 5;
    var currentSlide = 1;
      $("#project1").show();
      $("#project2").show();
      $("#project3").show();
      $("#project4").hide();
      $("#project5").hide();
      $("#rightProjects, #leftProjects").click(function(){
        if(currentSlide == 1)
        {
          for(var i = 0; i < 3; i++)
          {
            $("#project"+i).hide();
          }
          for(var x = 3; x < 6; x++)
          {
            $("#project"+x).fadeIn(100);
          }

          currentSlide = 2;
        }
        else
        {
          for(var i = 3; i < 6; i++)
          {
            $("#project"+i).hide();
          }
          for(var x = 0; x < 3; x++)
          {
            $("#project"+x).fadeIn(100);
          }
          currentSlide = 1;
        }
      });
  }
};

var letsMakeItHappen = {
  init:function() {
    this.check();
  },

  check:function() {
    $("#check1").click(function(){
      var clicked = 1;
      if(clicked == 1){
      var insert = '<i id="checkMark" class="fa fa-check"></i>';
      $(insert).appendTo("#check1");
      clicked = 0;
      }else{
        $("#checkMark").remove();
        clicked = 1;
      }

    });
    $("#check2").click(function(){
      var insert = '<i class="fa fa-check"></i>';
      $(insert).appendTo("#check2");
    });
  }

};

 var photoSlider = {
  init:function() {
    this.switcher();
  },

  switcher:function() {
    $("#photo1").show();
    $("#pag1").addClass("pagFill");
    var counter = 1;
    var currentSlide = $("#photo1");

    $("#pag1").click(function(){
      $(currentSlide).fadeOut(200);
      $("#photo1").fadeIn(200);
      $("#pag2").removeClass("pagFill");
      $("#pag3").removeClass("pagFill");
      $("#pag1").addClass("pagFill");

    });
    $("#pag2").click(function(){
      $(currentSlide).fadeOut(200);
      $("#photo2").fadeIn(200);
      $("#pag1").removeClass("pagFill");
      $("#pag3").removeClass("pagFill");
      $("#pag2").addClass("pagFill");

    });
    $("#pag3").click(function(){
      $(currentSlide).fadeOut(200);
      $("#photo3").fadeIn(200);
      $("#pag1").removeClass("pagFill");
      $("#pag2").removeClass("pagFill");
      $("#pag3").addClass("pagFill");

    });
    setInterval(
          function() 
          {
            if(counter == 1){
           $(currentSlide).fadeOut(200);
           $("#photo2").fadeIn(200);
           currentSlide = $("#photo2");
           $("#pag2").addClass("pagFill");
           $("#pag1").removeClass("pagFill");
           counter = 2;
           }
           else if(counter == 2) {
            $(currentSlide).fadeOut(200);
            $("#photo3").fadeIn(200);
            currentSlide = $("#photo3");
            $("#pag3").addClass("pagFill");
            $("#pag2").removeClass("pagFill");
            counter = 3;
           }
           else
           {
            $(currentSlide).fadeOut(200);
            $("#photo1").fadeIn(200);
            $("#pag1").addClass("pagFill");
            $("#pag3").removeClass("pagFill");
            counter = 1;
           }


          }, 5000);
  }
 };

 var confirm = {
  init:function() {
    this.pop();
  },

  pop:function() {
    $("#goToConfirm").click(function(){
      $(".conformation").fadeIn();
    });
  }
 };

  (function() {
    confirm.init();
    BannerTitle.init();
    setBanner.init();
    //stickyHeader.init();
   photoSlider.init();
    letsMakeItHappen.init();
    projectSlider.init();
    showInfo.init();
    tabs.init();
    postComment.init();
    slider.init();
    gallery.init();

  }()); 

}); 