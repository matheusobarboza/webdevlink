import { GithubLogo, Icon, InstagramLogo, User, WhatsappLogo } from "phosphor-react";
import React from "react";

interface LinkProps {
  title: string;
  icon: Icon;
  link: string;
}

const links = [
  { title: "Portfólio", icon: User, link: "https://www.matheusobarboza.com"},
  { title: "Github", icon: GithubLogo, link: "https://github.com/matheusobarboza" },
  { title: "Whatsapp", icon: WhatsappLogo, link: "https://wa.me/5582999949683" },
  { title: "Instagram", icon: InstagramLogo, link: "https://www.instagram.com/matheusobarboza/" }
];

export const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center py-10">
      <h1 className="text-white text-4xl sm:text-5xl font-semibold mb-4 pt-24">
        Matheus Barboza
      </h1>
      <span className="text-gray-100 text-lg mb-6">Veja meus links 👇</span>

      <main className="max-w-[600px] w-11/12 text-center">
        {links.map(({ title, link }: LinkProps) => {
          return (
            <section className="bg-white w-full mb-5 py-2 select-none rounded hover:scale-105 transform transition duration-500 cursor-pointer">
              <a href={link} target="blank">
                <span className="text-lg leading-tight text-gray-600 font-semibold">
                  {title}
                </span>
              </a>
            </section>
          );
        })}
        <div className="flex items-center justify-center gap-3 mt-10">
          {links.map(({ icon: Icon, link }: LinkProps) => {
            return <a href={link} target="blank" className="cursor-pointer hover:scale-110 transform transition duration-300"><Icon size={30} color="white" /></a>;
          })}
        </div>
      </main>
    </div>
  );
};
