import { Box, Button,Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from 'formik';
import { SchemaValidationPet, enumCategory, enumStatus } from "../../schemas/petSchema";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from "react";
import { addPet } from "../../services/pet.service";
import { useModalPetStore } from "../../stories/Pets.stories";

export function FormComponet() {
  const {isRegisterOpen, closeRegister} = useModalPetStore();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const formik = useFormik({
    initialValues:{
      name: '',
      description:'',
      category: '',
      status: '',
      bornIn: '',
      image: ''
    },
    validationSchema: SchemaValidationPet,
    onSubmit: async(values) => {
      try {
        const res = await addPet(values)
        console.log(res)
        if(res.ok){
          closeRegister();
          formik.resetForm()
        }
      } catch (error) {
        console.log(error)
      }
      console.log(values)
    }
  })
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue('image', file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  return (
    <Dialog open={isRegisterOpen} onClose={closeRegister} maxWidth="md" fullWidth>
    <DialogTitle>Cadastrar Pet</DialogTitle>
    <DialogContent dividers>
      <Box component="form" onSubmit={formik.handleSubmit}  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          name="name"
          id="petName"
          type="string"
          margin="dense"
          label="Nome"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="outlined"
          required
        />
        <TextField
          name="description"
          multiline
          id="description"
          type="string"
          margin="dense"
          label="Descrição"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          variant="outlined"
        />
        <FormControl fullWidth variant="outlined" error={formik.touched.category && Boolean(formik.errors.category)}>
          <InputLabel id="category">Categoria</InputLabel>
          <Select
            labelId="category"
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            label="Categoria"
          >
            {enumCategory.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.category && formik.errors.category && (
            <Box sx={{ color: 'error.main', mt: 1 }}>{formik.errors.category}</Box>
          )}
        </FormControl>
        <FormControl fullWidth variant="outlined" error={formik.touched.status && Boolean(formik.errors.status)}>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            label="Status"
          >
            {enumStatus.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.status && formik.errors.status && (
            <Box sx={{ color: 'error.main', mt: 1 }}>{formik.errors.status}</Box>
          )}
        </FormControl>
      
        <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DatePicker 
      label ="Data de nascimento"
      onChange={(value) => formik.setFieldValue('bornIn', value)} />
      </LocalizationProvider>


        <Button variant="contained" component="label">
          Upload Imagem
          <input type="file" hidden accept="image/*" onChange={handleImageChange} />
        </Button>
        {imagePreview && <img src={imagePreview} alt="Prévia da Imagem" style={{ marginTop: 16, maxHeight: 200 }} />}
      </Box>
    </DialogContent>
    <DialogActions>
      <Button onClick={closeRegister}>Cancelar</Button>
      <Button type="submit" onClick={()=>formik.handleSubmit()} variant="contained">Salvar</Button>
    </DialogActions>
  </Dialog>
)
}
