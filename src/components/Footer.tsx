import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-light-gray dark:bg-deep-navy">
      <div className="Footer-items flex flex-col justify-center items-center">
        <div className="flex flex-row pt-8 pb-4">
          <a href="mailto:chasecha312@gmail.com" className="Link--lightFooter dark:Link--darkFooter pr-2" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/chase-cha/" className="Link--lightFooter dark:Link--darkFooter px-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/chasecha1" className="Link--lightFooter dark:Link--darkFooter px-2" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="Copyright text-xs pb-8 text-light-text-muted dark:text-dark-text-muted">
          © 2025 Chase Cha - Charlottesville, VA. Built with Next.js.
        </div>
      </div>

    </footer>
  )
}

export default Footer;