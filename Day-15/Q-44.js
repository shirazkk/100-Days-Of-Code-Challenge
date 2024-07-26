"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...item) {
    console.log(`Making a sandwich with:${item.join(" , ")}`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
