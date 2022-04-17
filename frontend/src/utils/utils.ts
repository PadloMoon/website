import { ethers } from "ethers";

import * as config from "../config/config";
import PadloJson from "../config/contracts/padloContract.json";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const hexToInt = (s: string) => {
  const bn = ethers.BigNumber.from(s);
  return parseInt(bn.toString());
};

export const reloadApp = () => {
  window.location.reload();
};

// Get the last block number
export const getLastBlockNumber = async (ethersProvider: any): Promise<any> => {
  return ethersProvider.getBlockNumber();
};

// Get the CRO balance of address
export const getCroBalance = async (
  serverWeb3Provider: ethers.providers.JsonRpcProvider | null,
  address: string
): Promise<number> => {
  const balance = await serverWeb3Provider?.getBalance(address);
  // Balance is rounded at 2 decimals instead of 18, to simplify the UI
  return (
    ethers.BigNumber.from(balance)
      .div(ethers.BigNumber.from("10000000000000000"))
      .toNumber() / 100
  );
};

// Get the CTOK token balance of address
// The CTOK is a ERC20 smart contract, its address is retrieved from
// the config/config.ts file
// and the ABI from config/contracts/MyERC20MintableByAnyone.json
export const getPadloBalance = async (
  serverWeb3Provider: ethers.providers.JsonRpcProvider | null,
  address: string
): Promise<number> => {
  // Create ethers.Contract object using the smart contract's ABI
  const contractAbi = PadloJson.abi;
  if (!serverWeb3Provider) {
    console.log("ServiceProvider not given");
    return 0;
  }
  const readContractInstance = new ethers.Contract(
    config.configVars.padlo.address,
    contractAbi,
    serverWeb3Provider
  );
  const contractResponse = await readContractInstance["balanceOf"](address);
  // Balance is rounded at 2 decimals instead of 18, to simplify UI
  return (
    ethers.BigNumber.from(contractResponse)
      .div(ethers.BigNumber.from("10000000000"))
      .toNumber() / 100
  );
};

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
