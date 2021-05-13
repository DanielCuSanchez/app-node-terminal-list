const { inquirerMenu } = require("./inquirer");

const main = async () => {
  let option = "";
  do {
    option = await inquirerMenu();

    console.log({ option });
  } while (option !== "0");
};

main();
