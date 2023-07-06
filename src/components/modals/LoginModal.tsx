"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../heading/Heading";
import Input from "../input/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Login Successful");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading title="Welcome back" subtitle="Login to your account" center />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        secondary
        light
        outline
        onClick={() => signIn("google")}
        title="Continue with Google"
        icon={FcGoogle}
      />
      <Button
        secondary
        light
        outline
        onClick={() => signIn("facebook")}
        title="Continue with Facebook"
        icon={FaFacebook}
      />
      <span>
        You dont have an account?{" "}
        <span
          onClick={registerModal.onOpen}
          className="cursor-pointer hover:underline"
        >
          Create an Account
        </span>
      </span>
    </div>
  );

  return (
    <div>
      <Modal
        body={bodyContent}
        footer={footerContent}
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel="Login"
        title="Login"
      />
    </div>
  );
};

export default LoginModal;
