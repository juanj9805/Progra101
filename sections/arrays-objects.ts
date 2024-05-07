export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

let fernando: Person = {
    name:'juan',
    age:30,
    isActive: true,
};

let ana: Person ={
    name: 'ana',
    age: 30,
    isActive: false,
};

let luisa: Person ={
    age: 32,
    isActive: false,
    name: 'luisa',
};

let people = [ fernando, ana, luisa ];

console.log(people);

for(let i = 0; i<people.length;i++){
    let person = people[i]
    console.log(person.name, person.age);
    
}