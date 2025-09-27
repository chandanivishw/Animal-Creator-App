// create a class Animal with animalName ,animalColor,animalAge and add a method describe() -> return text like "Dog is brown and 3 years old"
class Animal{
    constructor(animalName,animalColor,animalAge){
        this.animalName = animalName ;
        this.animalColor = animalColor;
        this.animalAge = animalAge;
    }
    describe(){
        return `${this.animalName} is ${this.animalColor} and ${this.animalAge} years old.`
    }
}
// const animal1 = new Animal("dog","brown",3);
// console.log(animal1.describe());

// connect with js(DOM)
// on button click : 
// take values from inputs 
//  create new Animal object 
// show Details + describe() output ont the page
let inputName = document.getElementById("aName");
let inputColor = document.getElementById("aColor");
let inputAge = document.getElementById("aAge");
let button = document.getElementById("create-btn");
let para = document.getElementById("para");
let animallist = document.getElementById("animal-list");
let animalArray = [];

button.addEventListener("click",()=>{
    let name = inputName.value ;
    let color = inputColor.value ;
    let age = inputAge.value ;
    if(name !== "" && color !== "" && age !== ""){
    const animal = new Animal(name,color,age);
    console.log(animal.describe());
    para.textContent = animal.describe();
    animalArray.push(animal);
    createAnimalList();
    }else{
        alert("Please fill the input fields 🙏 !");
    }


});
// button.addEventListener("click",(e)=>{
//     e.preventDefault(); // page reload hone se rokta hai
//     let name = inputName.value ;
//     let color = inputColor.value ;
//     let age = inputAge.value ;
//     const animal = new Animal(name,color,age);
//     console.log(animal.describe());
//     para.textContent = animal.describe();

// })

// extra(optional):save all animals in an array and display in a list

function createAnimalList(){
    animallist.innerHTML = "";
    for(let animal of animalArray){
        let li = document.createElement("li");
        li.textContent = animal.animalName;
        animallist.appendChild(li);
    }
}




