//Forecast today
const kelvin = 0;

//Convert Kelvin to Celsius
let celsius = kelvin - 273;

//Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Eliminated the decimal to the result in fahrenheit
fahrenheit = Math.floor(fahrenheit);

//Log the Result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);