"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUserProfile(name, age) {
    return {
        displayinfo() {
            console.log(`name:${name},age:${age}`);
        }
    };
}
const userProfile = CreateUserProfile("Shiraz", 20);
userProfile.displayinfo();
