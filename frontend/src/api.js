import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", 
});

export const getRecipes = () => API.get("/get");
export const saveRecipe = (recipe) => API.post("/save", { recipe });
export const updateRecipe = (id, recipe) => API.put(`/update/${id}`, { recipe });
export const deleteRecipe = (id) => API.delete(`/delete/${id}`);
