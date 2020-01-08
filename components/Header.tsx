import Link from 'next/link';

const linkStyle = {
  marginLeft: 15,
  fontSize: 20,
};
const homeStyle = {
  fontSize: 30,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={homeStyle}>Fellowship Baptist Church</a>
    </Link>
    <Link href="/posts">
      <a style={linkStyle}>News</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/calendar?title=Calendar">
      <a style={linkStyle}>Calendar</a>
    </Link>
    <Link href="/sermon?title=Sermon">
      <a style={linkStyle}>Sermon</a>
    </Link>
    <Link href="/resources">
      <a style={linkStyle}>Resources</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
