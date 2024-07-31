"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let setting = {};
function updateConfig(key, value) {
    setting[key] = value;
    return setting;
}
console.log(updateConfig("Theme", "Dark"));
console.log(updateConfig("Language", "English"));
