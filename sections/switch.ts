export let weekDay = 10;

if(weekDay<= 0){
    throw new Error("error");
    
}

switch (weekDay) {
    case 1:
        console.log('lunes');
        
        break;
    case 2:
        console.log('martes');
        
        break;
    case 3:
        console.log('miercoles');
        
        break;
    case 4:
        console.log('jueves');
        
        break;

    
    default:
        console.log('cagaste');
        
        break;
}