import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./auth/firebase";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

function Login() {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
  try {
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
    navigate("/dashboard");

  } catch (error) {
    const errorMsg = error?.code || "Login failed. Please try again.";
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
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
