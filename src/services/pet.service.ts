import { PetFormValues, Pets } from "../types";
import { API_BASE_URL } from "../config/api.config";
import axios from "axios";

export const listPets = async ()=>{
 const  response = await fetch(API_BASE_URL,{
  mode:"cors"
 });
 const data: Pets[] = await response.json();
 
 return data;
}
export const addPet = async (petData: PetFormValues)=>{
  const formData = new FormData();
  Object.entries(petData).forEach(([key, value]) => {
    formData.append(key, value);
  });

const response = await fetch(API_BASE_URL,{
  method:"post",
  mode: "cors",
  body: formData
})
const data: Response = await response;
return data
}

export const adoptPet = async (id: string)=>{
  try {
    await axios.patch(`${API_BASE_URL}/${id}`,{
    })
  } catch (error) {
    console.log(error) 
  }
 
}