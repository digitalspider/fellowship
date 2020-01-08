import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title || 'Blog Title'}</h1>
      <p>{router.query.content || 'This is the blog post content.'}</p>
      {!router.query.title && <p>
        Please enter a query attribute "?title=X" in the URL
      </p>}
    </>
  );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
