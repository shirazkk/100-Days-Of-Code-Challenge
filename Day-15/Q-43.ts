let magicians_names:string[]= ["Thomas", "John", "David", "Micheal"];

function the_greet(magicians_names:string[]){
    let greet_magiciansArray:string[]=[]
    for(let i=0;i<magicians_names.length;i++){
     greet_magiciansArray.push("The Greet " + magicians_names[i])
        
    }
    return greet_magiciansArray

}
function show_magicians(magicians_names:string[]){
    magicians_names.forEach(magicians=>{
        console.log(magicians);
        
    })
}

let greetMagicians=the_greet(magicians_names.slice())//make a copy of array
console.log(greetMagicians);
show_magicians(magicians_names) //original array
show_magicians(greetMagicians) //modified array

