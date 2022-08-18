import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { TREASURY_ADDRESS, MERKLE_ROOT } = process.env;

  if (!TREASURY_ADDRESS || !MERKLE_ROOT)
    throw new Error('TREASURY_ADDRESS and MERKLE_ROOT must be set as environment variables');

  const { deployer } = await getNamedAccounts();

  const dd = await deploy('CODE', {
    from: deployer,
    log: true,
    args: [TREASURY_ADDRESS],
  });

  console.log('CODE contract deployer:', deployer);
  console.log('CODE contract deployed to:', dd.address);
};

export default main;
main.tags = ['CODE'];
