import axios from "axios";
import React, { useEffect, useState } from "react";

function AsyncAwait() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
    //     ).then((res) => setPosts(res.data));
    //   })
    //   .finally(() => setLoading(false));
    (async () => {
      try {
        const { data: users } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        const { data: posts } = await axios(
          `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
        );

        setLoading(false);
        setUsers(users);
        setPosts(posts);

        console.log("users", users);
        console.log("posts", posts);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Users Fetching</h2>
      {loading && <div>Yükleniyor...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AsyncAwait;
