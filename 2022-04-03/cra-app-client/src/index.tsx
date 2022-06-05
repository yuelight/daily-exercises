import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

createRoot(document.getElementById('root') as HTMLDivElement).render(<App />);

serviceWorkerRegistration.register();
