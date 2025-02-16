

import {FaGithub, FaLinkedinIn } from "react-icons/fa"
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2"

export function Contact() {

  const contacts = [
    {
      name: "Github",
      description: "Veja meus projetos",
      link: "https://github.com/AlexSAssuncao",
      icon: <FaGithub className="h-10 w-10" />,
    },
    {
      name:"Linkedin",
      description: "Siga-me",
      link:"none",
      icon: <FaLinkedinIn className="h-10 w-10"/>
    },
    {
      name: "Email",
      description: "alexsaweb@gmail.com",
      link: "mailto:alexsaweb@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "Whatsapp",
      description: "Mande uma mensagem",
      link: "https://wa.me/5541987986571",
      icon: <HiOutlinePhone className="h-10 w-10" />,
    },
  ]

  return (
    <section id="contact" className="bg-blue-900 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por WhatsApp, com certeza irei poder te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">

            <div className="w-full grid grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <div
              key={`contact-${index}`}
              className="flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
              >
              {contact.icon}
              <div>
              <p className="font-headline font-semibold">{contact.name}</p>
              <a
              href={contact.link}
              target="_blank"
              className="text-gray-300 underline underline-offset-2"
              >
              {contact.description}
              </a>
              </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}