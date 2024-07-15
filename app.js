#!/usr/bin/env node
import inquirer from "inquirer";
import chak from "chalk";
console.log(chak.bold.cyan("#\n******************----------------************\n"));
console.log(chak.bold.magenta("#\n*************------WELLCOME TO SAM'S ADVANTURE GAME-----***********\n"));
console.log(chak.bold.cyan("#\n***********------------------****************\n"));
// creat class player
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your name?"
});
//console.log(player.name)
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "select your opponent",
    choices: ["skeleton", "alien", "zombie"]
});
//console.log(opponent.select)
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // skeleton
    if (opponent.select == "skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: ["select your opponent"],
                choices: ["attack", "drink portion", "run for your life..."]
            }
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (p1.fuel < 0) {
                    console.log("you lost,try again next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("congratulation!you won...");
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            p1.fuelIncrease();
            console.log(`you drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "run for your life...") {
            console.log("you loose, better luck next time");
            process.exit();
        }
    }
    // alien
    if (opponent.select == "alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: ["what would you like to do?"],
                choices: ["attack", "drink portion", "run for your life..."]
            }
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (p1.fuel < 0) {
                    console.log("you lost,try again next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("congratulation!you won...");
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            p1.fuelIncrease();
            console.log(`you drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "run for your life...") {
            console.log("you loose, better luck next time");
            process.exit();
        }
    }
    // zombie
    if (opponent.select == "zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: ["what would you like to do?"],
                choices: ["attack", "drink portion", "run for your life..."]
            }
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (p1.fuel < 0) {
                    console.log("you lost,try again next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("congratulation!you won...");
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            p1.fuelIncrease();
            console.log(`you drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "run for your life...") {
            console.log("you loose, better luck next time");
            process.exit();
        }
    }
} while (true);
