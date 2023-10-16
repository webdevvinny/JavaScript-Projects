document.querySelector("#details").addEventListener('click',

function requestDetails(){


const personalDetails = {
      name:prompt("What is your name?"),
      age: Number(prompt(name + " what is your current age?")),
      course: prompt("What is your current course? ")
}

const myDetails = []
myDetails.push(personalDetails.name);
myDetails.push(personalDetails.age);
myDetails.push(personalDetails.course);

document.querySelector("h1").innerHTML = `FullName: ${myDetails[0]} <br> Age: ${myDetails[1]} years old. <br> Current Programme: ${myDetails[2]}`
}

);

let addedItem = '';
const addedItemsBox = [];

document.querySelector("#arrayData").addEventListener("click", function () {

            addedItem = document.querySelector("#named").value;
            addedItemsBox.unshift(addedItem);
      
           for(let arrayItems = 0; arrayItems < addedItemsBox.length; arrayItems++){
                     //  alert(addedItemsBox[arrayItems]);
          }
          
           document.querySelector("#arrayStaff").innerHTML += `
                                    <p>${addedItemsBox[0]} <input type="date" name="dated" id="dates"> <button id='delete'>DELETE</button></p> 

`

}
);

const toDoList = [
      
    { name: 'Cook',
      dueDate: '2023-12-23'
},

{
      name: 'Youtube',
      dueDate:'2023-10-30'
}   
];

function renderToDoList() {

      let toDoListHtml = '';

            for(let i =0; i < toDoList.length; i++){
                        let items = toDoList[i].name;
                        let dueDate = toDoList[i].dueDate;
                        toDoListHtml += ` <p>
                       <div id='itemsDetails'> ${items} </div>
                       <div id='itemsDetails'>  ${dueDate} </div>

                        <Button id='button'  onclick=' toDoList.splice(${i}, 1); renderToDoList();'>Delete</Button>
                        
                        </p>`;
            }

      document.querySelector("#arrayStaff").innerHTML = toDoListHtml;
}


function arrayFunc() {
      let inputElement = document.querySelector("#named").value;
      let lastDate = document.querySelector("#setDate").value;

            if(inputElement == '' || inputElement == null){
                        alert("You cannot add empty List Please input some values!!");
            }else{
                        toDoList.push(
                              {

                                    name: inputElement,
                                    dueDate  : lastDate
                        
                              }
                               );

                        document.querySelector("#named").value = '';
                        document.querySelector("#setDate").value = '';

                        renderToDoList();
            }
}











