// Factory function that creates a user profile
function CreateUserProfile(name: string, age: number) {
  // Return an object with a method to display user info
  return {
    // Method to display user information
    displayinfo() {
      // Print the name and age to the console
      console.log(`name: ${name}, age: ${age}`);
    },
  };
}

// Call the CreateUserProfile function with arguments and store the result in userProfile
const userProfile = CreateUserProfile("Shiraz ALi", 20);
userProfile.displayinfo(); //access user name and age
