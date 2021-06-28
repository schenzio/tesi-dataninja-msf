import $ from 'jquery';
import './style.css';

var logoIndex: HTMLCollection = document.getElementsByClassName('chap');
var index: Array<string> = ['Curarsi senza documenti', 'Burocrazia portami via', 'Salute universale ma...', 'E adesso?'];


function focus(id: string) {
  $('#'+id).css({fill: '#eb836a'});
  $('#chap'+id).css({backgroundColor: '#eb836a', fontWeight: 'bold'})
}
function defocus(id: string){
    /*if(id == '0'){
      $('#'+id).css({fill: '#d8efef'});
    } else {
      $('#'+id).css({fill: '#d7232a'});
    }*/
    $('#'+id).css({fill: '#d7232a'});
    $('#chap'+id).css({backgroundColor: '#d7232a',  fontWeight: 'normal'});
}

for (let i = 0; i < logoIndex.length; i++) {
  let logoPart = logoIndex[i];
  var navChap = $("<a class='navPoint' href='#section"+i+"' id='chap"+i+"'>"+index[i]+"</a>");
  navChap.mouseover(()=>focus(String(i)));
  navChap.mouseout(()=>defocus(String(i)));
  $('nav').append(navChap);
  logoPart.addEventListener(
    'mouseover',
    () => focus(logoPart.id),
  );
  logoPart.addEventListener(
    'mouseout',
    () => defocus(logoPart.id),
  );
}
function show(id: string){
  //pezzi logo uno per volta
  $('#'+id+', #chap'+id).fadeIn(3000);
  //pezzi logo già presenti si illuminano
  $('#chap'+id).css({'animation': 'load 3s'});
  //$('#chap'+id).fadeIn(3000);
}
//$('#up, .navPoint, .chap').hide();
$('#up, .navPoint').hide();
$('circle').css({fill: '#d8efef'});
//$('.note').click(function(){$('#note1').css({display: 'block'})});
$('.close').click(function(){$('#note1').fadeOut()});
$('.note').click(function(){$('#note1').fadeIn()});


$(document).ready(function(){
  //$('.chap').css({opacity: 0});
  //$('#0').css({'animation': 'load 1s'});
  //$('#chap0').animate({opacity: 1}, 4000);
  show('0');
  setTimeout(() => show('1'), 3000);
  setTimeout(() => show('2'), 6000);
  setTimeout(() => show('3'), 9000);
  //$('#guide').animate({left: '10%'});
  });



$(document).on("scroll", function() {
  var homeH: number = ($("#home").height())+($("nav").height());
  var s0: number = homeH +($("#section0").height());
  var s1: number = s0 +($("#section1").height());
  var s2: number = s1 +($("#section2").height());
  var s3: number = s2 + ($("#section3").height());
  let pxScrolled = $(document).scrollTop();

  if(pxScrolled > homeH){
    $('#up').show();
    $('#s0').css({fill: '#d8efef'});
    if(pxScrolled <= s0){
      $(".logoBack").css({fill: '#d7232a'});
      $('#s0').css({fill: '#eb836a'});
     
    }
    else if (pxScrolled>s0 && pxScrolled<= s1) {
      $(".logoBack").css({fill: '#d7232a'});
      $('#s1').css({fill: '#eb836a'});
    }
    else if (pxScrolled>s1 && pxScrolled<= s2) {
      $(".logoBack").css({fill: '#d7232a'});
      $('#s2').css({fill: '#eb836a'});
    } 
    else if (pxScrolled>s2 && pxScrolled<= s3) {
      $(".logoBack").css({fill: '#d7232a'});
      $('#s3').css({fill: '#eb836a'});
    }   
  } else {
    $('#up').hide();
    $(".logoBack").css({fill: '#d7232a'});
  }; 
})/*
$('.popup-container').mouseover(function(){
  $(this).find('.popup').fadeIn();
})
$('.popup-container').mouseover(function(){
  $(this).find('.popup').fadeOut();
})*/
$('.popup-container').click(function(){
  //$(this).find('.popup').fadeToggle('slow');
  $(this).find('.popup').toggle('slow');
})
