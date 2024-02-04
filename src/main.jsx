import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route.jsx";
import "./global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <AppRoute />
        </QueryClientProvider>
    </BrowserRouter>
);
