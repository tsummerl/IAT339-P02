$(document).ready(function(){
    var tabContent, tabLinks;
    tabContent = $('.tabContent').css("display", "none");
    tabLinks = $(".buttonNav.accountButtonNav");
    console.log("onReady");
    tabLinks.click(function(){
        var id = $(this).attr("id");
        console.log(id);
        switch(id){
            case "tabCurr":
            $('.tabContent').css("display", "none");
            $("#myCurrBox").css("display", "block");
            break;
            case "tabPast":
            $('.tabContent').css("display", "none");
            $("#myPastBox").css("display", "block");
            break;
            case "tabSub":
            $('.tabContent').css("display", "none");
            $("#mySub").css("display", "block");
            break;
            case "tabQuiz":
            $('.tabContent').css("display", "none");
            $("#myQuiz").css("display", "block");
            break;
        }
    })
});