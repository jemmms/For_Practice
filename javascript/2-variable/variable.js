// variable = stores a value of your identifier

// declaration   let x;
// assignment    x = 100;


// console
let myName = "James"; //string
    console.log(`my name is ${myName}`);

let price = 200; //number
    console.log(`the currently price of my bag is ${price}`);

let grade = 1.26; //float
    console.log(`my grade in my programming subject is ${grade}`);

let fact = true; //boolean
    console.log(`philipine's goverment is full of corrupt politicians. ${fact}`);

let mariella = false; //boolean
    console.log(`i think mariella is a good person. ${mariella}`);

let apple = 10;
let orange = 15;
let total = apple + orange;

    console.log(`if apple price is ${apple} and orange is ${orange}`);
    console.log(`the sum of price of these fruits is ${total}`)



// actual website
let fullname = "James Mendoza";
let age = 20;
let height = 154.33;
let allowance = 500 + 500;
let totalAllowance = allowance + 200;

    document.getElementById('myName').textContent = `my name is ${fullname}`;
    document.getElementById('myAge').textContent = `my age is ${age}`;
    document.getElementById('myHeight').textContent = `my heigh is also ${height}`;
    document.getElementById('allowance').textContent = `my allowance every 2 weeks is ${allowance}`;
    document.getElementById('totalAllowance').textContent = `my total allowance is ${totalAllowance} if i include my transportation allowance.`;