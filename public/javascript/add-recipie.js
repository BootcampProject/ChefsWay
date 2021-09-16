async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="Title"]').value;
    const txt = document.querySelector('textarea[name="Body"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        txt
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.card-body').addEventListener('submit', newFormHandler);
  