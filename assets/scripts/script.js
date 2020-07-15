"use strict"

let header = document.getElementById('header');


header.onclick = function(event) {
    let target = event.target;
    
    if(!(target.tagName == "A")) return;
    
    event.preventDefault();
    
    let id = target.getAttribute('data-nav');
    
    
    let elem = document.getElementById(id);
    
    elem.scrollIntoView(top == true);
}

let poster = document.getElementById('poster'),
    heightFix = header.offsetHeight + poster.offsetHeight;


/*alert(header.offsetHeight);
alert(poster.offsetHeight);*/

window.onscroll = function(event) {
    let pageY = pageYOffset;
    
    if(pageY >= heightFix) {
       header.classList.add('fixed');
    }else {
        header.classList.remove('fixed');
    }
}

let logo = document.getElementById('titilehed');

logo.onclick = function() {
    window.scrollTo(0,0);
}


