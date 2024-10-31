import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Contacts from "./pages/Contacts";
import Search from "./pages/Search";
import GlobalStyles from './styles/GlobalStyles';
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Users from './pages/Users'
import Account from "./pages/Account";
import Labels from "./pages/Labels";
import Trash from "./pages/Trash";
import Settings from "./pages/Settings";
import { DarkModeProvider } from "./context/DarkModeContext";
// import EditContact from "./features/contacts/EditContact";
// import CreateContactForm from "./features/contacts/CreateContactForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})

function App() {
  return (
    <DarkModeProvider> 
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <GlobalStyles />
        <BrowserRouter> 
          <Routes>
            <Route element={
              <ProtectedRoute>
                <AppLayout />
                </ProtectedRoute>}
            >
              <Route index element={<Navigate replace to="contacts" />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="search" element={<Search />} />
              <Route path="users" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="trash" element={<Trash />} />
              <Route path="labels" element={<Labels />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
