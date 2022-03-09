import { ethers } from "ethers";
import { configVars } from "../config/config";

export async function payWithMetamask(sender: string) {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  const signer = provider.getSigner();
  console.log("balance", signer.getBalance());

  const tx = {
    from: sender,
    to: configVars.devWallet,
    value: ethers.utils.parseEther(String(configVars.pokerRegistrationFee)),
    nonce: await provider.getTransactionCount(sender, "latest"),
    gasLimit: ethers.utils.hexlify(300000),
    gasPrice: ethers.utils.hexlify(await provider.getGasPrice()),
  };

  signer.sendTransaction(tx).then((transaction) => {
    console.dir(transaction);
    console.log("Send finished: ", transaction);
  });
}
