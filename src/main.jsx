import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route.jsx";
import "./global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeContextProvider from "./providers/theme-context-provider.jsx";
import LocaleContextProvider from "./providers/locale-context-provider.jsx";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ThemeContextProvider>
                <LocaleContextProvider>
                    <AppRoute />
                </LocaleContextProvider>
            </ThemeContextProvider>
        </QueryClientProvider>
    </BrowserRouter>
);
