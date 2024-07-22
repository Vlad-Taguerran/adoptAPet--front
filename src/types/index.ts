export interface Pets {
  id:string;
  name:string;
  age:string;
  description:string;
  category:string;
  status:string;
  bornIn:string;
  urlImage:string;
}
export interface PetFormValues {
  name: string;
  description: string;
  category: string;
  status: string;
  bornIn: string;
  image: File | string; // Permite a imagem como um arquivo ou string
}