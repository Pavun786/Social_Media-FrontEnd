import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const getMyPosts = async (id) => {
  return await axios.get(`https://social-media-back-end.vercel.app/api/posts/myposts/${id}`);
};

const getTimelinePosts = async (id) => {
  return await axios.get(`https://social-media-back-end.vercel.app/api/posts/feed/${id}`);
};

const createPost = async (post, currentUser) => {
  return await axios.post(`https://social-media-back-end.vercel.app/api/posts/${currentUser._id}`, post);
};

const updatePost = async (postId, userId, token, desc) => {
  return await axios.put(
    `https://social-media-back-end.vercel.app/api/posts/${postId}/${userId}`,
    {
      desc,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

const deletePost = async (postId, userId, token) => {
  return await axios.delete(
    `https://social-media-back-end.vercel.app/api/posts/${postId}/${userId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    { data: { postedBy: userId } }
  );
};

const addComment = async (postId, userId, token, comment) => {
  return await axios.put(
    `https://social-media-back-end.vercel.app/api/posts/${postId}/comment/${userId}`,
    { text: comment },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export {
  getMyPosts,
  getTimelinePosts,
  createPost,
  updatePost,
  deletePost,
  addComment,
};
