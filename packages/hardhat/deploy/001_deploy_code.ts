import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { MERKLE_ROOT } = process.env;

  if (!MERKLE_ROOT) throw new Error('MERKLE_ROOT must be set as environment variable');

  const { deployer, treasury } = await getNamedAccounts();

  const dd = await deploy('CODE', {
    from: deployer,
    log: true,
    args: [treasury],
  });

  console.log('CODE contract deployer:', deployer);
  console.log('CODE contract deployed to:', dd.address);
};

export default main;
main.tags = ['CODE'];
