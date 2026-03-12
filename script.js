// LOGIN FUNCTION
function login(){

let username = document.getElementById("loginUsername").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(username === "" || email === "" || password === ""){
alert("Please fill all fields");
}
else{

// store username
localStorage.setItem("username", username);

// go to homepage
window.location.href = "index.html";

}

}



// POPUP FUNCTIONS

function openLogin(){
document.getElementById("loginBox").style.display="block";
}

function closeLogin(){
document.getElementById("loginBox").style.display="none";
}

function openSignup(){
document.getElementById("signupBox").style.display="block";
}

function closeSignup(){
document.getElementById("signupBox").style.display="none";
}



// CREATE POST

function createPost(){

let username = localStorage.getItem("username") || "Anonymous";

let item = document.getElementById("itemName").value;
let type = document.getElementById("type").value;
let desc = document.getElementById("desc").value;
let contact = document.getElementById("contact").value;
let image = document.getElementById("image").files[0];

let reader = new FileReader();

reader.onload = function(){

let post = document.createElement("div");
post.className = "post";

post.innerHTML = `

<h3>${username}</h3>
<p><b>${type}:</b> ${item}</p>
<p>${desc}</p>
<p><b>Contact:</b> ${contact}</p>

<img src="${reader.result}" width="250">

<div class="actions">
<button onclick="likePost(this)">❤️ Like</button>
</div>

<input class="comment-box" placeholder="Add comment..." onkeypress="addComment(event,this)">
<div class="comments"></div>

`;

document.getElementById("feed").prepend(post);

};

if(image){
reader.readAsDataURL(image);
}

}



// LIKE BUTTON

function likePost(btn){
btn.innerText = "❤️ Liked";
}



// COMMENT SYSTEM

function addComment(e,input){

if(e.key === "Enter" && input.value !== ""){

let comment = document.createElement("p");
comment.className = "comment";
comment.innerText = input.value;

input.nextElementSibling.appendChild(comment);

input.value = "";

}

}


function createPost(){

let username=document.getElementById("username").value
let item=document.getElementById("itemName").value
let type=document.getElementById("type").value
let desc=document.getElementById("desc").value
let contact=document.getElementById("contact").value
let image=document.getElementById("image").files[0]

let reader=new FileReader()

reader.onload=function(){

let post=document.createElement("div")
post.className="post"

post.innerHTML=`

<h3>${username}</h3>
<p><b>${type}:</b> ${item}</p>
<p>${desc}</p>
<p><b>Contact:</b> ${contact}</p>

<img src="${reader.result}">

<div class="actions">
<button onclick="likePost(this)">❤️ Like</button>
</div>

<input class="comment-box" placeholder="Add comment..." onkeypress="addComment(event,this)">
<div class="comments"></div>

`

document.getElementById("feed").prepend(post)

}

if(image){
reader.readAsDataURL(image)
}

}

function likePost(btn){
btn.innerText="❤️ Liked"
}

function addComment(e,input){

if(e.key==="Enter"){

let comment=document.createElement("p")
comment.className="comment"
comment.innerText=input.value

input.nextElementSibling.appendChild(comment)

input.value=""

}

}
/* Contact Form */

document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;

alert("Thank you " + name + "! Your message has been submitted successfully.");

this.reset();

});

function loginValidation(){

let username = document.getElementById("Username").value;
let email = document.getElementById("email id").value;
let password = document.getElementById("Password").value;

if(username === "" || email === "" || password === ""){
alert("Please fill all the fields before logging in.");
return false;
}

alert("Login Successful!");

// redirect to home page
window.location.href = "index.html";

return false;

}