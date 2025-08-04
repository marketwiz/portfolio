import Link from "next/link";

export default function NavBar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#articles", label: "Articles" },
    { href: "#publications", label: "Publications" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="bg-navy text-white fixed inset-x-0 top-0 z-50 shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#home">
          <span className="text-2xl font-semibold tracking-wide uppercase">
            Pej Hamidi
          </span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
