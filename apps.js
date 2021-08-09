window.addEventListener('load' , () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector("#visual");
    const colors = [
        '#218C8D',
        '#6CCECB',
        '#F9E559',
        '#EF7126',
        '#8EDC9D',
        '#473E3F',

    ]
    //get sound

    pads.forEach((pad , index) => {
       pad.addEventListener('click', function () {
           sounds[index].currentTime=0;
           sounds[index].play();
           createBubbles(index);     
       });
    });

    //create a function for bubbles
  const createBubbles = (index) => {
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
    //   console.log(bubble)
      bubble.style.background = colors[index];
      bubble.style.animation = 'jump 1s ease  ';
      bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
      })
  }
});