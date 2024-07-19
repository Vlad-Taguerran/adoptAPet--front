import * as yup from 'yup'

export const enumCategory = [
  'Cachorro',
  'Gato',
  'Passaro',
  'Peixe',
  'Reptil',
  'Mamifero',
  'Anfibio',
  'Invertebrado',
];
export const enumStatus =[
  'Disponivel',
  'Adotado'
];

export const SchemaValidationPet = yup.object().shape({
  name: yup.string().min(3).required(),
  description: yup.string(),
  category: yup.string().oneOf(enumCategory,"Categoria invalida").required("Selecione uma categoria"),
  status: yup.string().oneOf(enumStatus).default('Disponivel'),
  bornIn: yup.date(),
  image: yup.mixed()
})