const openCar = document.getElementById('open');
const closeCar = document.getElementById('close');
const alertCar = document.getElementById('alert');

const button = document.getElementById('button');

const warning = document.getElementById('warning');

const openPe = document.getElementById('openPe');
const closePe = document.getElementById('closedPe');

setInterval(()=>{
    document.getElementById('clickAccept').style.opacity = '0%'
 setTimeout( ()=> {document.getElementById('clickAccept').style.opacity = '100%'} , 700)

 
},1200)

document.getElementById('clickAccept').addEventListener('click', ()=>{
    warning.style.display = 'none'
    document.getElementById('musicCar').play();

    openCar.style.opacity = '1';
    openCar.style.boxShadow = '0px 0px 12px #94c5a5';

    closePe.style.opacity = '1';
    closePe.style.boxShadow = '0px 0px 12px #822631';

    document.getElementById('copyright').style.display = 'flex';
    document.getElementById('container').style.height = '97.65vh';
})

let limitTwo = false;
button.addEventListener('click', ()=>{
    if (!limitTwo){
    
    buttonPress();
    limitTwo = true;

    setTimeout(()=>{
        activeSinal(openCar, alertCar, '#d8c562');
        setTimeout(()=>{
            activeSinal(alertCar, closeCar, '#822631');

            activeSinal(closePe, openPe, '#94c5a5');
            
            document.getElementById('musicCar').pause();
            document.getElementById('musicBird').play();

                setTimeout(()=>{
                    repeatAnimation(openPe);

                    document.getElementById('piscaSound').play();
                    document.getElementById('musicBird').pause();
                }, 5500)

                setTimeout(()=>{
                    activeSinal(closeCar, openCar, '#94c5a5');

                    activeSinal(openPe, closePe, '#822631');
                    
                    document.getElementById('musicCar').play();
                    document.getElementById('piscaSound').pause();
                }, 10000)
        }, 3500)
    }, 10000)
    }
});


let limitThree = false;
button.addEventListener('mouseenter', ()=>{
    if (!limitThree){
    button.style.scale = '1.1';
    }
});
button.addEventListener('mouseleave', ()=>{
    if (!limitThree){
    button.style.scale = '1.0';
    }
});


function buttonPress(){
    button.style.backgroundColor = '#fff';
    button.style.color = '#f21d41';
    button.style.scale = '1.1';
    limitThree = true;

    setTimeout(()=>{
        button.style.backgroundColor = '#f21d41';
        button.style.color = '#fff';
        button.style.scale = '1.0';
        limitThree = false;

        limitTwo = false;
    }, 23800);
};


function activeSinal(desabilite, active, color){
    desabilite.style.opacity = '0.6';
    desabilite.style.boxShadow = 'none';

    active.style.opacity = '1';
    active.style.boxShadow = '0px 0px 12px '+color;

}


function repeatAnimation(id){

    id.style.opacity = '1';
    setTimeout(()=>{
        id.style.opacity = '0.6';
    }, 400)
    setTimeout(()=>{
        id.style.opacity = '1';
    }, 800)
    setTimeout(()=>{
        id.style.opacity = '0.6';
    }, 1200)
    setTimeout(()=>{
        id.style.opacity = '1';
    }, 1600)
    setTimeout(()=>{
        id.style.opacity = '0.6';
    }, 2000)
    setTimeout(()=>{
        id.style.opacity = '1';
    }, 2400)
    setTimeout(()=>{
        id.style.opacity = '0.6';
    }, 2800)
    setTimeout(()=>{
        id.style.opacity = '1';
    }, 3200)
    setTimeout(()=>{
        id.style.opacity = '0.6';
    }, 3600)
    setTimeout(()=>{
        id.style.opacity = '1';
    }, 4000)
    setTimeout(()=>{
        id.style.opacity = '0.6';
    }, 4400)

}
