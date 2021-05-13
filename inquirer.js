const inquirer = require("inquirer");
require("colors");

const menuOptions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer? ",
    choices: ["1", "2", "3"],
  },
];

const inquirerMenu = async () => {
  //console.clear();
  console.log("=========================".green);
  console.log("   Seleccione una opcion".green);
  console.log("=========================".green);

  const option = await inquirer.prompt(menuOptions);

  return option;
};

module.exports = {
  inquirerMenu,
};
