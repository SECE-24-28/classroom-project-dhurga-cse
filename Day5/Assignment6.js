// let textBtn=document.querySelector(".changeText");
// let changeBtn=document.querySelector("onclick");
// let boxBtn=document.querySelector("#box");
// let hideBtn=document.querySelector("onclick");
// let showBtn=document.querySelector("onclick");
// let addBtn=document.querySelector("itemInput");

// textBtn.addEventListener("click",()=>{
//     let t="change text";
//     msg.textContent="Change Text";
//     console.log(t);


// });

// changeBtn.addEventListener("click",()=>{
//     document.body.style.backgroundColor="#4a90e2";

// })

// textBtn.addEventListener("click",()=>{
//     msg.textContent="Change Text";

// })
function changeText(){
    const t=document.getElementById("text");
    t.innerHTML="Change Text";
}

function changeColor(){
    const t=document.getElementById("box");
    t.style.backgroundColor="#4a90e2";
}

function hideBox(){
    const t=document.getElementById("box");
    // t.remove();
    t.style.display="none";
}

function showBox(){
    const t=document.getElementById("box");
    t.style.display="block";
    t.style.textAlign="center";
}

function addItem() {
    const input = document.getElementById("itemInput");
    const text = input.value.trim(); 

    if (text === "") {
      alert("Please enter an item!");
      return;
    }

    const li = document.createElement("li"); 
    li.innerText =text;                      
    document.getElementById("list").appendChild(li); 

    input.value = ""; 
  }