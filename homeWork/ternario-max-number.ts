export function max (a: number,b: number,c: number){

    if(a >b ){

        return (a>b) ? a : b;

    }

    if( b > c ){
        return b;
    }
    
    return (a > c) ? a : c;

}

let maxValue = max(1121,2223112,8)

console.log(maxValue);
