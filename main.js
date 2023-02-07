let letter = document.getElementById("letter");
let number = document.getElementById("number");
var colors = "green";
var white = "aqua";
var black = "black";
var score = document.getElementById("score");
var scoress = 0;
score.innerHTML = scoress;
var cheatDetector= 0;
var timer = 200;

let btn = document.getElementById("btn");

let ahmad =document.getElementById("coordinations");




let a8 = document.getElementById("a8");
let a7 = document.getElementById("a7");
let a6 = document.getElementById("a6");
let a5 = document.getElementById("a5");
let a4 = document.getElementById("a4");
let a3 = document.getElementById("a3");
let a2 = document.getElementById("a2");
let a1 = document.getElementById("a1");

let b8 = document.getElementById("b8");
let b7 = document.getElementById("b7");
let b6 = document.getElementById("b6");
let b5 = document.getElementById("b5");
let b4 = document.getElementById("b4");
let b3 = document.getElementById("b3");
let b2 = document.getElementById("b2");
let b1 = document.getElementById("b1");

let c8 = document.getElementById("c8");
let c7 = document.getElementById("c7");
let c6 = document.getElementById("c6");
let c5 = document.getElementById("c5");
let c4 = document.getElementById("c4");
let c3 = document.getElementById("c3");
let c2 = document.getElementById("c2");
let c1 = document.getElementById("c1");

let d8 = document.getElementById("d8");
let d7 = document.getElementById("d7");
let d6 = document.getElementById("d6");
let d5 = document.getElementById("d5");
let d4 = document.getElementById("d4");
let d3 = document.getElementById("d3");
let d2 = document.getElementById("d2");
let d1 = document.getElementById("d1");

let e8 = document.getElementById("e8");
let e7 = document.getElementById("e7");
let e6 = document.getElementById("e6");
let e5 = document.getElementById("e5");
let e4 = document.getElementById("e4");
let e3 = document.getElementById("e3");
let e2 = document.getElementById("e2");
let e1 = document.getElementById("e1");

let f8 = document.getElementById("f8");
let f7 = document.getElementById("f7");
let f6 = document.getElementById("f6");
let f5 = document.getElementById("f5");
let f4 = document.getElementById("f4");
let f3 = document.getElementById("f3");
let f2 = document.getElementById("f2");
let f1 = document.getElementById("f1");

let g8 = document.getElementById("g8");
let g7 = document.getElementById("g7");
let g6 = document.getElementById("g6");
let g5 = document.getElementById("g5");
let g4 = document.getElementById("g4");
let g3 = document.getElementById("g3");
let g2 = document.getElementById("g2");
let g1 = document.getElementById("g1");

let h8 = document.getElementById("h8");
let h7 = document.getElementById("h7");
let h6 = document.getElementById("h6");
let h5 = document.getElementById("h5");
let h4 = document.getElementById("h4");
let h3 = document.getElementById("h3");
let h2 = document.getElementById("h2");
let h1 = document.getElementById("h1");

var output ="A1";
var indicator="";
var result = '';
var result2 = '';
var characters = 'ABCDEFGH';
var charactersLength = characters.length;



btn.addEventListener("click",function fun(){
    result = characters.charAt(Math.floor(Math.random() *
    charactersLength));
 result2= Math.floor(Math.random() * 8) + 1;
letter.innerText = result;
number.innerHTML = result2;
   output= result+result2;
   cheatDetector = 0;
   
})

document.addEventListener("keydown", function(event) {
   if (event.key === "space" || event.key === "f" ) {
     btn.click();
   }
 });


a8.addEventListener("click",function fun1(){
  indicator = "A8";
  if(output == indicator){
   a8.style.backgroundColor="green";
   cheatDetector++;
   if(cheatDetector == 1){
   scoress++;
   score.innerHTML = scoress;
   }
}
else{
   a8.style.backgroundColor="red";
}
function fun2(){
   a8.style.backgroundColor=white;
}
setTimeout(fun2,timer);
})

a7.addEventListener("click",function fun1(){
   indicator = "A7";
   if(output == indicator){
    a7.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    a7.style.backgroundColor="red";
 }
 function fun2(){
    a7.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 a6.addEventListener("click",function fun1(){
   indicator = "A6";
   if(output == indicator){
    a6.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    a6.style.backgroundColor="red";
 }
 function fun2(){
    a6.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 a5.addEventListener("click",function fun1(){
   indicator = "A5";
   if(output == indicator){
    a5.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    a5.style.backgroundColor="red";
 }
 function fun2(){
    a5.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 a4.addEventListener("click",function fun1(){
   indicator = "A4";
   if(output == indicator){
    a4.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    a4.style.backgroundColor="red";
 }
 function fun2(){
    a4.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 a3.addEventListener("click",function fun1(){
   indicator = "A3";
   if(output == indicator){
    a3.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    a3.style.backgroundColor="red";
 }
 function fun2(){
    a3.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 a2.addEventListener("click",function fun1(){
   indicator = "A2";
   if(output == indicator){
    a2.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    a2.style.backgroundColor="red";
 }
 function fun2(){
    a2.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 a1.addEventListener("click",function fun1(){
   indicator = "A1";
   if(output == indicator){
    a1.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    a1.style.backgroundColor="red";
 }
 function fun2(){
    a1.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 b8.addEventListener("click",function fun1(){
   indicator = "B8";
   if(output == indicator){
    b8.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b8.style.backgroundColor="red";
 }
 function fun2(){
    b8.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 b7.addEventListener("click",function fun1(){
   indicator = "B7";
   if(output == indicator){
    b7.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b7.style.backgroundColor="red";
 }
 function fun2(){
    b7.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 b6.addEventListener("click",function fun1(){
   indicator = "B6";
   if(output == indicator){
    b6.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b6.style.backgroundColor="red";
 }
 function fun2(){
    b6.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 b5.addEventListener("click",function fun1(){
   indicator = "B5";
   if(output == indicator){
    b5.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b5.style.backgroundColor="red";
 }
 function fun2(){
    b5.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 b4.addEventListener("click",function fun1(){
   indicator = "B4";
   if(output == indicator){
    b4.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b4.style.backgroundColor="red";
 }
 function fun2(){
    b4.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 b3.addEventListener("click",function fun1(){
   indicator = "B3";
   if(output == indicator){
    b3.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b3.style.backgroundColor="red";
 }
 function fun2(){
    b3.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 b2.addEventListener("click",function fun1(){
   indicator = "B2";
   if(output == indicator){
    b2.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b2.style.backgroundColor="red";
 }
 function fun2(){
    b2.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 b1.addEventListener("click",function fun1(){
   indicator = "B1";
   if(output == indicator){
    b1.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    b1.style.backgroundColor="red";
 }
 function fun2(){
    b1.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 c8.addEventListener("click",function fun1(){
   indicator = "C8";
   if(output == indicator){
    c8.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c8.style.backgroundColor="red";
 }
 function fun2(){
    c8.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 c7.addEventListener("click",function fun1(){
   indicator = "C7";
   if(output == indicator){
    c7.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c7.style.backgroundColor="red";
 }
 function fun2(){
    c7.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 c6.addEventListener("click",function fun1(){
   indicator = "C6";
   if(output == indicator){
    c6.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c6.style.backgroundColor="red";
 }
 function fun2(){
    c6.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 c5.addEventListener("click",function fun1(){
   indicator = "C5";
   if(output == indicator){
    c5.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c5.style.backgroundColor="red";
 }
 function fun2(){
    c5.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 c4.addEventListener("click",function fun1(){
   indicator = "C4";
   if(output == indicator){
    c4.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c4.style.backgroundColor="red";
 }
 function fun2(){
    c4.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 c3.addEventListener("click",function fun1(){
   indicator = "C3";
   if(output == indicator){
    c3.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c3.style.backgroundColor="red";
 }
 function fun2(){
    c3.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 c2.addEventListener("click",function fun1(){
   indicator = "C2";
   if(output == indicator){
    c2.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c2.style.backgroundColor="red";
 }
 function fun2(){
    c2.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 c1.addEventListener("click",function fun1(){
   indicator = "C1";
   if(output == indicator){
    c1.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    c1.style.backgroundColor="red";
 }
 function fun2(){
    c1.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 d8.addEventListener("click",function fun1(){
   indicator = "D8";
   if(output == indicator){
    d8.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d8.style.backgroundColor="red";
 }
 function fun2(){
    d8.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 d7.addEventListener("click",function fun1(){
   indicator = "D7";
   if(output == indicator){
    d7.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d7.style.backgroundColor="red";
 }
 function fun2(){
    d7.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 d6.addEventListener("click",function fun1(){
   indicator = "D6";
   if(output == indicator){
    d6.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d6.style.backgroundColor="red";
 }
 function fun2(){
    d6.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 d5.addEventListener("click",function fun1(){
   indicator = "D5";
   if(output == indicator){
    d5.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d5.style.backgroundColor="red";
 }
 function fun2(){
    d5.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 d4.addEventListener("click",function fun1(){
   indicator = "D4";
   if(output == indicator){
    d4.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d4.style.backgroundColor="red";
 }
 function fun2(){
    d4.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 d3.addEventListener("click",function fun1(){
   indicator = "D3";
   if(output == indicator){
    d3.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d3.style.backgroundColor="red";
 }
 function fun2(){
    d3.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 d2.addEventListener("click",function fun1(){
   indicator = "D2";
   if(output == indicator){
    d2.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d2.style.backgroundColor="red";
 }
 function fun2(){
    d2.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 d1.addEventListener("click",function fun1(){
   indicator = "D1";
   if(output == indicator){
    d1.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    d1.style.backgroundColor="red";
 }
 function fun2(){
    d1.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 e8.addEventListener("click",function fun1(){
   indicator = "E8";
   if(output == indicator){
    e8.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e8.style.backgroundColor="red";
 }
 function fun2(){
    e8.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 e7.addEventListener("click",function fun1(){
   indicator = "E7";
   if(output == indicator){
    e7.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e7.style.backgroundColor="red";
 }
 function fun2(){
    e7.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 e6.addEventListener("click",function fun1(){
   indicator = "E6";
   if(output == indicator){
    e6.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e6.style.backgroundColor="red";
 }
 function fun2(){
    e6.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 e5.addEventListener("click",function fun1(){
   indicator = "E5";
   if(output == indicator){
    e5.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e5.style.backgroundColor="red";
 }
 function fun2(){
    e5.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 e4.addEventListener("click",function fun1(){
   indicator = "E4";
   if(output == indicator){
    e4.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e4.style.backgroundColor="red";
 }
 function fun2(){
    e4.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 e3.addEventListener("click",function fun1(){
   indicator = "E3";
   if(output == indicator){
    e3.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e3.style.backgroundColor="red";
 }
 function fun2(){
    e3.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 e2.addEventListener("click",function fun1(){
   indicator = "E2";
   if(output == indicator){
    e2.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e2.style.backgroundColor="red";
 }
 function fun2(){
    e2.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 e1.addEventListener("click",function fun1(){
   indicator = "E1";
   if(output == indicator){
    e1.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    e1.style.backgroundColor="red";
 }
 function fun2(){
    e1.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 f8.addEventListener("click",function fun1(){
   indicator = "F8";
   if(output == indicator){
    f8.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f8.style.backgroundColor="red";
 }
 function fun2(){
    f8.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 f7.addEventListener("click",function fun1(){
   indicator = "F7";
   if(output == indicator){
    f7.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f7.style.backgroundColor="red";
 }
 function fun2(){
    f7.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 f6.addEventListener("click",function fun1(){
   indicator = "F6";
   if(output == indicator){
    f6.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f6.style.backgroundColor="red";
 }
 function fun2(){
    f6.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 f5.addEventListener("click",function fun1(){
   indicator = "F5";
   if(output == indicator){
    f5.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f5.style.backgroundColor="red";
 }
 function fun2(){
    f5.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 f4.addEventListener("click",function fun1(){
   indicator = "F4";
   if(output == indicator){
    f4.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f4.style.backgroundColor="red";
 }
 function fun2(){
    f4.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 f3.addEventListener("click",function fun1(){
   indicator = "F3";
   if(output == indicator){
    f3.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f3.style.backgroundColor="red";
 }
 function fun2(){
    f3.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 f2.addEventListener("click",function fun1(){
   indicator = "F2";
   if(output == indicator){
    f2.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f2.style.backgroundColor="red";
 }
 function fun2(){
    f2.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 f1.addEventListener("click",function fun1(){
   indicator = "F1";
   if(output == indicator){
    f1.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    f1.style.backgroundColor="red";
 }
 function fun2(){
    f1.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 g8.addEventListener("click",function fun1(){
   indicator = "G8";
   if(output == indicator){
    g8.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
    scoress++;
    score.innerHTML = scoress;
    }
 }
 else{
    g8.style.backgroundColor="red";
 }
 function fun2(){
    g8.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })
 
 g7.addEventListener("click",function fun1(){
    indicator = "G7";
    if(output == indicator){
     g7.style.backgroundColor="green";
     cheatDetector++;
     if(cheatDetector == 1){
       scoress++;
       score.innerHTML = scoress;
       }
  }
  else{
     g7.style.backgroundColor="red";
  }
  function fun2(){
     g7.style.backgroundColor=black;
  }
  setTimeout(fun2,timer);
  })
 
  g6.addEventListener("click",function fun1(){
    indicator = "G6";
    if(output == indicator){
     g6.style.backgroundColor="green";
     cheatDetector++;
     if(cheatDetector == 1){
       scoress++;
       score.innerHTML = scoress;
       }
  }
  else{
     g6.style.backgroundColor="red";
  }
  function fun2(){
     g6.style.backgroundColor=white;
  }
  setTimeout(fun2,timer);
  })
 
  g5.addEventListener("click",function fun1(){
    indicator = "G5";
    if(output == indicator){
     g5.style.backgroundColor="green";
     cheatDetector++;
     if(cheatDetector == 1){
       scoress++;
       score.innerHTML = scoress;
       }
  }
  else{
     g5.style.backgroundColor="red";
  }
  function fun2(){
     g5.style.backgroundColor=black;
  }
  setTimeout(fun2,timer);
  })
 
  g4.addEventListener("click",function fun1(){
    indicator = "G4";
    if(output == indicator){
     g4.style.backgroundColor="green";
     cheatDetector++;
     if(cheatDetector == 1){
       scoress++;
       score.innerHTML = scoress;
       }
  }
  else{
     g4.style.backgroundColor="red";
  }
  function fun2(){
     g4.style.backgroundColor=white;
  }
  setTimeout(fun2,timer);
  })
 
  g3.addEventListener("click",function fun1(){
    indicator = "G3";
    if(output == indicator){
     g3.style.backgroundColor="green";
     cheatDetector++;
     if(cheatDetector == 1){
       scoress++;
       score.innerHTML = scoress;
       }
  }
  else{
     g3.style.backgroundColor="red";
  }
  function fun2(){
     g3.style.backgroundColor=black;
  }
  setTimeout(fun2,timer);
  })
 
  g2.addEventListener("click",function fun1(){
    indicator = "G2";
    if(output == indicator){
     g2.style.backgroundColor="green";
     cheatDetector++;
     if(cheatDetector == 1){
       scoress++;
       score.innerHTML = scoress;
       }
  }
  else{
     g2.style.backgroundColor="red";
  }
  function fun2(){
     g2.style.backgroundColor=white;
  }
  setTimeout(fun2,timer);
  })
 
  g1.addEventListener("click",function fun1(){
    indicator = "G1";
    if(output == indicator){
     g1.style.backgroundColor="green";
     cheatDetector++;
     if(cheatDetector == 1){
       scoress++;
       score.innerHTML = scoress;
       }
  }
  else{
     g1.style.backgroundColor="red";
  }
  function fun2(){
     g1.style.backgroundColor=black;
  }
  setTimeout(fun2,timer);
  })

  h8.addEventListener("click",function fun1(){
   indicator = "H8";
   if(output == indicator){
    h8.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h8.style.backgroundColor="red";
 }
 function fun2(){
    h8.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 h7.addEventListener("click",function fun1(){
   indicator = "H7";
   if(output == indicator){
    h7.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h7.style.backgroundColor="red";
 }
 function fun2(){
    h7.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 h6.addEventListener("click",function fun1(){
   indicator = "H6";
   if(output == indicator){
    h6.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h6.style.backgroundColor="red";
 }
 function fun2(){
    h6.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 h5.addEventListener("click",function fun1(){
   indicator = "H5";
   if(output == indicator){
    h5.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h5.style.backgroundColor="red";
 }
 function fun2(){
    h5.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 h4.addEventListener("click",function fun1(){
   indicator = "H4";
   if(output == indicator){
    h4.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h4.style.backgroundColor="red";
 }
 function fun2(){
    h4.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 h3.addEventListener("click",function fun1(){
   indicator = "H3";
   if(output == indicator){
    h3.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h3.style.backgroundColor="red";
 }
 function fun2(){
    h3.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })

 h2.addEventListener("click",function fun1(){
   indicator = "H2";
   if(output == indicator){
    h2.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h2.style.backgroundColor="red";
 }
 function fun2(){
    h2.style.backgroundColor=black;
 }
 setTimeout(fun2,timer);
 })

 h1.addEventListener("click",function fun1(){
   indicator = "H1";
   if(output == indicator){
    h1.style.backgroundColor="green";
    cheatDetector++;
    if(cheatDetector == 1){
      scoress++;
      score.innerHTML = scoress;
      }
 }
 else{
    h1.style.backgroundColor="red";
 }
 function fun2(){
    h1.style.backgroundColor=white;
 }
 setTimeout(fun2,timer);
 })



  





















