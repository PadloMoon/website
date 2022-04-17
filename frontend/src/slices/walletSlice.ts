import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  WalletState,
  defaultRefreshing,
  defaultWallet,
  defaultWalletWeb3Modal,
  defaultQueryResults,
  IWallet,
  IWalletWeb3Modal,
  IQueryResults,
  IRefreshing,
} from "./interfaces";

const initialState: WalletState = {
  refreshing: defaultRefreshing,
  wallet: defaultWallet,
  walletWeb3Modal: defaultWalletWeb3Modal,
  queryResults: defaultQueryResults,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setRefreshing: (state, action: PayloadAction<IRefreshing>) => {
      state.refreshing = action.payload;
    },
    updateWallet: (state, action: PayloadAction<IWallet>) => {
      state.wallet = action.payload;
    },
    updateWalletWeb3Modal: (state, action: PayloadAction<IWalletWeb3Modal>) => {
      state.walletWeb3Modal = action.payload;
    },
    updateQueryResults: (state, action: PayloadAction<IQueryResults>) => {
      state.queryResults = action.payload;
    },
  },
});

export const {
  setRefreshing,
  updateWallet,
  updateQueryResults,
  updateWalletWeb3Modal,
} = walletSlice.actions;

export const selectWallet = (state: RootState) => state.wallet.wallet;
export const selectRefreshing = (state: RootState) => state.wallet.refreshing;
export const selectWalletWeb3Modal = (state: RootState) =>
  state.wallet.walletWeb3Modal;
export const selectQueryResults = (state: RootState) =>
  state.wallet.queryResults;

export default walletSlice.reducer;
