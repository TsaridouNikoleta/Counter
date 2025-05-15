//1st

// const value = document.getElementById('value');

// const decrease = document.getElementById('decrease');
// const reset = document.getElementById('reset');
// const increase = document.getElementById('increase');

// let count = 0;

// var r = document.querySelector(':root');


// function myFunction_get() {
//   var rs = getComputedStyle(r);
//   console.log(rs);
//   return rs.getPropertyValue('--clr-grey-1:');
 
// }

// function getColor(){
//     if(count < 0){
//         value.style.color = 'red';
//     }else if(count > 0){
//         value.style.color = 'green';
//     }else if(count == 0){
//         const temp = myFunction_get();
//         value.style.color =  temp;  
//     }
// }

// decrease.onclick = function(){
//         value.textContent = --count;
//        getColor();
//
// }


// increase.onclick = function(){
//     value.textContent = ++count;
//   getColor();

// }


// reset.onclick = function(){
//     count = 0;
//     value.textContent = count;
//     getColor();
// }

//--------------------------------------------------------------------------------------

//2nd

let count = 0;

const value = document.getElementById('value');

// console.log(value);

const btns = document.querySelectorAll('.btn');

console.log(value);


btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else if(styles.contains('reset')){
            count = 0;
        }

        if(count < 0){
            value.style.color = "red";
        }else if(count > 0){
            value.style.color = "green";
        }else{
            value.style.color = "black"
        }
        
        value.textContent = count;
    })
})
