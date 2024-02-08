import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './route.jsx';
import './global.css';

// provider
import ThemeContextProvider from './components/provider/theme-provider.jsx';
import LocaleContextProvider from './components/provider/locale-provider.jsx';
import AuthProvider from './components/provider/auth-provider.jsx';

// react query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeContextProvider>
                    <LocaleContextProvider>
                        <AppRoute />
                    </LocaleContextProvider>
                </ThemeContextProvider>
            </QueryClientProvider>
        </AuthProvider>
    </BrowserRouter>,
);
