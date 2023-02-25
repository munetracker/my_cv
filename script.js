const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let interval = null;
let messages = [
  "Hello Friend My Name is MitZ",
  "MitZ is a Web Developer",
  "MitZ Love PHP and JS",
  "MitZ Plays with Laravel, React-Redux, Svelte and Astro",
];
let message_current_number = 0;
// .myname2
// #myname
document.querySelector(".myname2").onmouseover = event => {  
  let iteration = 0;
  let chosenMessage = messages[message_current_number];

  clearInterval(interval);
  
  interval = setInterval(() => {
    // event.target.innerText = event.target.innerText
    // event.target.innerText = event.target.dataset.value
    event.target.innerText = chosenMessage
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          // return event.target.dataset.value[index];
          return chosenMessage[index];
        }

        return letters[Math.floor(Math.random() * 52)]
      })
      .join("");

    // if(iteration >= event.target.dataset.value.length){ 
    if(iteration >= chosenMessage.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 4;
  }, 30);

  message_current_number = message_current_number < messages.length-1 ? message_current_number+1 : 0 ;
}

