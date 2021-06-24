import $ from 'jquery';
import './style.css';

var logoIndex: HTMLCollection = document.getElementsByClassName('chap');
var index: Array<string> = ['Curarsi senza documenti', 'Burocrazia portami via', 'Salute universale ma...', 'E adesso?'];
var homeH: number = ($("#home").height());
var s0: number = homeH +($("#section0").height()+($("nav").height()));
var s1: number = s0 +($("#section1").height());
var s2: number = s1 +($("#section2").height());
var s3: number = s2 + ($("#section3").height());

function focus(id: string) {
  $('#'+id).css({fill: '#eb836a'});
  $('#chap'+id).css({/*color: '#eb836a',*/ fontWeight: 'bold'});
}
function defocus(id: string){
    if(id == '0'){
      $('#'+id).css({fill: '#d8efef'});
    } else {
      $('#'+id).css({fill: '#d7232a'});
    }
    $('#chap'+id).css({/*color: 'white',*/ fontWeight: 'normal'});
}
$('#up').hide();
$('circle').css({fill: '#d8efef'});
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
$(document).on("scroll", function() {
let pxScrolled = $(document).scrollTop();
if(pxScrolled > homeH){
  $('#up').show();
  $('#s0').css({fill: '#d8efef'});
  if(pxScrolled < s0){
    $(".logoBack").css({fill: '#d7232a'});
    $('#s0').css({fill: '#eb836a'});
  }
  else if (pxScrolled< s1) {
  $(".logoBack").css({fill: '#d7232a'});
  $('#s1').css({fill: '#eb836a'});
  
  }
  else if (pxScrolled< s2) {
    $(".logoBack").css({fill: '#d7232a'});
    $('#s2').css({fill: '#eb836a'});
    } 
  //else if (pxScrolled< s3) {
  else{
    $(".logoBack").css({fill: '#d7232a'});
    $('#s3').css({fill: '#eb836a'});
  }   
} else {
  $('#up').hide();
  $(".logoBack").css({fill: '#d7232a'});
}; 
})
