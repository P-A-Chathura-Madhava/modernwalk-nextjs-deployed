import { ProductType } from "@/hooks/types/ProductType";
import axios, { AxiosResponse } from "axios";

const URL1: string = "https://fakestoreapi.com/products/category/";
const URL2: string = "https://fakestoreapi.com/products/";

export const getMensProducts = async (): Promise<ProductType[]> => {
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}men's%20clothing`
  );
  return response.data;
};

export const getWomensProducts = async (): Promise<ProductType[]> => {
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}women's%20clothing`
  );
  return response.data;
};

export const getMixedProducts = async (): Promise<ProductType[]> => {
  const mens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}men's%20clothing?limit=2`
  );
  const mensData = mens.data;
  const womens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}women's%20clothing?limit=2`
  );
  const womensData: ProductType[] = womens.data;
  const data: ProductType[] = mensData.concat(womensData);
  return data;
};

export const getProductDetail = async (
  productId: string
): Promise<ProductType> => {
  const response: AxiosResponse<ProductType> = await axios.get<ProductType>(
    `${URL2}/${productId}`
  );
  return response.data;
};
