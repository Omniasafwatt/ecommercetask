import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import'@fortawesome/fontawesome-free/js/all';
import { QueryClient,QueryClientProvider } from 'react-query';
import{ReactQueryDevtools}from'react-query/devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));

let  query = new QueryClient()
root.render(
    <QueryClientProvider client={query}>
            <App />
            <ReactQueryDevtools/>
    </QueryClientProvider>
);


