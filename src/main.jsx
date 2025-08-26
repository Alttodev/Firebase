import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import { Toaster } from "sonner";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MyContextProvider } from "./context/MyContextProvider.jsx";



const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <MyContextProvider>
          <BrowserRouter>
            <Toaster position="top-center" />
            <App />
            </BrowserRouter>
            </MyContextProvider>
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
