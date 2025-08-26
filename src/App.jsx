import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./auth/firebase";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signin from "./Signin";
import "./App.css";
import { Loader } from "@mantine/core";



function ProtectedRoute({ user, authChecked }) {
  if (!authChecked) return <p>Checking authentication...</p>;
  if (!user) return <Navigate to="/" />;
  return <Outlet />;
}

function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        setAuthChecked(true);
      },
      (error) => {
        setError(error);
      }
    );
    return unsubscribe;
  }, []);

  if (error) return <p>Error: {error.message}</p>;

  if (!authChecked)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader size={30} />
      </div>
    );

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/" element={<Signin user={user} />} />
        <Route
          element={<ProtectedRoute user={user} authChecked={authChecked} />}
        >
          <Route path="/dashboard" element={<Dashboard user={user} />} />
         

        </Route>
      </Routes>
    </div>
  );
}

export default App;
