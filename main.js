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

const houseNames= [
 "Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"
]

// UTILITY FUNCTION 
const renderToDom= (divID, textToDom) =>{
  document.querySelector(divID).innerHTML = textToDom;
};

// Create sorting card 

const sortCard = () =>{
let domString = " " 
 domString += `<div class="sort-card">
<div class="card-header">
  Hello and welcome to hogwarts! 
</div>
<div class="card-body">
  <h5 class="card-title">Please select the sort button to begin</h5>
  <p class="card-text">Today is only the beginning! </p>
  <a href="#" class="btn btn-primary">Sort</a>
</div>
</div>`

renderToDom('#hogCardContainer',domString)
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

// Create Sort Form

const form = () => {
  let domString = `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`

renderToDom('#formContainer',domString)
}






// Function to Start Application
const startApp = () =>{
sortCard();
form();
studentInfoCard(students);
};

startApp()
