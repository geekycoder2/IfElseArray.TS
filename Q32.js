"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Make a list of current users
let current_users = ["John", "Alice", "Bob", "Charlie", "Eve"];
// Make another list of new users
let new_users = ["Charlie", "David", "ALICE", "Frank", "Grace"];
// Loop through the new_users list
for (const new_username of new_users) {
    // Check if the new username has already been used (case-insensitive)
    const isUsernameTaken = current_users.some(existing_username => existing_username.toLowerCase() === new_username.toLowerCase());
    // Print a message based on the availability of the username
    if (isUsernameTaken) {
        console.log(`The username '${new_username}' is not available. Please choose a different one.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
        // Add the new username to the current_users list to ensure uniqueness
        current_users.push(new_username);
    }
}
