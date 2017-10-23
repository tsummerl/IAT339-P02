'use strict';
$(document).ready(function(){
    var flexPlan = $(".flexPlan");
    flexPlan.click(function(){
        $(".flexPlan").removeClass("flexPlanActive");
        $(this).addClass("flexPlanActive");
    });
});