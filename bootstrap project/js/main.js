$(function(){
    'use strict';
     var winh=$(window).height(),
     upperh=$(".upperbar").innerHeight(),
     navh=$(".navbar").innerHeight();
     $(".slider ,.carousel-item").height( winh-(upperh+navh));



} );