//Date And Time
let MyDate = new Date();
console.log(MyDate.toISOString());
console.log(MyDate.toLocaleString());
console.log(MyDate);
let mycreateddate = new Date("2025-04-25");
console.log(mycreateddate.toLocaleString());
let MytimeStamp = Date.now();
console.log(MytimeStamp);
console.log(mycreateddate.getTime());
let NewDate = new Date();
console.log(NewDate);
console.log(NewDate.getDate());
console.log(NewDate.getDay());
console.log(NewDate.getMonth()+1); 
//as the monts starts from zero you have to add one to the date.

