import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./auth/firebase";
import { Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/Product/ProductSlice";

function Dashboard() {
  const navigate = useNavigate();

  const Logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  const count = useSelector((state) => state.product.value);
  const dispatch = useDispatch()



  return (
    <section>
      <div className="flex gap-6 flex-col items-center justify-center min-h-screen ">
        <h1>Dashboard</h1>
        <div className="flex flex-row gap-4">
          <Button variant="filled" onClick={()=>dispatch(increment())}>Add</Button>
          <p>{count}</p>
           <Button variant="filled" onClick={()=>dispatch(decrement())}>Minus</Button>
        </div>
        <Button variant="filled" onClick={Logout}>Logout</Button>
      </div>
    </section>
  );
}

export default Dashboard;
