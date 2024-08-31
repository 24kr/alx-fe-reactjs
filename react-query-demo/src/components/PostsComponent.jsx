import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Data is considered fresh for 5 seconds
    cacheTime: 10000, // Data remains in cache for 10 seconds after last use
    refetchOnWindowFocus: false, // Disable refetch on window focus
    keepPreviousData: true, // Keep the previous data while fetching new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
