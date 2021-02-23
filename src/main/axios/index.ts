import axios from "axios";

// axios args/params here?

export async function axiosGet(url: string) {
  return await axios.get(url);
}
