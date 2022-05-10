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

