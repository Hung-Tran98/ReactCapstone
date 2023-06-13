import { createSlice } from "@reduxjs/toolkit";
import { getProductByIdApi } from "../../services/product.services";

const initialState = {
  listProduct: [],
  productDetail: {},
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});
export const { setListProduct, setProductDetail } = ProductSlice.actions;

export default ProductSlice.reducer;

export const getProductByIdAction = (id) => {
  return async (dispatch) => {
    const resp = await getProductByIdApi(id);

    const action = setProductDetail(resp.data.content);
    dispatch(action);
  };
};
