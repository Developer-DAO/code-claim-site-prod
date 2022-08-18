import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { ethers, deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { TREASURY_ADDRESS, MERKLE_ROOT } = process.env;

  if (!TREASURY_ADDRESS || !MERKLE_ROOT)
    throw new Error('TREASURY_ADDRESS and MERKLE_ROOT must be set as environment variables');

  // the treasury account is the DAO multi-sig wallet in production
  const { deployer } = await getNamedAccounts();

  const claimEndDate = new Date();
  // claim period expired in 180 days ~ 6 months
  const claimEnd = Math.floor(claimEndDate.setDate(new Date().getDate() + 180) / 1000);
  console.log('claimEnd', claimEnd);

  const codeContract = await ethers.getContract('CODE');
  const connectContract = await codeContract.connect(await ethers.getSigner(deployer));
  const devAmount = await codeContract.balanceOf(deployer);
  console.log('devAmount:', devAmount.toString());

  const dd = await deploy('ClaimCODE', {
    from: deployer,
    log: true,
    args: [claimEnd, codeContract.address],
  });

  await connectContract.transfer(TREASURY_ADDRESS, ethers.utils.parseUnits((6_600_000).toString(), 18));
  await connectContract.transfer(dd.address, ethers.utils.parseUnits((3_400_000).toString(), 18));

  const claimContract = await ethers.getContract('ClaimCODE');
  const connectClaimContract = await claimContract.connect(await ethers.getSigner(deployer));

  // Set Merkle Root
  console.log('Setting merkle root', MERKLE_ROOT);
  await connectClaimContract.setMerkleRoot(MERKLE_ROOT);

  // only ClaimCODE contract can call delegate function from CODE contract
  const delegateRole = await codeContract.DELEGATE_ROLE();
  await connectContract.grantRole(delegateRole, dd.address);

  // Revoke Admin role from deployer
  const adminRole = await codeContract.DEFAULT_ADMIN_ROLE();
  await connectContract.revokeRole(adminRole, deployer);

  // Transfer Ownership
  await connectClaimContract.transferOwnership(TREASURY_ADDRESS);

  console.log('treasuryAmount:', (await codeContract.balanceOf(TREASURY_ADDRESS)).toString());
  console.log('airdropAmount:', (await codeContract.balanceOf(dd.address)).toString());

  console.log('ClaimCODE contract deployer:', deployer);
  console.log('ClaimCODE contract deployed to:', dd.address);
};

export default main;
main.dependencies = ['CODE'];
main.tags = ['ClaimCODE'];
