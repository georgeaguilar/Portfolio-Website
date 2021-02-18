document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    document.getElementById("up").addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: "smooth"});
      });
    
  })

// let myButton;

// myButton = document.getElementById('up');

// if (myButton) {
//     console.log('button existe')
// } else {
//     console.log('button no existe arriba');
// }

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM Content Loaded');
//     myButton = document.getElementById('up');

//     if (myButton) {
//         console.log('button existe')
//     } else {
//         console.log('button no existe');
//     }
// })

// myButton = document.getElementById('up');

// if (myButton) {
//     console.log('button existe')
// } else {
//     console.log('button no existe abajo');
// }

// document.getElementById("up").onclick = myFunction;

// function myFunction(){
    // window.scrollTo({top: 0, behavior: "smooth"});
// }