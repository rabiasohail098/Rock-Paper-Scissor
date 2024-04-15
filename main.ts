import inquirer from "inquirer";

let player1:string = 
`
 |'''''''')
 |  Rock   )
 |,,,,,,,,)
 `;
 
let player2:string =
`
 |''''''''|
 | Paper  |
 |,,,,,,,,|
 `;

 let player3:string = 
 
 `
  () ()
    /|
   / |
  /  |
   Scissor`;
console.log("Welcome to the Rock, Paper, Scissor game.");
const answer = await inquirer.prompt([{
message:"Please select an option.",
type:"list",
name:"user",
choices:[`
|'''''''')
|  Rock   )
|,,,,,,,,)
`,`
|''''''''|
| Paper  |
|,,,,,,,,|
`,`
() ()
  /|
 / |
/  |
 Scissor`],
},]);
console.log(`${player1}\n${player2}\n${player3}`);
let computerGenrate1 = player1
let computerGenrate2 = player2
let computerGenrate3 = player3
if (answer.user === `
|'''''''')
|  Rock   )
|,,,,,,,,)
` && computerGenrate2 === player2){
    console.log(`You select ${answer.user} and computer select ${computerGenrate2}\nSo Computer won`)
}else if (answer.user === `
|''''''''|
| Paper  |
|,,,,,,,,|
` && computerGenrate1 !== player3){
    console.log(`You select ${answer.user} and computer select ${computerGenrate1}\nSo You won`)
}else if (answer.user=== `
() ()
  /|
 / |
/  |
 Scissor` && computerGenrate3 === player3){
    console.log(`You select ${answer.user} and computer select ${computerGenrate3}\nSo It's Tie`)
};
let Computer= [computerGenrate1,computerGenrate2,computerGenrate3]
for (let i=2;i<Computer.length;i++){
    console.log(`You want to play or exit?`)
}