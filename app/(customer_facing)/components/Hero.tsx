import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1687436874119-6e587ae3dae5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Hero() {
  return (
    <section className="w-full px-4 py-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-stretch">
        {/* Left media */}
        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:w-[60%]">
          <Image
            src={HERO_IMAGE}
            alt="Rozwojowy wyjazd"
            fill
            priority
            className="object-cover"
            sizes="(max-width:768px) 100vw, 60vw"
          />
        </div>
        {/* Right content */}
        <div className="flex w-full flex-col items-center justify-center md:w-[40%]">
          <h1 className="font-rox-reg text-foreground1 text-center text-3xl whitespace-pre-line md:text-4xl lg:my-20 lg:text-5xl">
            {`WYJAZDY\nI WYDARZENIA\nROZWOJOWE -\nWSZYSTKO\nW JEDNYM\nMIEJSCU!`}
          </h1>
          <div className="mt-8 mb-14">
            <button className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary px-20 py-4 text-lg font-semibold transition-colors duration-200">
              SZUKAJ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
