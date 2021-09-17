async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="Title"]').value;
    const description = document.querySelector('textarea[name="Body"]').value;
    const ingredients = document.querySelector('textarea[name="Body"]').value;
    const table_meals = document.querySelector('textarea[name="Body"]').value;
    const directions = document.querySelector('textarea[name="Body"]').value;
  
    const response = await fetch(`/api/recipies`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        ingredients, 
        table_meals,
        directions
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
  