
const coding =["js","ruby","py"]

// let values = coding.forEach((code)=> console.log(code));
// console.log(values);
//this gives undefined

const mynum = [1,2,3,4,5,6,7,8,9,10]

// let newnum = mynum.filter((num)=>num>=5)
// console.log(newnum);

// newnum = []
// mynum.forEach((num)=>{
// if(num>=5){
//     newnum.push(num)
// }
// });
// console.log(newnum);

//map
// map is used when you want to perform some operation on that entire array
// let value = mynum.map((num)=>num+1);
// console.log(value);
// let newnum = []
// value = mynum.forEach((num)=>{
//  let result =  num+1;
//  newnum.push(result)
// });
// console.log(newnum);

//reduce
//we use  reduce when we want to process and combine the value of js array into a single value 
//has a accumulator and a current value variable
const mytotal = mynum.reduce((acc,cur)=>{
    console.log(cur);
    //return acc+cur
},0);
//console.log(mytotal);

const ShoppingCart = [
                       {
                        itemname:"Phone",
                        price:5000
                       },
                       {
                        itemname:"Clothes",
                        price:300
                       },
                       {
                        itemname:"Books",
                        price:50
                       },
                       {
                        itemname:"Drinks",
                        price:500
                       },
                       {
                        itemname:"Electonics",
                        price:3200
                       }
];

const CartTotal = ShoppingCart.reduce((acc,curr)=>
{
    console.log(curr.price)
  //return acc +curr.price;

},0)
//console.log(CartTotal);
