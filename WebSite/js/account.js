'use strict';
$(document).ready(function(){
    var tabContent, tabLinks;
    tabContent = $('.tabContent').css("display", "none");
    tabLinks = $(".buttonNav.accountButtonNav");
    $("#tabCurr").addClass("activeNavButton");
    $("#myCurrBox").css("display", "block");
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
        $(this).addClass("activeNavButton");
    });
});