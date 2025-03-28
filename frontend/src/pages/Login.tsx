import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: (data) => {
      console.log("Login successful", data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    },
    onError: (error: any) => {
      setErrorMsg(error.message);
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[320px] flex flex-col gap-6"
      >
        <div className="h-[32px] flex items-center justify-center">
          {errorMsg && <p className="text-red-500 text-2xl">{errorMsg}</p>}
        </div>

        <h2 className="text-center text-xl font-bold">Welcome back!</h2>

        <div className="flex flex-col gap-1">
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password?.message}
          />
        </div>

        <div className="h-[50px] flex items-center">
          <Button text="Login" />
        </div>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
