const students=[
  { id:1,
    name:"Jammie",
    house: "Ravenclaw",
    expelled:No
  },
  {id:2,
    name:"Harry",
    house: "Slytherin",
    expelled:No
  },
{id:3,
  name:"Kate",
  house: "Hufflepuff",
  expelled:No
},
{id:3,
  name:"Tim",
  house: "Gryffindor",
  expelled:Yes
}]

// UTILITY FUNCTION 
const renderToDom= (divID, textToDom) =>{
  document.querySelector(divID).innerHTML = textToDom;
};

// Create sorting card 

const sortCard = (array) =>{
let domString = " " 
domString += `<div class="card">
<div class="card-header">
  Featured
</div>
<div class="card-body">
  <h5 class="card-title">Special title treatment</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

renderToDom('#container',domString)
}

// Create student card 

const studentInfoCard = () => {
let domString = `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>`

renderToDom ('#container',domString)
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
sortCard(students);
};

startApp()
