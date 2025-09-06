let myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toDateString()); // Prints date
// console.log(myDate.toLocaleString()); // Prints date and time
// console.log(myDate.toISOString()); // Prints date and time in ISO format
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // Prints date
// console.log(myDate.toLocaleTimeString()); // Prints Time
// console.log(myDate.toString()); // Prints Date and Time in String format
// console.log(myDate.toTimeString()); // Prints the tome in String format
// console.log(myDate.toUTCString()); // UTC format
// console.log(myDate.getTimezoneOffset()); //Prints the tomeZone offset

// let myCreatedDate = new Date(2023, 0, 24)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 24, 5, 8)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // Here +1 is used to cleas the end user confusion as 'getMonth()' function is 0 indexed
console.log(newDate.getDay());

// `${newDate.getDate()} and the time is...` 
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));




