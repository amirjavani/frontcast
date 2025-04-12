import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "../utilities/api";
import { LoginPayload } from "../Components/LoginForm";

export type Order = {
  id: number;
  title: string;
  price: string;
};

interface OrderState {
  orders: Array<Order>;
  loading: boolean;
  error: string | null;
}

const ininitialState: OrderState = {
  orders:  [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "authSlice",
  initialState: ininitialState,
  reducers: {
    addNewOrder: (state, action) => {
      const isExist = state.orders.some((item) => item.id == action.payload.id);
      if (!isExist) {
        state.orders.push(action.payload);
      }
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id != action.payload.id
      );
    },
  },
  //   extraReducers(builder) {
  //     builder
  //       .addCase(loginThunk.fulfilled, (state, action) => {
  //         state.token = action.payload.token;
  //         state.username = action.payload.username;
  //         state.loading = false;

  //       })
  //       .addCase(loginThunk.rejected, (state, action) => {
  //         state.loading = false;
  //         state.error = action.payload as string;
  //       })
  //       .addCase(loginThunk.pending, (state) => {
  //         state.loading = true;
  //         state.error = null;
  //       });
  //   },
});

// export const loginThunk = createAsyncThunk(
//   "/api/login",
//   async (payload: LoginPayload, { rejectWithValue }) => {
//     try {
//       const res = await loginUserAPI(payload);
//       return res;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       // Optional: extract server error message
//       const message = error.response?.data?.message || error.message;
//       return rejectWithValue(message);
//     }
//   }
// );

export const { addNewOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
