// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;

