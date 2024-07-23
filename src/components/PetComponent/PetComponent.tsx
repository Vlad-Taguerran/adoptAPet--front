import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import { useModalPetStore } from "../../stories/Pets.stories";
import {  VolunteerActivism } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { adoptPet } from "../../services/pet.service";

export function PetComponent() {
  const  { isOpen, closeModal, pet } = useModalPetStore()
  const formatDateToBrazilian = (dateString: string): string => {
    try {
      const date = parseISO(dateString); // Converte a string ISO para um objeto Date
      return format(date, 'dd/MM/yyyy', { locale: ptBR }); // Formata a data
    } catch (error) {
      console.error('Erro ao formatar a data:', error);
      return 'Data inválida';
    }
  };
  
  return(
    
      <Modal
        open={isOpen}
        onClose={closeModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
       <Box width={400} >
       <Card sx={{ maxWidth: 400, padding: "1rem" }} >
      <CardMedia
        sx={{ height: 140 }}
        image={pet.urlImage}
        title={`image  ${pet.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {`${pet.name}`}
        </Typography>
        <Typography variant="body2"  style={{ wordBreak: 'break-word' }} mt={2} color="text.secondary">
          <strong>Descrição:</strong><br/>
             {pet.description}
        </Typography>
        <Typography variant="body2" mt={2} color="text.secondary">
          <strong>Categoria: </strong>
             {pet.category} <span/> <strong>Nascido em: </strong> {formatDateToBrazilian(pet.bornIn)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium"  onClick={()=>{ adoptPet(pet.id)}} endIcon={<VolunteerActivism sx={{ color: pink[500]}}/>}>Adotar</Button>
      </CardActions>
    </Card>
       </Box>
      </Modal>
    
  )
}
