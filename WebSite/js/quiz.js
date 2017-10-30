'use strict';
$(document).ready(function(){
    var quizAnswer = $(".quizAnswer");
    quizAnswer.click(function(){
        if($(this).children(".quizAnswerInfo").hasClass("quizAnswerInfoSelected"))
        {
            $(this).children(".quizAnswerInfo").removeClass("quizAnswerInfoSelected");
        }
        else{
            $(this).children(".quizAnswerInfo").addClass("quizAnswerInfoSelected");
        }
    });
});