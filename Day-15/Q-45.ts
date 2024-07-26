
function my_car(manufacturer:string,modelName:string,optionalProperties:{[key:string]:any}){
     let car_properties={
        manufacturer,
        modelName,
        ...optionalProperties,
     }
     return car_properties
}
const result=my_car("Toyata","Civic",{color:"Red", manufacturerYear:2017})
console.log(result);
