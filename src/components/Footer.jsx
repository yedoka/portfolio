import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-36 bg-slate-950 justify-center items-center">
      <div className="flex gap-4 mb-4">
        <a href="https://github.com/yedoka">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akedil-aidyn-69b54b2a0/">
          <FaLinkedin />
        </a>
        <a href="mailto:akedilbekbolatov@gmail.com">
          <IoMail />
        </a>
      </div>
      <p>©2024 Akedil Aidyn</p>
  </footer>
  )
}

export default Footer