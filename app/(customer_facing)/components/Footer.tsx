import Image from "next/image";
import Link from "next/link";
import { navData } from "../../data/navData";
import { navLinks } from "../../data/navLinks";

const Footer = () => {
  return (
    <footer className="text-foreground1 border-foreground2/20 mx-10 mt-16 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Brand */}
          <Link href={navData.logo.href} aria-label="Selsfera">
            <Image
              src="/logoSF.png"
              alt="Selsfera logo"
              width={220}
              height={60}
              className="h-auto w-[180px] md:w-[220px]"
            />
          </Link>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.85rem] font-medium tracking-widest uppercase">
              {navLinks.map(link => (
                <li key={link.id}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground2 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-foreground2 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Copy and legal */}
          <div className="text-foreground2/80 mt-2 flex flex-col items-center gap-2 text-sm">
            <p>
              © {new Date().getFullYear()} Selsfera. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-foreground1"
              >
                Polityka prywatności
              </Link>
              <Link href="/regulamin" className="hover:text-foreground1">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
