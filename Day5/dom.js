// //1.tag selector
// let heading1=document.getElementsByTagName("h1");
// //html collection array
// console.log(heading1[1]);//it will return multiple

// //2.class selector
// let cl=document.getElementsByClassName("a");
// //html collection 
// console.log(cl[0]);

// //3.id selector

// let idd=document.getElementById("b");
// //it will return single element and the first element
// console.log(idd);

// //4.queryselector
// let sel=document.querySelector("#b");
// //it will return single element and first element only
// console.log(sel);

// //5.queryselectorAll
// let d=document.querySelectorAll("h1");//return multiple id also
// //nodelist array
// console.log(d);

// //read and write operations

// let head=document.querySelector("p");
// //read
// console.log(head.textContent);
// //wrute
// head.textContent="this is the new paragraph content";

// let div=document.querySelector("div");
// div.innerHTML="<p>hello from para</p>";//insert tag
// // div.textContent="<p>hello from para</p>";//write as it is
// // console.log(div.textContent);
// console.log(div.innerHTML);

//add/remove/toggle class
let head=document.querySelector("hi");
console.log(head);

head.classList.add("color");
head.classList.remove("border");
head.classList.toggle("background");

//styling-inline(higher priority)
let p=document.querySelector("p");
p.style.color="red";
p.style.backgroundColor="green";

//creating element
let ul=document.createElement("ul");
let lii=document.createElement("li");
lii.textContent="Item 1";
let li1=document.createElement("li");
li1.textContent="Item 2";
ul.appendChild(lii);
ul.appendChild(li1);

document.body.appendChild(ul);
let arr=["apple","Banana","Mango"];

arr.forEach((element)=>{
    let lo=document.createElement("li");
    lo.textContent=element;
    ul.appendChild(lo);
});



