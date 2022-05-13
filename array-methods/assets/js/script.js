//You can create an array using two ways:
// 1st Way of writing an array. this way of writing an array is called  LITERAL SYNTAX.
const friends = ["friend1", "friend2", "friend3" , "friend4"];
console.log(friends);

// 2nd Way of writing an array using 'new' keyword
const array2 = new Array ("eat", "sleep", "walk", 1, true);
console.log(array2);

console.log(friends[0]);
console.log(array2[4]);

console.log(array2.length);

console.log(array2[array2.length - 2]);

array2[1] = "work";
console.log(array2);

const fullName = "RAJESHWARI G";
const array1 = [fullName, "working",  2*22,  friends, {'task1': 'exercise'}, function hello() { console.log('hello') }];
console.log(array1);

let hello1 = array1[5];
console.log(hello1);

// Array Methods

// Array push
// Array push method adds the new element at the end of the array.

const newLength = friends.push("friend5");
console.log(friends);
console.log(newLength);

// Array unshift
// Array unshift method adds the new element at the begining of the array.

friends.unshift("friend0");
console.log(friends);

// Remove elements

// Array Pop method - This removes the last element from the array.

friends.pop(); //Last element is removed.
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Array shift method - This removes the first element from the array.
friends.shift();
console.log(friends);

// Array indexOf method - to get the index value of an array element
console.log(friends.indexOf("friend2"));

console.log(friends.indexOf("friend5")); //returns -1 bcoz the element not exists

//The includes() method returns true if a string contains a specified string.
//string.includes(searchvalue, start).....The includes() method is case sensitive.

let text = "Hello World, welcome to the universe.";
let result = text.includes("World", 0);
console.log(result);

if (friends.includes("friend3")) {
    friends.push("friend4");
        
    }
    console.log(friends);
//How to delete an element from the array?
    delete friends[1]; // remove "friend2"
    console.log(friends.length);
 //The element was removed, but the array still has 3 elements, we can see that arr.length == 4.   

 friends.splice(2, 1); // from index 1 remove 1 element
 console.log(friends);
 console.log(friends.length);

 friends.splice(1, 2, "friend11", "friend12" , "friend13" , "friend14");
 console.log(friends);
 console.log(friends.length);

 friends.splice(0,0,"friend0");
 console.log(friends);

 friends.splice(-1,0,"friend15");
 console.log(friends);

 console.log(friends.slice(0,2));

 console.log(friends.slice(-2,-1));

 console.log(friends.concat(array2));

 let sampleobj = {
     name : "abc",
     age : 10
 }

 console.log(friends.concat(sampleobj));

 //The arr.forEach method allows to run a function for every element of the array.

 //friends.forEach(alert);

 friends.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });

  //search in an array.
  findindex = friends.indexOf("friend13");
  console.log(findindex);

  findlastindex = friends.lastIndexOf("friend14");
  console.log(findlastindex);

  findincludes = friends.includes("friend13")
  console.log(findincludes); //returns true/false

  friends.push("NaN");
  console.log(friends);

  a1 = ["NAN"];
console.log(a1);
  console.log(a1.indexOf('NAN'));
  console.log(a1.includes('NAN'));


  //find
 
    // Method (return element > 10).
    //for()
    var found = friends.find(function (item) {
        if(found = "friend11"){
            console.log(`${found} found element in index ${friends.indexOf("friend11")} `);
        }
        //return element = "friend11";
    });
   
//filter
var filtered = [112, 52, 0, -1, 944];
function isPositive(item) {
    return item > 50;
  }
  
  result = filtered.filter(isPositive);
  console.log(result);

  let words = ["rajeshwari","rashmi","rohan","rithik","bindu","cat","bat"]
let wordsFilter = words.filter(function(word){
    let subStr = word.slice(0,2);
    if(subStr === "ra"){
        return word;
    }
})
console.log(wordsFilter);

//Transform an array
//map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);

var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
  return num / 2;
});
console.log(new_arr);
console.log(arr.sort());
console.log(arr.reverse());

//Filter out the students who got more than 80 percent marks. 
aStudent = [
    {sStudentId : "001" , fPercentage : 91.2},
    {sStudentId : "002" , fPercentage : 78.7},
    {sStudentId : "003" , fPercentage : 62.9},
    {sStudentId : "004" , fPercentage : 81.4}];
    
    function fnFilterStudents_filter(aStudent){
        return aStudent.filter(function(oStudent){
            return oStudent.fPercentage > 80.0;
        });
    }
console.log(fnFilterStudents_filter(aStudent));
