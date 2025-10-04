import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary min-h-screen">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
