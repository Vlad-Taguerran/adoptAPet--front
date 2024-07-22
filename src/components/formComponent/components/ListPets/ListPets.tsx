import { Box, Button, List,Typography } from "@mui/material";
import { PetComponent } from "../PetComponent";
import { useModalPetStore } from "../../../../stories/Pets.stories";
import { useEffect, useState } from "react";
import { FormComponet } from "../FormComponet";
import PaginatedPetList from "./PaginatedPetList";
export function ListPets() {

  const { loading, fetchPets , pets, selectPet, openRegister,startSse,stopSse} = useModalPetStore();
  useEffect(() => {
    fetchPets();
    startSse()
    return () => {
      stopSse();
    };
  }, [fetchPets, startSse, stopSse]);
  const [filter, setFilter] = useState("Disponível")
  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
    <FormComponet/>
    <PetComponent/>
    <Box sx={ {display: 'flex',
        justifyContent:'center'}}>
    <List  sx={{width: {
          xs: '100%', 
          sm: '80%',  
          md: 600,    
        },
       
       }}>
        
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
            Pets
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant={"contained" }
              color="success"
              onClick={() => setFilter("Disponível")}
            >
              Disponíveis
            </Button>
            <Button
              variant={"contained" }
              color="warning"
              onClick={() => setFilter("Adotado")}
            >
              Adotados
            </Button>
            <Button
              variant={ "contained"}
              onClick={() =>{ openRegister()}}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      
        <PaginatedPetList pets={pets} selectPet={selectPet} filterStatus={filter} />

      </List>
    </Box>
    </>
  );
}
