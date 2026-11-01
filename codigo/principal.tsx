import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './estilos/globales.css';
import { Aplicacion } from './Aplicacion';

// Punto de entrada principal que monta la interfaz sobre el nodo #raiz
createRoot(document.getElementById('raiz')!).render(
  <StrictMode>
    <Aplicacion />
  </StrictMode>
);
