import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-6 z-50 px-4 w-full flex justify-center">
      <div className="backdrop-blur-md bg-black/20 pill px-6 py-3 flex items-center gap-8 max-w-fit shadow-[1px_1px_2px_rgba(255,255,255,0.2)]">
        <Link to="/">
          <img src="/logo/vision-icon.svg" alt="Vision" className="w-6 h-6" />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Início
          </Link>
          <span className="text-muted-foreground/50">•</span>
          <a
            href="/#como-funciona"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Como funciona
          </a>
          <span className="text-muted-foreground/50">•</span>
          <a
            href="/#faq"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>
          <span className="text-muted-foreground/50">•</span>
          <Link
            to="/preços"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Preços
          </Link>
        </div>
      </div>
    </nav>
  );
}
