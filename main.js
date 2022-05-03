const students=[
  { id:1,
    name:"Jammie",
    house: "Ravenclaw",
    expelled:false
  },
  {id:2,
    name:"Harry",
    house: "Slytherin",
    expelled:false
  },
{id:3,
  name:"Kate",
  house: "Hufflepuff",
  expelled:false
},
{id:4,
  name:"Tim",
  house: "Gryffindor",
  expelled:true
}]

// const houseNames= [
//  "Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"
// ]




// UTILITY FUNCTION 
const renderToDom= (divID, textToDom) =>{
  document.querySelector(divID).innerHTML = textToDom;
};

// Create sorting card 

const welcomeCard = () =>{
let domString = " " 
 domString += `<div class="sort-card">
<div class="card-header">
  Hello and welcome to hogwarts! 
</div>
<div class="card-body">
  <h5 class="card-title">Please select the sort button to begin</h5>
  <p class="card-text">Today is only the beginning! </p>
 <a  id= "sort" onclick="sort()" href="#" class="btn btn-primary">Start</a>
</div>
</div>`

renderToDom('#introContainer',domString)

}


// Create student card 

const studentInfoCard = (array) => {
  let domString = " "
  for(let student of array){
 domString += `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text1"> Student: ${student.name}</p>
  <p class="card-text2"> House: ${student.house}</p>
</div>
</div>`
  }
renderToDom ('#hogCardContainer',domString);
}

// Create Voldy House Card

const voldyCard = (array) =>{
let voldyDomString = " "
for(let former of array){
  if(former.expelled === true){
voldyDomString += `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
<p class="card-text1"> Student: ${former.name}</p>
<p class="card-text3"> Expelled: ${former.expelled}  </p>
<p class="card-text2"> Former House: ${former.house}</p>
</div>
</div>`
}
}
renderToDom ('#voldyContainer',voldyDomString);
}

// Have sort form hidden when user arrives on the page 

const hide = () => {
  document.getElementById('formContainer').style.display ="none"
}

// Show sort form once the sort button is clicked 

const sort = () => {
  document.getElementById('formContainer').style.display = "";
}

// Create Sort Form

const form = () => {
  let domString = `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Student Name:</label>
    <input type="name" class="form-control" id="name" id="exampleInputEmail1" aria-describedby="name">
    <div id="Help" class="form-text">A name is needed in order to be sorted!</div>
    <button type="submit" id="sort" class="btn btn-primary">Sort</button>
    </div>
</form>`

renderToDom('#formContainer',domString)
}




// Event Listeners 
// Make Sort Buttons

const eventListener= () => {

  document.querySelector('#buttons').addEventListener("click",(e) =>{
    if(e.target.id === "ravenclaw"){
      const ravenclaw = students.filter((student)=>student.house === "Ravenclaw")
      studentInfoCard(ravenclaw)
    }
    if(e.target.id === "gryffindor"){
      const gryffindor = students.filter((student)=>student.house === "Gryffindor")
      studentInfoCard(gryffindor)
    }
    if(e.target.id === "hufflepuff"){
      const hufflepuff = students.filter((student)=>student.house === "Hufflepuff")
      studentInfoCard(hufflepuff)
    }
    if(e.target.id === "slytherin"){
      const slytherin = students.filter((student)=>student.house === "Slytherin")
      studentInfoCard(slytherin)
    }
    if(e.target.id === "expelled"){
      const expelled = students.filter((student)=>student.expelled === true)
      studentInfoCard(expelled)
    }
    if(e.target.id === "all"){
      const all= students.filter((student)=>student.house !== "all")
      studentInfoCard(all)
    }
    
  });

  // Create a function so user could input name 

  const form= document.querySelector('form');
  form.addEventListener('Sort',(e) => {
    e.preventDefault();
    const houseNames= [
      "Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"
     ]
     let sortHouse= houseNames [Math.floor(Math.random()* houseNames.length)]
    const userName = {
      student: document.querySelector("#name").value,
      house: sortHouse.value
    }
    
    students.push(userName);
    studentInfoCard(students)
    form.reset();
  })

  // const userName = () => {

  // }

  
}





// Function to Start Application
const startApp = () =>{
  studentInfoCard(students);
  voldyCard(students);
  welcomeCard();
  hide()
  // sort();
  form();
  eventListener();
};

startApp()
