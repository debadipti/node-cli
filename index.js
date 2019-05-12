#!/usr/bin/env node

const AboutMe = require("./commands/AboutMe");
const ContactMe = require("./commands/ContactMe");
const Experience = require("./commands/Experience");
const inquirer = require("inquirer");

const Index = () => {
  console.log("Welcome to my profile...");
  //   AboutMe();
  //   ContactMe();
  //   Experience();

  // inquirer
  inquirer
    .prompt([
      {
        type: "list",
        choices: ["About", "Contact", "Experience"],
        name: "answer"
      }
    ])
    .then(res => {
      //   console.log(res);
      switch (res.answer) {
        case "About":
          AboutMe();
          break;
        case "Contact":
          ContactMe();
          break;
        case "Experience":
          Experience();
          break;
      }
    });
};

Index();

module.exports = Index;
