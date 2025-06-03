let score = "33"  //this is a string
console.log(typeof score) //printing datatype of score

console.log(typeof(score)) //printing datatype of score

let ValueInNumber=Number(score); // this is the conversion of a string into a number
console.log(typeof(ValueInNumber)) //printing datatype of ValueInNumber

let score1 = "33ab"
console.log(typeof(score1))
console.log(score1)

// "33" =>33 to a number 
// "33abc" => NaN(not a number)
// true => 1 ; false => 0   in conversion

// "" => false ; "Amit"=>true   in conversion
// we can use for conversion like to convert thing 
// we have to use String(),Number(),Boolean etc
// for example : let conversionToString = String(Number) 
