var inputs = document.querySelectorAll('input');

// Set defaults (doing so in html doesn't work on refresh for some reason)
inputs.forEach( (input) => {
    if( input.type == "range" ) {
        input.value = 0;
    }
    else if( input.type == "color" ) {
        input.value = "#ffffff";
    }
})


function updater() {
    let page = document.querySelector('html');
    // let page = document.documentElement

    page.style.setProperty("--" + this.name, this.value + this.dataset.suffix);

    // console.log(page);
    // console.log(this.name)
    // let ball = this.parentNode.nextElementSibling;

    // switch( this.name ) {
    //     case 'color': 
    //         ball.style.setProperty('background', this.value)
    //         break;
        
    //     case 'shapeshift':
    //         ball.style.setProperty('border-radius', this.value + "%");
    //         break;

    //     case 'levitate':
    //         ball.style.setProperty('bottom', this.value + "%")
    //         break;

    // }
}


inputs.forEach( (input) => {
    input.addEventListener('change', updater);
    // input.addEventListener('mousemove', updater)
})

