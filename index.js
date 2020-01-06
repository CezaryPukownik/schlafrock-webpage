var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","rgba(0, 0, 0, 0.9)");
        $("#header").css("color","rgb(252, 113, 0)");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","1vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}


function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player1;
  var player2;
  var player3;
  var player4;
  function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('rydwan', {
      height: '225',
      width: '400',
      videoId: 'HYl1SAAZMoM'
    })

    player2 = new YT.Player('making', {
    height: '225',
    width: '400',
    videoId: 'i-eyFb6sL7Y'
    })

    player3 = new YT.Player('plan_live', {
    height: '225',
    width: '400',
    videoId: 'ZOLxdYoAz6Q'
    })

    player4 = new YT.Player('lucky_luke', {
    height: '225',
    width: '400',
    videoId: 'w__LaBRcsBQ'
    })

    player5 = new YT.Player('studio', {
    height: '225',
    width: '400',
    videoId: 'vW-W8x7oEpE'
    })

    player6 = new YT.Player('zagadka', {
    height: '225',
    width: '400',
    videoId: 'H5So9MXVOS4'
    })
    player7 = new YT.Player('lucky_live_2', {
    height: '225',
    width: '400',
    videoId: 'DSpxJycRL7k'
    })

    player8 = new YT.Player('zagadka_live', {
    height: '225',
    width: '400',
    videoId: 'cd8SA7_EYRU'
    })
}