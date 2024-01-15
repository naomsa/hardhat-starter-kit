import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("deploy:greeter")
  .addPositionalParam("greeting", "Say hello, be nice")
  .setAction(async function ({ greeting }: TaskArguments, { ethers }) {
    const contract = await (
      await ethers.getContractFactory("Greeter")
    ).deploy(greeting);

    await contract.deployed();
    console.log("Greeter deployed to: ", contract.address);
  });
