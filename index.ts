import $ from 'jquery';
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
var logoIndex: HTMLCollection = document.getElementsByClassName('chap');
var index: Array<string> = ['intro', 'sezione1', 'sezione2', 'sezione3'];

function focus(id: string) {
  $('#'+id).css({fill: '#eb836a'});
  $('#chap'+id).css({color: '#eb836a', fontWeight: 'bold'});
}
function defocus(id: string){
    if(id == '3'){
      $('#'+id).css({fill: 'white'});
    } else {
      $('#'+id).css({fill: '#d7232a'});
    }
    $('#chap'+id).css({color: 'black', fontWeight: 'normal'});
}
$('#3').css({fill: 'white'});
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
let homeH = ($("#home").height());
if($(document).scrollTop() > homeH){
  $('#up').show();
  $('nav').css({ position:'fixed', top: 0});
} else {
  $('#up').hide();
  $('nav').css({ position:'static'});
}; 
})