import * as fs from 'fs';
import { getUnnamedAccounts } from 'hardhat';

import MerkleGenerator from './merkleGenerator';

const TOKEN_DECIMALS = 18;

export async function getMerkleRoot(chainId: string): Promise<string> {
  let { airdrop } = JSON.parse(fs.readFileSync('data/out/airdrop_mainnet.json').toString());

  if (chainId === '1337') {
    // if chainId is for hardhat/localhost (like 1337), then return testing merkle root
    const unnamedAccounts = await getUnnamedAccounts();

    airdrop = {
      [unnamedAccounts[1]]: 100,
      [unnamedAccounts[2]]: 200,
      [unnamedAccounts[3]]: 300,
    };
  }

  const generator = new MerkleGenerator(TOKEN_DECIMALS, airdrop);
  const { merkleRoot } = await generator.process();

  return merkleRoot;
}
