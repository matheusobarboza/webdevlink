import { signInWithEmailAndPassword } from "firebase/auth";
import { CircleNotch } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Logo } from "../components/Logo";
import { auth } from "../services/firebaseConnection";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }

    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false);
        toast.success("Seja Bem Vindo!");
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Erro ao fazer login!");
        console.log("Error");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Logo />

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-3 w-full max-w-xs sm:max-w-[430px] mt-5 mb-5"
      >
        <input
          className="border-none h-9 mb-2 rounded px-2 outline-none bg-gray-600 text-white"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border-none h-9 mb-2 rounded px-2 outline-none bg-gray-600 text-white"
          type="password"
          placeholder="Senha"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 px-2 h-9 rounded font-semibold flex items-center justify-center text-white hover:bg-blue-500"
          type="submit"
        >
          {isLoading ? (
            <CircleNotch size={30} color="white" className="animate-spin" />
          ) : (
            <span>Acessar</span>
          )}
        </button>
      </form>
    </div>
  );
};
