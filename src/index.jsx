import { createRoot } from 'react-dom/client';
import App from './App';
import createGoogleTag from './utils/createGoogleTag';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');

createGoogleTag();
