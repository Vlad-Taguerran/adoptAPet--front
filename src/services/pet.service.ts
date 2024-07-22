import { PetFormValues, Pets } from "../types";


const url =  "http://localhost:8080/api/pet";

export const listPets = async ()=>{
 const  response = await fetch(url,{
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

const response = await fetch(url,{
  method:"post",
  mode: "cors",
  body: formData
})
console.log("TESTE")
const data = await response.json();
return data
}