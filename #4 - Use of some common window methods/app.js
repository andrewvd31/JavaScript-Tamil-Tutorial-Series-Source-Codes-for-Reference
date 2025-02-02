//imp! window.alert()
window.alert('Hello world');

let message = 'Hello world';
alert(message);

//imp! window.prompt()
window.prompt('What is your name?');

let yourName = prompt('What is your name');
console.log(yourName);
alert("Your name is " + yourName);

//imp! window.confirm()
let nameConfirm = window.confirm('Are you sure your name is ' + yourName + ' ?');
if(nameConfirm){
    alert("Your name is " + yourName);
}
else{
    alert('Please retype your name');
}