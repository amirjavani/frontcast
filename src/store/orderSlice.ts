import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrdersAPI } from "../utilities/api";

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
  orders: (JSON.parse(localStorage.getItem("orders")!) as Array<Order>) || [],
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
        localStorage.setItem("orders", JSON.stringify(state.orders));
      }
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter((order) => order.id != action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitingOrders.fulfilled, (state) => {
        state.orders = [];
        state.loading = false;
      })
      .addCase(submitingOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(submitingOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const submitingOrders = createAsyncThunk(
  "/api/orders",
  async (payload: Array<Order>, { rejectWithValue }) => {
    try {
      const res = await createOrdersAPI(payload);
      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Optional: extract server error message
      const message = error.response?.data?.message || error.message;
      return rejectWithValue(message);
    }
  }
);

export const { addNewOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
