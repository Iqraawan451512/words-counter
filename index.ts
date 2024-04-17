#!/usr/bin/env node
import inquirer from "inquirer"
const answer : {
    sentance :string
} // sentance dono same hen qk y aik h hen
= await inquirer.prompt(
    [
        {
            name:"sentance",
            type:"input",
            message:"please write your sentance or paragraph i try to count it :",
        
        },
    ])
    //we are using trim methode for count words without space 
    // and splite methode for create a array of words we are going to count
    const words = answer.sentance.trim().split(" ")
    console.log(words);
    // printing how much numbers we counts
    console.log(`you write the ${words.length} words.`);
    
    