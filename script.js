// array destructuring :

// let fruites=["apple","banana","graphs","orange"];
// console.log(fruites.length);

// let[f1,,,f4]=fruites;
// console.log(`my favourite fruites is ${f1} and mu second favourite friutes is ${f4}`);

// object destructuring :
const biodata={
    name:"pooja",
    age:22,
    gender:"female",
    hobbies:{
        first:"reading",
        second:"playing",
    }
};


let{name:names,age,gender,hobbies}=biodata;

console.log(`my name is a ${names} and my age is :${age} and my gender is :${gender} and my first hobbies are ${hobbies.second}`);