function setupgallery() {

const body=document.querySelector("body");
const images=document.querySelectorAll(".gg-box img");
const l=images.length;for(var i=0;i<l;i++){images[i]
    .addEventListener("click",function(g){const b=document.querySelector("#gg-screen");
    var n=this.src;var d=this;const j=images[0].src;const o=images[l-1].src;
    b.hidden=false;body.style.overflow="hidden";
    b.innerHTML='<div class="gg-image"></div><div class="gg-close gg-bt">&times</div><div class="gg-next gg-bt">&rarr;</div><div class="gg-prev gg-bt">&larr;</div>';
    const m=document.querySelector(".gg-image");
    const e=document.querySelector(".gg-prev");
    const a=document.querySelector(".gg-next");
    const p=document.querySelector(".gg-close");
    if(l>1){if(n==j){e.hidden=true;var k=false;var f=d.nextElementSibling}
    else{if(n==o){a.hidden=true;var f=false;var k=d.previousElementSibling}
    else{var k=d.previousElementSibling;var f=d.nextElementSibling}}}
    else{e.hidden=true;a.hidden=true}m.innerHTML='<img src="'+n+'">';
    b.addEventListener("click",function(q){if(q.target==this||q.target==p){b.hidden=true;body.style.overflow="auto"}});
    e.addEventListener("click",function(){c()});
    a.addEventListener("click",function(){h()});
    body.addEventListener("keydown",function(q){if(q.keyCode==37||q.keyCode==38){c()}});
    body.addEventListener("keydown",function(q){if(q.keyCode==39||q.keyCode==40){h()}});
    function c(){k=d.previousElementSibling;m.innerHTML='<img src="'+k.src+'">';
    d=d.previousElementSibling;var q=document.querySelector(".gg-image > img").src;
    if(q==j){e.hidden=true}
    else{e.hidden=false;a.hidden=false}}function h(){f=d.nextElementSibling;
        m.innerHTML='<img src="'+f.src+'">';d=d.nextElementSibling;
        var q=document.querySelector(".gg-image > img").src;
        if(q==o){a.hidden=true}else{a.hidden=false;e.hidden=false}}})};
}