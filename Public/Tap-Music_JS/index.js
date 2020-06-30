window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#f08080',
        '#90ee90',
        '#778899',
        '#ba55d3',
        '#ffa500',
        '#2e8b57'
    ];

    console.log(sounds[0]);

    //Sounds
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);

        });
    });
    //to make bubble
    const createBubbles = (index)=>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 2s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});