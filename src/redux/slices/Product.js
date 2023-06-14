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
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,

  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
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
export const { setListProduct, setProductDetail } = ProductSlice.actions;

export default ProductSlice.reducer;
