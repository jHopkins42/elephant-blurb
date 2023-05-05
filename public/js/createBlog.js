import { makeRequest } from './helpers.js';

const createBlogButton = document.querySelector('#create-blog');

const handleCreateBlog = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  const description = document.querySelector('#description').value;
  if (title && content && description) {
    try {
      const data = await makeRequest('/api/blogs', 'POST', {
        blog_title: title,
        blog_body: content,
        blog_description: description,
      });
      if (data.success) {
        window.location.replace('/dashboard');
      } else {
        console.log('Login error');
      }
    } catch (error) {
      console.log('Login Error', error);
    }
  } else {
    console.log('Login error');
  }
};
createBlogButton.addEventListener('submit', handleCreateBlog);