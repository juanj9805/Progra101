export class Car {

    public brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning;
    public type: string;
    private readonly createdAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 12341241412312;
    }

    turnOn() {

        if(this.isRunning ){
            console.log('el carro se dano');
            
        }
        if( this.fuelTank <=0 ){
            console.log('sin gasolina');
            
            return;
        }

    this.isRunning = true;
    console.log('prendio');

    }

    fillTank( gas: number){

        if( gas <= 0){
            console.log('debe ser valor ositivo');
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if(newFuelTank >= 100){
            this.fuelTank = 100
        }

        this.fuelTank = newFuelTank;

        // if(this.fuelTank = 100){
        //     console.log('gas lleno');
        //     return;
        
        // }

        
        // if( this.fuelTank = 100){
        //     console.log('no se uede llenar mas');
        //     return;
        // }

    }


 
    }

    
let mazda = new Car('mazda', 'sedan');  
let bmw = new Car('bmw', 'sedan');  

console.log(bmw);

    
mazda.fillTank(30);
console.log(mazda);
mazda.fillTank(500);
// mazda.turnOn();