import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { Header } from "./components"
import { Box } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
      <Box component="main" sx={{mt:"5rem"}}>
          <RouterProvider router={router}/>
      </Box>
  </React.StrictMode>,
)
