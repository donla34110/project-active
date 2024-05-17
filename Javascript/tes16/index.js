// const names = `["ofmvso","omvokm","rgmreog","eopgrrep"]`;
// const person =`{
//     "name": "ofmvso",
//     "age": 30,
//     "isEmploy": true,
//     "hoppy": ["pwoitjrh","egesreg","egsgsrg"]
// }`
// const peopo =`[{
//     "name": "ofmvso",
//     "age": 30,
//     "isEmploy": true
// },
// {
//     "name": "omvokm",
//     "age": 38,
//     "isEmploy": false
// },
// {
//     "name": "rgmreog",
//     "age": 30,
//     "isEmploy": true
// },
// {
//     "name": "eopgrrep",
//     "age": 13,
//     "isEmploy": true
// }]`;

// const jsonString = JSON.parse(names);

// console.log(jsonString);

fetch("people.json")

.then(resposn => resposn.json())
.then(value=> value.forEach(event => console.log(event.age)))
