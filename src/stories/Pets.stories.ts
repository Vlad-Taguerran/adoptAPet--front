// modalStore.ts
import create from 'zustand';
import { Pets } from '../types';
import { listPets } from '../services/pet.service';
import sseService from '../services/ServerClientEvent.service';

interface ModalState {
  isOpen: boolean;
  isRegisterOpen: boolean;
  pets: Pets[];
  pet: Pets;
  loading: boolean;
  error: string | null;
  openRegister: () => void;
  openModal: () => void;
  closeModal: () => void;
  closeRegister: () => void;
  fetchPets: () => void;
  selectPet: (pet: Pets) => void;
  startSse: () => void;
  stopSse: () => void;
}

export const useModalPetStore = create<ModalState>((set) => ({
  pets: [],
  pet:{
    id: '',
    name: '',
    age: '',
    description: '',
    category: '',
    status: '',
    bornIn: '',
    urlImage: ''
  },
  loading:false,
  error:null,
  isOpen: false,
  isRegisterOpen: false,
  openModal: () => set({ isOpen: true }),
  openRegister: () => set({isRegisterOpen: true}),
  closeModal: () => set({ isOpen: false }),
  closeRegister: () => set({isRegisterOpen: false}),
  fetchPets: async() =>{
    set({ loading: true, error: null });
    try {
      const data: Pets[] = await listPets();
      set({ pets: data, loading: false });
    } catch (error: unknown ) {
      set({ error: "Erro", loading: false });
    }
  },
  selectPet: (pet: Pets) => set({ pet, isOpen: true }),
  startSse: () => {
    sseService.startSse((data: Pets[]) => {
      set({ pets: data });
    }, () => {
      set({ error: 'Failed to receive updates.' });
    });
  },
  stopSse: () => {
    sseService.stopSse();
  }
}));