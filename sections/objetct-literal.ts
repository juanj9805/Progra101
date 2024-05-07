export let person ={
    nombre: 'juan',
    edad: 30,
    isActive: true,
    hobbies: ['soccer','baseball'],
    greet(){
        let hi = this.hobbies + ' hola';
        console.log(hi);
        
    }

}

person.greet();