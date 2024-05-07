import { error } from 'console';
import { limit } from '../sections/loops-tarea';
export function printMultiplicationTable( numero: number, maximo: number = 10){

    if(maximo<=0){
        throw new Error ('bad')
        
    }
        for(let i=0;i<=maximo;i++){
            console.log(numero*i);
            
        }

    

}

