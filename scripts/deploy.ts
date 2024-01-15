import { ethers } from "hardhat";

async function main() {
  const contract = await (
    await ethers.getContractFactory("Greeter")
  ).deploy("Hello, Hardhat!");

  await contract.deployed();

  console.log("Greeter deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
