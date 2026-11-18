import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SportScorings from './SportScorings';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SportScorings />
    </StrictMode>,
);
