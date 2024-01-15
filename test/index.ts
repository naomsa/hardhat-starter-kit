import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Greeter", () => {
  async function deployContracts() {
    const contract = await (
      await ethers.getContractFactory("Greeter")
    ).deploy("Hello, world!");

    return contract;
  }

  it("Should return the new greeting once it's changed", async () => {
    const contract = await loadFixture(deployContracts);

    expect(await contract.greeting()).to.equal("Hello, world!");

    await contract.setGreeting("Hola, mundo!");
    expect(await contract.greeting()).to.equal("Hola, mundo!");
  });

  it("Should emit the Greet event once greet() is called", async () => {
    const contract = await loadFixture(deployContracts);

    await expect(await contract.greet()).to.emit(contract, "Greet");
  });
});
