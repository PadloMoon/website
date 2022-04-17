import { ethers } from "ethers";
import { configVars } from "../config/config";
import { store } from "../slices/store";
import { setProcessing, setTransaction } from "../slices/transactionSlice";

export async function payWithMetamask(sender: string): Promise<string | null> {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  store.dispatch(setProcessing(true));

  const tx = {
    from: sender,
    to: configVars.devWallet,
    value: ethers.utils.parseEther(String(configVars.pokerRegistrationFee)),
    nonce: await provider.getTransactionCount(sender, "latest"),
    gasLimit: ethers.utils.hexlify(200000),
    gasPrice: ethers.utils.hexlify(await provider.getGasPrice()),
  };

  try {
    const transaction = await signer.sendTransaction(tx);
    store.dispatch(setTransaction(transaction.hash));
    store.dispatch(setProcessing(false));
    return transaction.hash;
  } catch (error) {
    console.log("error", error);
    store.dispatch(setProcessing(false));
    return null;
  }
}
