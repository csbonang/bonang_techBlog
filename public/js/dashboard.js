const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogpost-name').value.trim();
    const description = document.querySelector('#blogpost-desc').value.trim();
  
    // Creating a blogpost in dashboard
    // Once user clicks create, they are redirected to another page that displays the 
    // blog posts information 
    if (title && description) {
      const response = await fetch(`/api/dashboard`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };
  
  // deleting a blogpost 
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/dashboard/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-blogposts-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blogposts-list')
    .addEventListener('click', delButtonHandler);
  