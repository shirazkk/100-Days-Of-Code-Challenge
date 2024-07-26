let simplenumbers:number[]=[1,2,3,4,5,6,7,8,9]

for(let i=0;i<simplenumbers.length;i++){
   let number=simplenumbers[i]
   let addordinal;
    if(number===simplenumbers[0]){
        addordinal="st"
    }
    else if(number===simplenumbers[1]){
        addordinal="nd"
    }
    else if(number===simplenumbers[2]){
        addordinal="rd"
    }
    else{
        addordinal="th"
    }
    console.log(`${number}${addordinal}`);
    
}

