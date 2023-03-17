import axios from "axios";

export const shortenUrl = async (url: string) => {
  const { data } = await axios.post("http://localhost:3000/url", { url });
  return data;
};
