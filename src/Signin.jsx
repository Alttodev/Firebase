import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./auth/firebase";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

function Signin() {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User:", userCredential.user);
      toast.success("Signin successful!");
      navigate("/login");
    } catch (error) {
      console.log("Firebase error:", error);
      const errorMsg = error?.code || " failed. Please try again.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="flex gap-6 flex-col items-center justify-center min-h-screen">
      <div className="bg-sky-200 p-8 rounded-lg shadow-md w-full max-w-96 justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextInput
                {...field}
                label="Email"
                placeholder="you@example.com"
                type="email"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <PasswordInput
                {...field}
                label="Password"
                placeholder="password"
              />
            )}
          />

          <Button variant="filled" className="mt-4" type="submit">
            Signin
          </Button>
        </form>
        <div>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
