import { signOut } from "firebase/auth"
import { SignOut } from "phosphor-react"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { auth } from "../services/firebaseConnection"

export const Header: React.FunctionComponent = () => {

  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    .then(() => {
      navigate("/signin")
    })
    .catch(() => {
      toast.error("Erro ao sair!");
    })
  }

  return (
    <header className="w-full max-w-[720px] mt-4 mb-7 px-4">
      <nav className="w-full bg-white h-12 flex items-center rounded">
        <button onClick={handleLogout} className="bg-transparent mr-6 ml-2">
          <SignOut size={28} color="#db2629" />
        </button>

        <Link to="/admin" className="mr-4 text-zinc-700 font-medium hover:text-zinc-500 transition-colors">
          Links
        </Link>

        <Link to="/admin/social" className="mr-4 text-zinc-700 font-medium hover:text-zinc-500 transition-colors">
          Redes Sociais
        </Link>
      </nav>
    </header>
  )
}