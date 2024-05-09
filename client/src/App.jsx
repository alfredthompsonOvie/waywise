import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from 'react-hot-toast';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./pages/AppLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import CustomersList from "./components/CustomersList";
import Customer from "./components/Customer";

import CustomerForm from "./components/CustomerForm";
import { AuthProvider } from "./contexts/AuthContext";
import GlobalStyles from "./styles/globalStyles";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			// staleTime: 60 * 1000,
		},
	},
});

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="customers" />} />
            <Route path="customers" element={<CustomersList />} />
            <Route path="customers/:id" element={<Customer />} />
            <Route path="form" element={<CustomerForm />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
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
							maxWidth: "450px",
							padding: "16px 24px",
						},
					}}
				/>
      </QueryClientProvider>
    </AuthProvider>

  );
}

export default App;
