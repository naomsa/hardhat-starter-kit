import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import { Greeter } from "../../typechain";

task("deploy:greeter")
  .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const contract: Greeter = await (
      await ethers.getContractFactory("Greeter")
    ).deploy(taskArguments.greeting);

    await contract.deployed();
    console.log("Greeter deployed to: ", contract.address);
  });
