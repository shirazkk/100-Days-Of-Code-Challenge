//Question-46

const laptop = {
  make: "lenovo Thingpad T470",
  model: 12,
  year: 2015,
  describe() {
    console.log(
      `This laptop is a:${this.make} model:${this.model} year:${this.year}`
    );
  },
};
laptop.describe();
