import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = (props: any) => (
  <div style={layoutStyle}>exit
    <Header />
    {props.children}
  </div>
);

export default Layout;
