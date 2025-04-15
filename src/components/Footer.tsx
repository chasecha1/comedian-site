import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-pink-500">
      <div className="Footer-items flex flex-col justify-center items-center">
        <div className="flex flex-row pt-8 pb-4">
          <a href="mailto:sakdiyahmaruf@gmail.com" className="Link--lightFooter dark:Link--darkFooter pr-2" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://sakdiyahmaruf.com" className="Link--lightFooter dark:Link--darkFooter px-2" target="_blank" rel="noopener noreferrer">Sakdiyah's Website</a>
          <a href="https://www.instagram.com/sakdiyah.maruf/?hl=en" className="Link--lightFooter dark:Link--darkFooter px-2" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="Copyright text-xs pb-8 text-dark-text-muted">
          © 2025 Chase Cha - Charlottesville, VA. Built with Next.js.
        </div>
      </div>

    </footer>
  )
}

export default Footer;