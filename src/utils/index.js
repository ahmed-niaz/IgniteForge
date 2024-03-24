import { Toaster, toast } from 'react-hot-toast';

export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

// Save
export const saveBlogs = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error(`Already Bookmarked🔖`);
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success(`Blog Bookmarked Successfully`);
};

// Delete
export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((b) => b.id !== id);
  if (remaining.length !== blogs.length) {
    localStorage.setItem("blogs", JSON.stringify(remaining));
    toast.success(`Blog removed successfully`);
  }
};