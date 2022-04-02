import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionState } from "./interfaces";
import { RootState } from "./store";

const initialState: TransactionState = {
  processing: false,
  transaction: null,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.processing = action.payload;
    },
    setTransaction: (state, action: PayloadAction<string>) => {
      state.transaction = action.payload;
    },
  },
});

export const { setProcessing, setTransaction } = transactionSlice.actions;

export const selectRefreshing = (state: RootState) =>
  state.transaction.processing;
export const selectTransaction = (state: RootState) =>
  state.transaction.transaction;

export default transactionSlice.reducer;
