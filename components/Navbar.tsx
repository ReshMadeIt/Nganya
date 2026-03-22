// components/Navbar.tsx
import Link from 'next/link';

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

const Navbar = () => {
  return (
  
  
  
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/"
      className="mr-4 block cursor-pointer py-1.5 text-red-600 font-bold text-2xl">
        Nganya254
      </Link>
      
     
    </nav>
  );
};

export default Navbar;

