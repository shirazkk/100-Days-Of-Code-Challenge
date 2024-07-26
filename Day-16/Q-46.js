//Question-46
// type make_laptop={
//     make:string,
//     model:number,
//     year:number
// }
var laptop = {
    make: "lenovo Thingpad T470",
    model: 12,
    year: 2015,
    describe: function () {
        console.log("This laptop is a:".concat(laptop.make, " model:").concat(laptop.model, " year:").concat(laptop.year));
    }
};
laptop.describe();
