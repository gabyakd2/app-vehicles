import { CartDetail } from "../models/cartDetail";

export const getDetailCart = async (id: number): Promise<CartDetail> => {
  const res = await fetch(`https://challenge.egodesign.dev/api/models/${id}`);
  const data = await res.json();
  return data;
};
