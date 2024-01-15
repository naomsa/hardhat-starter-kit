import { ethers } from "hardhat";
import type { Contract } from "ethers";

describe("Greeter", () => {
  let greeter: Contract;

  beforeEach(async () => {
    greeter = await (
      await ethers.getContractFactory("Greeter")
    ).deploy("Hello, world!");
  });

  it("greet()", async () => {
    await greeter.greet();
  });

  it("setGreeting()", async () => {
    await greeter.setGreeting("Hola, Mundo!");
  });
});
