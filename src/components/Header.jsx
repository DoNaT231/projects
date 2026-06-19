const navItems = [
    { label: "Rólam", href: "#about" },
    { label: "Projektek", href: "#projects" },
    { label: "Készségek", href: "#skills" },
    { label: "Tapasztalat", href: "#experience" },
    { label: "Kapcsolat", href: "#contact" },
  ]
  
  function Header() {
    return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight text-white">
            Donát<span className="text-emerald-400">.</span>
          </a>
  
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
  
          <a
            href="#contact"
            className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
          >
            Keress meg
          </a>
        </div>
      </header>
    )
  }
  
  export default Header