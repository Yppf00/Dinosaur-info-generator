let input = document.querySelector('#input');
let button = document.querySelector('#button');
let dinosaur = document.querySelector('#dinosaur');
button.addEventListener('click', () => {
   fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
      .then(response => response.json())
      .then(data => {
         for (let i = 0; i < data.length; i++) {
            if (data[i].Name == input.value) {
               dinosaur.innerHTML = `
               <p>${data[i].Description}</p>`;
            }
            if (input.value == '') {
               dinosaur.innerHTML = `
         <p>Please enter a dinosaur name</p>`;
            }
         }
      });
})
