function bgChanger() {
    
    if(this.scrollY > this.innerHeight / 1.5){      //this > window
        document.body.classList.add('bg-active'); // Don't need . for 'bg-active'
    } else {
        document.body.classList.remove('bg-active'); // Don't need . for 'bg-active'
    }   
    
}

window.addEventListener('scroll',bgChanger, false)