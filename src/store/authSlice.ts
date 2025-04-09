import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "../utilities/api";
import { LoginPayload } from "../Components/LoginForm";

interface AuthState {
  token: string | null;
  username: string;
  loading: boolean;
  error: string | null;
}

const ininitialState: AuthState = {
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: ininitialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      state.token = null;
      state.username = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        
        state.token = action.payload.token;
        state.username = action.payload.username;
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("username", action.payload.username);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const loginThunk = createAsyncThunk(
  "/api/login",
  async (payload: LoginPayload,{rejectWithValue}) => {
    try {
      const res = await loginUserAPI(payload);
      return res;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // Optional: extract server error message
        const message = error.response?.data?.message || error.message;
        return rejectWithValue(message);
      }
  }
);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
