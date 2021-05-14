var fullname = prompt("What is your full name?");
var local = prompt("Where are you from?");
var papers = prompt("What is your major?")

var myname = "Hello, my name is " +fullname;
var where = "I am from " +local;
var degree = "My major is " +papers;

document.querySelector(".fullname").innerHTML = myname; 
document.querySelector(".location").innerHTML = where;
document.querySelector(".major").innerHTML = degree;