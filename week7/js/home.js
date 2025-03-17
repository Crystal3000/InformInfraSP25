//Reference Variables (referencing the DOM / html page)
const petsUlRef = document.querySelector("#pets");


//Data Variables
const pets = ["Cat", "Dog", "Snake", "Fox", "Bird", "Fish", "Mouse"];
const images = ["https://picsum.photos/200", "https://picsum.photos/210", "https://picsum.photos/220", "https://picsum.photos/230", "https://picsum.photos/240", "https://picsum.photos/250", "https://picsum.photos/260"] 

//Loop through our lists, shortcut "forloop"
//.//for (let index = 0; index < array.length; index++) {
 //   const element = array[index];
    
//}

console.table(pets);

for (let i = 0; i < pets.length; i++) {
const pet = pets[i];
console.log(pet);

const image = images[i];
console.log(image);

const imageHtml = "<img src='" + image + "' alt='' />"

petsUlRef.innerHTML += "<li>" + pet + imageHtml + "</li>";
}