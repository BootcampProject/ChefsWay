async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="Title"]').value.trim();
    const id = window.location.toString().split('/')

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-form').addEventListener('submit', editFormHandler);
  