// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CRUD = await hre.ethers.getContractFactory("CRUD");
  const crud = await CRUD.deploy();

  await crud.deployed();

  const totalNumberOfEmployee1 = await crud.totalEmployees();
  const response = await crud.create(
    "Rakesh",
    "rakesh@gmail.com",
    23,
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );

  const employee = await crud.employees(0);
  console.log(employee);

  await crud.updateEmployee("Communiti", "rakesh@gmail.com");

  const employeeupd = await crud.employees(0);
  console.log(employeeupd);
  const response2 = await crud.create(
    "Rafter",
    "rafter@gmail.com",
    35,
    "0x9d037775122e99a9dcaa5885c8ad7b4cc5b08fd0"
  );

  const response3 = await crud.create(
    "Don",
    "don@gmail.com",
    15,
    "0x9d037775122e99a9dcaa5885c8ad7b4cc5b08fd0"
  );

  const employee2 = await crud.employees(1);
  console.log(employee2);

  const employee3 = await crud.employees(2);
  console.log(employee3);

  await crud.deleteEmployee("rafter@gmail.com");

  const totalNumberOfEmployee2 = await crud.totalEmployees();
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
