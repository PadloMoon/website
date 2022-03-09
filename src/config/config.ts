export const configVars = {
  mode: "regular",
  rpcNetwork_test: {
    rpcUrl: "https://cronos-testnet-3.crypto.org:8545/",
    chainId: 338,
    chainIdHex: "0x152",
    chainName: "Cronos Testnet",
    chainType: "mainnet",
    nativeCurrency: {
      name: "CRO",
      symbol: "CRO",
      decimals: 18,
    },
    blockExplorerUrl: "https://cronos.crypto.org/explorer/testnet3/",
  },
  rpcNetwork: {
    rpcUrl: "https://cronos.crowfi.app",
    chainId: 25,
    chainIdHex: "0x19",
    chainName: "Cronos Mainnet Beta",
    chainType: "mainnet",
    nativeCurrency: {
      name: "CRO",
      symbol: "CRO",
      decimals: 18,
    },
    blockExplorerUrl: "https://cronos.crypto.org/explorer/",
  },
  padlo: {
    address: "0x9D5aDE1E4dd84E3e0818542Bf37f24F22648d946",
  },
  devWallet: "0x73926C8859D454ED6b014f5741D0b052208d2710",
  actual_devWallet: "0xbad10b866C88Fd0752691e98AF3eCBa3E61CabF4",
  pokerRegistrationFee: 60,
};
