"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./form-field";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
type Props = {
  type: "sign-in" | "sign-up";
};

const authFormSchema = (type: string) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
};
const AuthForm = ({ type }: Props) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-in") {
        toast.success("Signed in successfully");
        router.push("/");
        console.log("data", data);
      } else if (type === "sign-up") {
        toast.success("Account created successfully");
        router.push("/sign-in");
      }
    } catch (error) {
      console.error(error);
      toast.error("There was an error: ");
    }
  };
  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10 items-center">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">DynoPreps</h2>
        </div>
        <h3>Practice job interview with AI</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mt-4 form space-y-8"
          >
            {!isSignIn && (
              <FormField
                name="name"
                control={form.control}
                label="Name"
                type="text"
                placeholder="DynoPreps"
              />
            )}
            <FormField
              name="email"
              control={form.control}
              label="Email"
              type="email"
              placeholder="Email"
            />
            <FormField
              name="password"
              control={form.control}
              label="Password"
              type="password"
              placeholder="Password"
            />
            <Button className="btn" type="submit">
              {isSignIn ? "Sign in" : "Create an Account"}
            </Button>
            <p className="text-center">
              {isSignIn ? "No account yet" : "Already have an account?"}
              <Link
                href={isSignIn ? "/sign-up" : "sign-in"}
                className="text-user-primary ml-1 font-bold"
              >
                {isSignIn ? "Sign up" : "Sign in"}
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
