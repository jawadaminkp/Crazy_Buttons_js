// grab everything we need

const crazyButtons = document.querySelectorAll('.btn-crazy');


// functions
function goCrazy(){

    //random number for left offset
    const leftV = Math.random() * (window.innerWidth - this.clientWidth);
    //random number for top offset 
    const topV = Math.random() * (window.innerHeight - this.clientHeight);


    //apply numbers to the buttons
    this.style.top = topV + 'px';
    this.style.left = leftV + 'px';
}


// add event listeners

crazyButtons.forEach(function(button){
    button.addEventListener('mouseenter', goCrazy)
})

