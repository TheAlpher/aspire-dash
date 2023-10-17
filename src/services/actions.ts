import { baseInstance } from "./index";

export const getUserDetails = () => {
  return baseInstance.get("/details");
};
