'use strict';
//var,
//let keyword variable value can be reassign
 //const keyword variable value can't be reassign.
 let i = 1;
 i=2;
 console.log(i); //i=2

 const a = "hi";
 //a = "hello"; //error
console.log(a);

//objects
const person = {
    name : "raji",
    walk(){
        console.log(`${this.name} should walk atleast 1 hour`); //this keyword refers to the current object
    }

}
console.log(person.walk());
//bind method
//functions in javascript are objects ,bind method sets the value of "this" value permanently
const walk = person.walk.bind(person);
walk(); //we can access without referncing person object

//arrow function
const jobs = [
    { id: 1, isActive:true},
    { id: 2, isActive:true},
    { id: 3, isActive:false},
];
const ActiveJobs = jobs.filter(function(job){
    return job.isActive;
})
console.log(ActiveJobs);

//if we use arrow function
console.log(jobs.filter(job => (!job.isActive)));

