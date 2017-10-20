'use strict';
$(document).ready(function(){
    var tabContent, tabLinks;
    tabContent = $('.tabContent').css("display", "none");
    tabLinks = $(".buttonNav.accountButtonNav");
    console.log("onReady");
    tabLinks.click(function(){
        var id = $(this).attr("id");
        console.log(id);
        $('.tabContent').css("display", "none");
        switch(id){
            case "tabCurr":
            $("#myCurrBox").css("display", "block");
            break;
            case "tabPast":
            $("#myPastBox").css("display", "block");
            break;
            case "tabSub":
            $("#mySub").css("display", "block");
            break;
            case "tabQuiz":
            $("#myQuiz").css("display", "block");
            break;
        }
        tabLinks.removeClass("activeNavButton");
        tabLinks.parent().removeClass("activeNavButton");
        $(this).addClass("activeNavButton");
        $(this).parent().addClass("activeNavButton");
    });


});