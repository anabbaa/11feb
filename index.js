const count = (x)=>{
    return (s)=>{
        return x +s;
    }
}
console.log(count(4)(6));

const same = (curr,retr,monthr,per)=>{
    if (curr > retr){
        return "please enter valid age";
    }
    else {
        let neage = curr- retr;
        monthr = neage  * 12;
        return monthr * per;

    }
};
console.log(same(77, 70, 2000, 5));

const namec = (str)=>{
let newstr = str.toLowerCase().slice(0,3);
if (newstr == "new" || newstr == "loc"){
    return str;
}
else {
    return "please enter valid citx";
}
}
console.log(namec("sewyork"));

const mul = ()=>{
    let result= "";
    for (let i=1; i<= 256;){
if (i == 1){
    result += `${i}`;
    i +=i;
    continue;}
    result += ` ${i}`;
    i += i;
}
return result;
}
console.log(mul());

const three = ()=>{
    let result = "";
    for (let i=1; i<= 15; i++){
        if(i%3 == 0)
{
    result += `${i} `;

}}
return result.trim();
    }
    console.log(three());

const number = (str)=>{
    let counter =0;
    let vowels = ["a", "e", "u", "i", "o"];
    for (i=0; i< str.length; i++){
        for (j=0; j< vowels.length; j++)
        if ( str[i] == vowels[i]){counter++

        }
    }
    return counter;
}
console.log(number("thgis is good life"));

let person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    print: function(){
        return Object.values(person);
    }}
    console.log(person.print());

    const scores = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 },
      ];

      const scrabbel = (arrj)=>{
          return arrj.reduce((acc,curr)=> acc + curr.score, 0);
      }
console.log(scrabbel(scores));

const change = (obj)=>{
    let result = {};
    for (let prop in obj){
        result[obj[prop]] = prop;
    }

    return result;
}
console.log(change(person));

const convert = (obj)=>{
    let arr = Object.keys(obj);
    let arrk = Object.values(obj);
let arrf = [arr, arrk];
return arrf;
}
console.log(convert({ a: 1, b: 2, c: 3 }))