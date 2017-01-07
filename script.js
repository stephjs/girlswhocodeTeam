$(document).ready(function(){
	var panes = 1;
   $("#pane3, #pane2").addClass("slide");
    $("img.person").on("click", function(){
         //sliding the panes to the right
         $(".slide").css({
            "-webkit-transform": "translateX(100%)",
            "-moz-transform": "translateX(100%)",
            "-ms-transform": "translateX(100%)",
            "transform": "translateX(100%)",
            "-webkit-transition": "all 1s ease",
            "-moz-transition": "all 1s ease",
            "-o-transition": "all 1s ease",
            "-ms-transition": "all 1s ease",
            "transition": "all .5s ease"
         });
         $(".slide1").css({
            "-webkit-transform": "translateX(200%)",
            "-moz-transform": "translateX(200%)",
            "-ms-transform": "translateX(200%)",
            "transform": "translateX(200%)",
            "-webkit-transition": "all 1s ease",
            "-moz-transition": "all 1s ease",
            "-o-transition": "all 1s ease",
            "-ms-transition": "all 1s ease",
            "transition": "all .5s ease"
         });

   		//remove right pane, drop picture to bottom of page
         $("#otherPeople").append($("#pane"+panes+" .teamBio"));
   		$("#pane"+panes).remove();

   		
   		//slide left and middle panes over to the right
   		var leftpane = panes + 2;
         $("#pane"+leftpane).addClass("slide1");
   		var middlepane = panes + 1;

   		//pic and info from click
         var newDiv = $('<div class="teamBio"></div>');
   		var currImg = $(this);
         var nameText = $(this).siblings($(".nameText"));
         var aboutText = $(this).siblings($(".aboutText"));
         var parentDiv = $(this).parent($(".teamBio"));   
         newDiv.append(aboutText);
         newDiv.prepend(nameText);
         newDiv.prepend(currImg);
         parentDiv.remove();

         //handling the new pane
         var newcount = panes + 3;
         var newid = "pane"+newcount;
   		var newpane = $('<div class="pane slide"></div>');
   		newpane.attr('id', newid);
         
         //pane color style
         if (parseInt(newcount) % 3 ==0) {
            newpane.addClass("green");
         }else if (parseInt(newcount) % 2 ==0){
            newpane.addClass("purple");
         }else {
            newpane.addClass("blue");
         }
   		$("#highlight").prepend(newpane);
   		$("#"+newid).html(newDiv);
   		panes++;
    });
});