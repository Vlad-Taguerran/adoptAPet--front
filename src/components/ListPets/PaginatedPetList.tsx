import React, { useState } from 'react';
import { ListItemButton, ListItemAvatar, Avatar, ListItemText, ListItemIcon, Box, Pagination } from '@mui/material';
import { Pets } from '../../types';
import PetsIcon  from '@mui/icons-material/Pets';



interface Props {
  pets: Pets[];
  selectPet: (pet: Pets) => void;
  filterStatus?: string;
}

const PaginatedPetList: React.FC<Props> = ({ pets, selectPet,filterStatus }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredPets = filterStatus ? pets.filter(pet => pet.status === filterStatus) : pets;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box>
      {currentItems.map((pet) => (
        <ListItemButton key={pet.id} onClick={() => selectPet(pet)}>
          <ListItemAvatar>
            <Avatar alt={`Imagem do ${pet.name}`} src={pet.urlImage} />
          </ListItemAvatar>
          <ListItemText
            primary={`Nome: ${pet.name}`}
            secondary={
              <span>
                <strong>Status:</strong>{' '}
                <span style={{ color: pet.status === 'Disponível' ? 'green' : 'red' }}>
                  {pet.status}
                </span>
              </span>
            }
          />
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
        </ListItemButton>
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
};

export default PaginatedPetList;
