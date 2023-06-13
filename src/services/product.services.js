import axios from "axios";

export const getProductByIdApi = async (id) => {
  try {
    const resp = await axios(
      `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
    );

    return resp;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
