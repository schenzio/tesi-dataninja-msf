import $ from 'jquery';
import './style.css';

var logoIndex: HTMLCollection = document.getElementsByClassName('chap');
var index: Array<string> = ['Curarsi senza documenti', 'Covid a ostacoli', 'Salute universale ma...', 'E adesso?'];
var onHome:boolean = true;


function focus(id: string) {
  $('#'+id).css({fill: '#eb836a'});
  $('#chap'+id).css({backgroundColor: '#eb836a', fontWeight: 'bold'})
  if(onHome){
    $('#chap'+id).animate({marginTop: '-4%'}, 200);
  } else {
    $('#chap'+id).animate({paddingTop: '4%', marginBottom: '-4%'}, 200);
  }

}
function defocus(id: string){
    if(id =="1"){
      $('#'+id).css({fill: 'transparent'});
    } else {
      $('#'+id).css({fill: '#d7232a'});
    }
    $('#chap'+id).css({backgroundColor: '#d7232a',  fontWeight: 'normal'});
    $('#chap'+id).animate({paddingTop: '1.8%', margin: '0%'}, 200);
  
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
$('#up, .E-Rviz').hide();
$('circle').css({'fill': 'transparent'});
$(".L").attr('checked', 'true');
//show and hide notes
$('.close').click(function(){$(this).parent().parent().fadeOut()});
$('.note').click(function(){$(this).parent().next('.modal').fadeIn()});

//slide viz
$("input[type=radio]").change(function(){
  if ($(this).attr('checked', 'true')){
    $(this).siblings().css({"font-weight": "normal"});
    $(this).next().css({"font-weight": "bolder"});
    let viz = $(this).parent().next();
    switch(this.className){
      case "L": {
        viz.find('.E-Rviz').fadeOut(300);
        viz.find('.Lviz').fadeIn(300);
      }
      break;
      case "E-R": {
        viz.find('.Lviz').fadeOut(300);
        viz.find('.E-Rviz').fadeIn(300);
      } 
      break;
    }
  }
})

$(document).ready(function(){
  //$('.chap').css({opacity: 0});
  //$('#0').css({'animation': 'load 1s'});
  //$('#chap0').animate({opacity: 1}, 4000);
  focus('0');
  setTimeout(() => {defocus('0'), focus('1')}, 3000);
  setTimeout(() => {defocus('1'), focus('2')}, 6000);
  setTimeout(() => {defocus('2'), focus('3')}, 9000);
  setTimeout(() => {defocus('3')}, 12000);
  //$('#guide').animate({left: '10%'});
  });

$(document).on("scroll", function() {
  var homeH: number = ($("#home").height())+($("nav").height());
  var s0: number = homeH +($("#section0").height());
  var s1: number = s0 +($("#section1").height());
  var s2: number = s1 +($("#section2").height());
 // var s3: number = s2 + ($("#section3").height());
  let pxScrolled = $(document).scrollTop();

  if(pxScrolled > homeH){
    onHome = false;
    $('#up').show();
    $('#s0').css({fill: '#d8efef'});
   
    if(pxScrolled <= s0){
      $(".logoBack").css({fill: '#d7232a'});
      $('#s1').css({fill: 'transparent'});
      $('#s0').css({fill: '#eb836a'});
    }
    else if (pxScrolled>s0 && pxScrolled<= s1) {
      $(".logoBack").css({fill: '#d7232a'});
      $('#s1').css({fill: '#eb836a'});
    }
    else if (pxScrolled>s1 && pxScrolled<= s2) {
      $(".logoBack").css({fill: '#d7232a'});
      $('#s1').css({fill: 'transparent'});
      $('#s2').css({fill: '#eb836a'});
    } 
    else if (pxScrolled>s2) {
      $(".logoBack").css({fill: '#d7232a'});
      $('#s1').css({fill: 'transparent'});
      $('#s3').css({fill: '#eb836a'});
    }   
  } else {
    onHome=true;
    $('#up').hide();
    $(".logoBack").css({fill: '#d7232a'});
    $('#s1').css({fill: 'transparent'});
  }; 
})
