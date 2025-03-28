import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const registerSchema = z
  .object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      registerUser(email, password),
    onSuccess: () => {
      console.log("Registration successful");
      navigate("/login");
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

        <h2 className="text-center text-xl font-bold">Create Account</h2>

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
          <InputField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
          />
        </div>

        <div className="h-[50px] flex items-center">
          <Button text="Register" />
        </div>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
