import Layout from '../components/MyLayout';
import Link from 'next/link';

interface IPost {
  post: Post;
}

interface Post {
  id: string;
  title: string;
}

function getPosts(): Post[] {
  const posts: Post[] = [];
  posts.push(
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  );
  return posts;
}

const PostLink = ({ post }: IPost): JSX.Element => (
  <>
    <li key={post.id}>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </li>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post}/>
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
}
