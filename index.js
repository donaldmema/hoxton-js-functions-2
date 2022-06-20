// Using the usual Users and Todo lists:
//   - Prompt the user for a letter
//   - Find all the users who's name contains the letter
//   - Say hi to those users in the console - but only 1 greeting every 2 seconds.
//   - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

// Tips
// - Don't forget to clear interval once it's done running
// - It's perfectly okay to prompt a user for details while other stuff (i.e.the interval) is running
// - Keep your code separated into functions for easier readability later

function getUsersContainingLetter(letter) {
  let usersWithLetter = users.filter((user) => user.name.includes(letter));
  return usersWithLetter;
}

function getSelectedUserIncompleteTodos(userId) {
  return todos
    .filter((todo) => todo.userId === userId && todo.completed === false)
    .map((todo) => todo.title);
}
// let letter = prompt("Enter a letter");
let letter = "a";

let selectedUsers = getUsersContainingLetter(letter);

let i = 0;
let greetIntervalId = setInterval(() => {
  const currentPerson = selectedUsers[i];
  console.log(` - Hello,  ${currentPerson.name}\n`);
  i++;
  if (i + 1 > selectedUsers.length) {
    clearInterval(greetIntervalId);
  }
}, 2000);

// let userId = prompt("Enter a user ID");
let userId = 4;

let usersIncompleteTodos = getSelectedUserIncompleteTodos(userId);
let finalTodos = usersIncompleteTodos.join(`\n  - `);

console.log(`Your incomplete todo's are: 

  - ${finalTodos}`);
