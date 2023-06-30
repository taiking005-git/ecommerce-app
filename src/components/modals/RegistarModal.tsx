"use client";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../heading/Heading";
import Input from "../input/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/hooks/useLoginModal";

const RegistarModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again");
      })
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading
        title="Welcome to ecommerce"
        subtitle="Create an account!"
        center
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
        onClick={() => {}}
        title="Continue with Google"
        icon={FcGoogle}
      />
      <Button
        secondary
        light
        outline
        onClick={() => {}}
        title="Continue with Facebook"
        icon={FaFacebook}
      />
      <span>
        Already have an account?{" "}
        <span
          onClick={loginModal.onOpen}
          className="cursor-pointer hover:underline"
        >
          Log In
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
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel="Continue"
        title="Register"
      />
    </div>
  );
};

export default RegistarModal;
