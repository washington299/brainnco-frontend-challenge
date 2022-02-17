import { api } from "./config";

export const QUERY = {
	getLotteries: () => api.get("/loterias"),
};
