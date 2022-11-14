let ac = document.getElementById("ac")
let bpm = document.getElementById("b+-")
let bmod = document.getElementById("b%")
let bdiv = document.getElementById("b:")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")
let bx = document.getElementById("bx")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let bm = document.getElementById("b-")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let bp = document.getElementById("b+")
let eq = document.getElementById("eq")
let b0 = document.getElementById("b0")
let bd = document.getElementById("bd")

let dotted=0;

let text = document.getElementById("txt")
let LastNum=0;
let savedNum=1; // basically second num
let Res=0;
let lastFunc='';
let i=1;
function updateText(){
    text.textContent = LastNum;
}



function updateRes(){
    dotted=0;
    i=1;
    if(lastFunc===':'){
        Res=savedNum/LastNum;
    }
    if(lastFunc==='x'){
        Res=LastNum*savedNum;
    }
    if(lastFunc==='-'){
        Res=savedNum-LastNum;
    }
    if(lastFunc==='+'){
        Res=LastNum+savedNum;
    }
    if(lastFunc==='%'){
        Res=savedNum%LastNum;
    }
    Res=Math.round(Res*100)/100;
    
}

ac.addEventListener('click',()=>{
    LastNum=0;
 savedNum=1;
 Res=0;
 i=1;dotted=0;
 updateText();
})

bpm.addEventListener('click',()=>{
    LastNum=LastNum*(-1)
    text.textContent = LastNum;

})

bmod.addEventListener('click',()=>{
    lastFunc='%';
    i=1;
    savedNum=LastNum;
    LastNum=0;
    text.textContent = 0;
    dotted=0;
})

bdiv.addEventListener('click',()=>{
    lastFunc=':';
    i=1;
    savedNum=LastNum;
    LastNum=0;
    text.textContent = 0;
    dotted=0;
})

bp.addEventListener('click',()=>{
    lastFunc='+';
    i=1;
    savedNum=LastNum;
    LastNum=0;
    text.textContent = 0;
    dotted=0;
})

bx.addEventListener('click',()=>{
    lastFunc='x';
    i=1;
    savedNum=LastNum;
    LastNum=0;
    text.textContent = 0;
    dotted=0;
})

bm.addEventListener('click',()=>{
    lastFunc='-';
    i=1;
        savedNum=LastNum;
        LastNum=0;
    text.textContent = 0;
    dotted=0;
})

eq.addEventListener('click',()=>{
    updateRes();
    text.textContent = Res;
    LastNum=Res;
    i=1;
    dotted=0;
})

function setNum(num){
    if(LastNum>99999999) return;
    LastNum=LastNum*i+num;
    if(i==1)
    i=i*10;
}

b1.addEventListener('click',()=>{
    setNum(1);
 updateText();
})

b2.addEventListener('click',()=>{
    setNum(2);
 updateText();
})

b3.addEventListener('click',()=>{
    setNum(3);
 updateText();
})

b4.addEventListener('click',()=>{
    setNum(4);
 updateText();
})

b5.addEventListener('click',()=>{
    setNum(5);
 updateText();
})

b6.addEventListener('click',()=>{
    setNum(6);
 updateText();
})

b7.addEventListener('click',()=>{
    setNum(7);
 updateText();
})

b8.addEventListener('click',()=>{
    setNum(8);
 updateText();
})

b9.addEventListener('click',()=>{
    setNum(9);
 updateText();
})

b0.addEventListener('click',()=>{
    setNum(0);
 updateText();
})

// bd.addEventListener('click',()=>{
//     if(dotted)return;
//     LastNum=LastNum+'.';
//     text.textContent = LastNum;
//     dotted=1;
    
// })