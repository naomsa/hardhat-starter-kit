import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import { Greeter } from "../../typechain";

task("deploy:greeter")
  .addPositionalParam("greeting", "Say hello, be nice")
  .setAction(async function ({ greeting }: TaskArguments, { ethers }) {
    const contract: Greeter = await (
      await ethers.getContractFactory("Greeter")
    ).deploy(greeting);

    await contract.deployed();
    console.log("Greeter deployed to: ", contract.address);
  });
