import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment): Promise<void> {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Greeter", {
    from: deployer,
    args: ["Hola, mundo!"],
    log: true,
  });
}

main.tags = ["Greeter"];

export default main;
