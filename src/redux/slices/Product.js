import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductByIdApi } from "../../services/product.services";

export const getProductByIdThunk = createAsyncThunk(
  "ProductSlice/setProductDetail",
  async (id) => {
    const resp = await getProductByIdApi(id);

    return resp;
  }
);

const initialState = {
  listProduct: [],
  productDetail: {},
  isLoading: false,
  cart: [],
  countProduct: 0,
  count: 1
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,

  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    updateCountProduct: (state, action) => {
      // console.log(action)
      state.countProduct = action.payload;
    },
    updateCount: (state, action) => {
      // console.log(action)
      state.count = action.payload;
    },
    updateIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProductByIdThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByIdThunk.fulfilled, (state, action) => {
      state.productDetail = action.payload.data.content;
      state.isLoading = false;
    });
  },
});
export const { setListProduct, updateCountProduct, updateIsLogin, updateCart, updateCount } =
  ProductSlice.actions;

export default ProductSlice.reducer;
