function make_sandwich(...item: string[]) {
  console.log(`Making a sandwich with:${item.join(" , ")}`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
