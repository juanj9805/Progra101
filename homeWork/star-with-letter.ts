function nameStarte(nameList: string[],letter: string){
    
    let newNameList: string[] = []
    
    for (let index = 0; index < names.length; index++) {
        let ame = nameList[index];
        
        if(ame.startsWith(letter)){
            newNameList.push(ame)
        }

    }
    
    
    return newNameList;
    
}

export let names = ['juan','ana','adri','camilo','sara','jairo'];
let heroWith = nameStarte (names, 'j')

console.log(heroWith);
