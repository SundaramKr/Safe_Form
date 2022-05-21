$(document).ready(function(){
 setTimeout(function(){
  $('#popUpMain').css('display','block'); }, 1000);
});

$('.submitId').click(function(){
 $('#popUpMain').css('display','none');
 document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
 })
});

function input2 () {
    $('#popUpMain').css('display','block');
}

const name = sessionStorage.getItem('NAME');
let counterValue = 0;

document.addEventListener('fullscreenchange', function() {
	var full_screen_element = document.fullscreenElement;

	if(full_screen_element !== null)
		console.log('Page has entered fullscreen mode');
	else{
        /*counterValue++;
        if(counterValue>3)
        {
            counterValue=3;
            window.open("warning.html","_self");
        }
        alert("Dear "+name+",\nYou have exited Full-Screen "+counterValue+(counterValue===1?" time.":" times.")+"\nIf you move off the page "+(4-counterValue)+" more "+(counterValue===3?"time":"times")+", your session will be terminated.");*/
            setTimeout(function(){
             $('#popUpMain').css('display','block'); }, 0000);
           $('.submitId').click(function(){
            $('#popUpMain').css('display','none');
            document.documentElement.requestFullscreen().catch((e) => {
               console.log(e);
            })
           });
    }
});

const flag = sessionStorage.getItem('FLAG');
    if(flag==1)
    {
    window.open("warning.html","_self");
}
window.addEventListener('load', () => {

    function stopCounter(){
    counterValue++;
    if(counterValue>3)
    {
        counterValue=3;
        window.open("warning.html","_self");
    }
    alert("Dear "+name+",\nYou have moved off the page "+counterValue+(counterValue===1?" time.":" times.")+"\nIf you move off the page "+(4-counterValue)+" more "+(counterValue===3?"time":"times")+", your session will be terminated.");
}

document.addEventListener('visibilitychange', () => {
    if(document.hidden){
        stopCounter();
        return;
    }
})

})

let timeSecond = 900;
const timeH = document.querySelector("jk");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  window.open("warning.html","_self");
}