"use client";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../components/ProtectedRoute";
import { store } from "../features/store";
import { ToastContainer } from "react-toastify";


export default function RootLayout({ children }) {
  const router = useRouter();
  const noAuthRequired = ["/", "/login", "/signup"];
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>
          {noAuthRequired.includes(router.pathname) ? (
            { children }
          ) : (
            <ProtectedRoute>{children}</ProtectedRoute>
          )}
        </Provider>
        <ToastContainer />
      </body>
    </html>
  );
}
