import Link from 'next/link';

const Footer = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/privacy-policy">
        Policy
      </Link>
    </nav>
  );
};

export default Footer;