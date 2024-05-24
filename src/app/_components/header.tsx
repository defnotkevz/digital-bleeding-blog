import Link from "next/link";
import localFont from "next/font/local";

const logoFont = localFont({
  src: "../Array-Semibold.otf",
});

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/" className="hover:underline">
        <h1
          className={`text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 ${logoFont.className}`}
        >
          {"<<"}
        </h1>
      </Link>
    </section>
  );
};

export default Header;
