


const close = document.getElementsByClassName('close');
const submit = document.querySelector("#submit");
const form = document.getElementsByTagName("form");
const name = document.querySelector("#name");
const party = document.querySelector("#party");
const formInput = document.querySelector('.formInput');

const toggle = document.querySelector(".toggle");
const show= document.querySelector("#show");
const hide = document.querySelector("#hide");
const confirmedTotal = document.querySelector(".confirmed-total");
const unconfirmedTotal = document.querySelector(".unconfirmed-total");
const guestlistTotal = document.querySelector(".guestlist-total");
// const body = document.querySelector('body');
let confirmedCounter = 0;
show.style.display = 'none';



///Creates div cards for each name that is generated



  formInput.addEventListener('input', ()=> {
    if (formInput.value) {   // Run function only if input has a value
      submit.disabled = false; //Enable submit btn
      submit.style.backgroundColor = '#7F54B0';//change background color
      submit.style.color = "#fff"; //change font color
      submit.style.cursor = "pointer"; //enable cursor pointer for submit btn
      toggle.style.cursor = "pointer"; //enable cursor pointer  for toggle btn
    } else {
      submit.disabled = true;  //if no value in input, disable buttons
      submit.style.color = "#737373";
      submit.style.backgroundColor = "#98949e";
      submit.style.cursor = 'default';
    }
  })




//Event listener to submit btn

submit.addEventListener('click', ()=> {
  event.preventDefault(); //prevent page reload
  const newGuest = document.createElement("DIV");  //create DIV element
  const h2 = document.createElement("H2"); //Add h2 element
  const userName = document.createTextNode(name.value); //h2 text content = guest name


  main.appendChild(newGuest); //append DIV to main element
  newGuest.appendChild(h2); //append h2 to DIV element
  h2.appendChild(userName); //append text node to h2 (name.value)


  name.value="";  //Reset input value of name


  var checkbox = document.createElement('input');//creates input
  checkbox.type = "checkbox"; //input type = checkbox
  checkbox.name = "name"; // name attr of checkbox is "name"
  checkbox.id = "confirmed";//id attr is confirmed
  checkbox.className = "checkbox";// given a className of checkbox


  var label = document.createElement('label') //create a label for checkbox
  label.htmlFor = "confirmed"; // for attr = id of checkbox
  label.appendChild(document.createTextNode('Confirmed')); //append text node of Confirmed

  newGuest.appendChild(checkbox); //add checkbox to div
  newGuest.appendChild(label); //add label to div

  newGuest.className = "new-guest";  // give DIV class name of 'new-guest'
  h2.className = "user-name";
  let uncheckedTotal = document.querySelectorAll('.new-guest').length //get current guest total
  unconfirmedTotal.innerHTML="Total Unconfirmed: "+ uncheckedTotal; // update Total conirmed
  guestlistTotal.innerHTML="Guestlist Total: "+uncheckedTotal; //update Guestlist

  //
  newGuest.insertAdjacentHTML("beforeend", "<p class='close'>remove guest</p>")

//reset btn disabled
  submit.disabled = true;
  submit.style.color = "#737373";
  submit.style.backgroundColor = "#98949e";
  submit.style.cursor = 'default';



  //checkbox toggle
  const toggleCheck = document.querySelectorAll('.checkbox');

  for (let i=0; i < toggleCheck.length; i+=1) {

    toggleCheck[i].addEventListener('change',()=>{
      let checkedTotal = document.querySelectorAll('input[type="checkbox"]:checked').length;
      confirmedTotal.innerHTML= "Total Confirmed: "+ checkedTotal;

      let uncheckedTotal = document.querySelectorAll('.new-guest').length -
      document.querySelectorAll('input[type="checkbox"]:checked').length;
      unconfirmedTotal.innerHTML="Total Unconfirmed: "+ uncheckedTotal;



    })


}



for (let i=0; i < close.length; i++) {
  close[i].addEventListener('click', ()=> {
    event.target.parentElement.remove();
    localStorage.setItem("main", main.children.length) ;
    let checkedTotal = document.querySelectorAll('input[type="checkbox"]:checked').length;
    confirmedTotal.innerHTML= "Total Confirmed: "+ checkedTotal;

    let uncheckedTotal = document.querySelectorAll('.new-guest').length -
    document.querySelectorAll('input[type="checkbox"]:checked').length;
    unconfirmedTotal.innerHTML="Total Unconfirmed: "+ uncheckedTotal;
    guestlistTotal.innerHTML="Guestlist Total: "+ uncheckedTotal;
    localStorage.setItem("body", body.innerHTML) ;
  });
}
localStorage.setItem("body", body.innerHTML) ;
localStorage.setItem("main", main.children.length) ;

})//end of event listener

const checkbox = document.getElementsByClassName("checkbox");
const newGuest = document.getElementsByClassName('new-guest');
let hidden = false;
//confirmed function


hide.addEventListener('click', ()=>{
  for (let i=0; i<newGuest.length; i++) {
    if (newGuest[i].children[1].checked) {
      newGuest[i].style.display = 'block';

    } else {
      newGuest[i].style.display = 'none';
      hide.style.display = 'none';
      show.style.display = 'block';
    }
  } //end loop



}) // end event listener

  show.addEventListener('click',()=> {
    for (let i=0; i < newGuest.length; i++) {
      newGuest[i].style.display = 'block';
      show.style.display = 'none';
      hide.style.display = 'block';
    }
  });

  //--------
  for (let i=0; i < close.length; i++) {
    close[i].addEventListener('click', ()=> {
      event.target.parentElement.remove();
      localStorage.setItem("main", main.children.length) ;
      let checkedTotal = document.querySelectorAll('input[type="checkbox"]:checked').length;
      confirmedTotal.innerHTML= "Total Confirmed: "+ checkedTotal;

      let uncheckedTotal = document.querySelectorAll('.new-guest').length -
      document.querySelectorAll('input[type="checkbox"]:checked').length;
      unconfirmedTotal.innerHTML="Total Unconfirmed: "+ uncheckedTotal;
      guestlistTotal.innerHTML="Guestlist Total: "+ uncheckedTotal;
      localStorage.setItem("body", body.innerHTML) ;
    });
  }
