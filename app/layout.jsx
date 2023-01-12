"use client";
import { useRouter } from "next/navigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../components/ProtectedRoute";
import { store } from "../features/store";
import { ToastContainer } from "react-toastify";
import "./global.css";
import { useEffect } from "react";


export default function RootLayout({ children }) {
  const router = useRouter();
  const noAuthRequired = ["/", "/login", "/signup"];
  
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>
          {noAuthRequired.includes(router.pathname) ? (
            <div>{children}</div>
          ) : (
            <ProtectedRoute>
              <div>{children}</div>
            </ProtectedRoute>
          )}
        </Provider>
        <div>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
