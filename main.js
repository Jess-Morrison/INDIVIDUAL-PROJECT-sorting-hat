const students = [
  {
    id: 1,
    name: "Jammie",
    house: "Ravenclaw",
    expelled: false,
    image: "./raven.jpg",
  },
  {
    id: 2,
    name: "Harry",
    house: "Slytherin",
    expelled: false,
    image: "./sly.jpg",
  },
  {
    id: 3,
    name: "Kate",
    house: "Hufflepuff",
    expelled: false,
    image: "./huff.jpg",
  },
  {
    id: 4,
    name: "Tim",
    house: "Gryffindor",
    expelled: false,
    image: "./griff.jpg",
  },
];

// Create an array to house the expelled students

const badArmy = [];

// const images = () =>{
//   document.getElementById("imgContainer").appendChild(elem);

// }

// const img =[{
//   Ravenclaw: img
// }]

// UTILITY FUNCTION
const renderToDom = (divID, textToDom) => {
  document.querySelector(divID).innerHTML = textToDom;
};

// Create sorting card

const welcomeCard = () => {
  let domString = " ";
  domString += `<div class="sort-card">
<div class="card-header">
  Hello and welcome to hogwarts! 
</div>
<div class="card-body">
  <h5 class="card-title">Please select the sort button to begin</h5>
  <p class="card-text">Today is only the beginning! </p>
 <a  id= "start" onclick="sort()" href="#" class="btn btn-primary">Start</a>
 
</div>
</div>`;

  renderToDom("#introContainer", domString);
};

// Create student card

const studentInfoCard = (array) => {
  let domString = " ";
  for (let student of array) {
    if (student.expelled === false || true) {
      domString += `<div class="card" style="width: 18rem;">
<img src="${student.image}" class="card-img-top" alt="photo of house">
<div class="card-body">
  <p class="card-text1"> Student: ${student.name}</p>
  <p class="card-text2"> House: ${student.house}</p>
  <button type="button" id="delete--${student.id}" class="btn btn-danger">Expel!</button>
</div>
</div>`;
    }
  }
  renderToDom("#hogCardContainer", domString);
};

// Create Voldy House Card

const voldyCard = (array) => {
  let voldyDomString = " ";
  for (let former of array) {
    console.log(former);
    if (former.expelled === false || true) {
      voldyDomString += `<div class="card" style="width: 18rem;">
<img src="darkcloud.jpg" class="card-img-top" alt="photo of dark clouds">
<div class="card-body">
<p class="card-text1"> Student: ${former.name}</p>
<p class="card-text3" id"${former.expelled} "> Expelled: Yes, and can never return!</p>
<p class="card-text2"> Former House: ${former.house}</p>
</div>
</div>`;
    }
  }
  renderToDom("#voldyContainer", voldyDomString);
};

// Have sort form hidden when user arrives on the page

const hide = () => {
  document.getElementById("formContainer").style.display = "none";
};

// Show sort form once the sort button is clicked

const sort = () => {
  document.getElementById("formContainer").style.display = "";
};

// Create Sort Form

const form = () => {
  let domString = `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Student Name:</label>
    <input type="name" class="form-control" id="name" id="exampleInputEmail1" aria-describedby="name" required>
    <div id="Help" class="form-text">A name is needed in order to be sorted!</div>
    <button type="submit" id="sort" class="btn btn-primary">Sort</button>
    </div>
</form>`;

  renderToDom("#formContainer", domString);
};

// Event Listeners
// Make Sort Buttons

const eventListener = () => {
  document.querySelector("#buttons").addEventListener("click", (e) => {
    if (e.target.id === "ravenclaw") {
      const ravenclaw = students.filter(
        (student) => student.house === "Ravenclaw"
      );
      studentInfoCard(ravenclaw);
    }
    if (e.target.id === "gryffindor") {
      const gryffindor = students.filter(
        (student) => student.house === "Gryffindor"
      );
      studentInfoCard(gryffindor);
    }
    if (e.target.id === "hufflepuff") {
      const hufflepuff = students.filter(
        (student) => student.house === "Hufflepuff"
      );
      studentInfoCard(hufflepuff);
    }
    if (e.target.id === "slytherin") {
      const slytherin = students.filter(
        (student) => student.house === "Slytherin"
      );
      studentInfoCard(slytherin);
    }
    if (e.target.id === "expelled") {
      let expelled = students.filter(
        (student) => student.expelled === false || true
      );
      studentInfoCard(expelled);
    }
    if (e.target.id === "expelled") {
      let expelled = students.filter(
        (student) => student.expelled === true || false
      );
      studentInfoCard(expelled);
    }

    if (e.target.id === "all") {
      const all = students.filter((student) => student.house !== "all");
      studentInfoCard(all);
    }
    // if(e.target.id === "expel"){
    //   const expel = former.filter((former)=>former.expelled === true)
    //   voldyCard(expel)
    // }
  });

  document.querySelector("#hogCardContainer").addEventListener("click", (e) => {
    const [method, student] = e.target.id.split("--");

    const index = students.findIndex((taco) => taco.id === parseInt(student));

    if (e.target.id.includes("delete")) {
      badArmy.push(...students.splice(index, 1));
      voldyCard(badArmy);
      studentInfoCard(students);
    }

    //  expelledStudent=  expelled !==false
    //  voldyCard(badArmy)
    // console.log(expelledStudent)

    // if(students.expelled !== true){
    //   studentInfoCard(students)
    // }

    // const removeFalse = (array) =>{
    //   students.pop()
    //   badArmy.push(expelled === true)
    //   console.log(students)
    // }
    // removeFalse(badArmy)
    // if(badArmy.expelled === true){
    //   voldyCard(badArmy)
    // }
  });

  // Create a function so user could input name

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const changeName = () => {
    //   if("Gryffindor" !== "griff.jpg"){
    //    return "Gryffindor"

    //   }
    //   if("Hufflepuff"!=="huff.jpg"){
    //     return "Hufflepuff"
    //   }
    //   if("Ravenclaw"!=="raven.jpg"){
    //     return "Ravenclaw"
    //   }
    //   if("Slytherin" !=="sly.jpg"){
    //     return "Slytherin"
    //   }
    // }
    const houseNames = [{house:"Gryffindor",image:"./griff.jpg"}, 
    {house:"Hufflepuff",image:"./huff.jpg"}, {house:"Ravenclaw",image:"./raven.jpg"}, {house:"Slytherin",image:"./sly.jpg"}];

    
  
    let sortHouse = houseNames[Math.floor(Math.random() * houseNames.length)];
   
    
    const userName = {
      id: Math.floor(Math.random() * 10) + 5,
      name: document.querySelector("#name").value,
      house: sortHouse.house,
      expelled: false,
      image: sortHouse.image
    };

    console.log(userName);
    students.push(userName);
    studentInfoCard(students);
    form.reset();
  });

  // const userName = () => {

  // }

  // const placeBtn =document.getElementById('#buttonContainer')

  // const button = ()=>{
  //  if(students.expelled === false){
};

// Function to Start Application
const startApp = () => {
  studentInfoCard(students);
  voldyCard(badArmy);
  welcomeCard();
  hide();
  // sort();
  form();
  eventListener();
};

startApp();
