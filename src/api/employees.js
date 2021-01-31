import { APIConfig } from "../config/APIConfig";

export const fetchEmployees = async () => {
  const response = await fetch(`${APIConfig.baseUrl}/employees`);
  return response.json();
};
