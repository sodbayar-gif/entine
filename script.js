let cnt = 0;


function no(){
cnt++;
if(cnt < 5){
title.innerText = `Are you sure? (${cnt}/5)`;
text.innerText = "Think again 😌";
} else {
yes();
}
}


function yes(){
card.innerHTML = `
<h1>YAY 💖</h1>
<p>You are officially my Valentine 🌹<br>See you soon 😘</p>
`;
hearts();
}


function hearts(){
for(let i=0;i<25;i++){
let h=document.createElement('div');
h.innerText='❤️';
h.style.position='fixed';
h.style.left=Math.random()*100+'vw';
h.style.bottom='-20px';
h.style.fontSize='24px';
h.style.animation='float '+(2+Math.random()*3)+'s linear';
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
}
}


const s=document.createElement('style');
s.innerHTML='@keyframes float{from{transform:translateY(0);opacity:1}to{transform:translateY(-120vh);opacity:0}}';
document.head.appendChild(s);