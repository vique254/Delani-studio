// function myFunction() {
//   var send= (document.getElementById("send").innerHTML = "SEND");
//   var name= (document.getElementById("name").value);
    
//   }

  
$(document).ready(function(){
    $(".click1").click(function(){
        $("#par1").toggle();
        $(".hidden1").toggle();
    });
    $(".click2").click(function(){
        $("#par2").toggle();
        $(".hidden2").toggle();
    });
    $(".click3").click(function(){
        $("#par3").toggle();
        $(".hidden3").toggle();
    });
    $("button").click(function(){
        var name=$("#name").val();
        alert(name + " " + 'we have received your message. Thank you for reaching out to us.');
    });
    
    $(".vique1").hover(function(){
        $(".imge1").css({"opacity":"0.2","transition":"3s"});
        $("#v1").show();
    },
    function(){
        $(".imge1").css("opacity","1");
        $("#v1").hide();
    });
    $(".vique2").hover(function(){
        $(".imge2").css({"opacity":"0.2","transition":"3s"});
        $("#v2").show();
    },
    function(){
        $(".imge2").css("opacity","1")
        $("#v2").hide();
    });
    $(".vique3").hover(function(){
        $(".imge3").css({"opacity":"0.2","transition":"3s"});
        $("#v3").show();
    },
    function(){
        $(".imge3").css("opacity","1")
        $("#v3").hide();
    });
    $(".vique4").hover(function(){
        $(".imge4").css({"opacity":"0.2","transition":"3s"});
        $("#v4   ").show();
    },
    function(){
        $(".imge4").css("opacity","1")
        $("#v4").hide();
    });
    $(".vique5").hover(function(){
        $(".imge5").css({"opacity":"0.2","transition":"3s"});
        $("#v5").show();
    },
    function(){
        $(".imge5").css("opacity","1")
        $("#v5").hide();
    });
    $(".vique6").hover(function(){
        $(".imge6").css({"opacity":"0.2","transition":"3s"});
        $("#v6").show();
    },
    function(){
        $(".imge6").css("opacity","1")
        $("#v6").hide();
    });
    $(".vique7").hover(function(){
        $(".imge7").css({"opacity":"0.2","transition":"3s"});
        $("#v7").show();
    },
    function(){
        $(".imge7").css("opacity","1")
        $("#v7").hide();
    });
    $(".vique8").hover(function(){
        $(".imge8").css({"opacity":"0.2","transition":"3s"});
        $("#v8").show();
    },
    function(){
        $(".imge8").css("opacity","1")
        $("#v8").hide();
        
    });
});
