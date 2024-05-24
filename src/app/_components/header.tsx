import Link from "next/link";
import localFont from "next/font/local";

const logoFont = localFont({
  src: "../Array-Semibold.otf",
});

const Header = () => {
  return (
    <section
      className={`${logoFont.className} flex-col md:flex-row flex items-center md:justify-between ml-10 mt-8 mb-24`}
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline">
          <span className={`${logoFont.className}`}>Digital Bleeding.</span>
        </Link>
      </h1>
    </section>
    // <h2 className="text-2xl md:text-5xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/" className="hover:underline">
    //     <span className={`${logoFont.className}`}>Digital Bleeding.</span>
    //   </Link>
    // </h2>
  );
};

export default Header;
