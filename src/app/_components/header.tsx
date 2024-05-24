import Link from "next/link";
import localFont from "next/font/local";

const logoFont = localFont({
  src: "../Array-Semibold.otf",
});

const Header = () => {
  return (
    <h2 className="text-2xl md:text-5xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <span className={`${logoFont.className}`}>Digital Bleeding.</span>
      </Link>
    </h2>
  );
};

export default Header;
