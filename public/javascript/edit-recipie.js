async function editFormHandler(event) {
    event.preventDefault();
  
    
    const description = document.querySelector('textarea[name="Description"]').value.trim();
    const ingredients = document.querySelector('textarea[name="Ingredients"]').value.trim();
    const table_meals = document.querySelector('textarea[name="TableMeals"]').value.trim();
    const directions = document.querySelector('textarea[name="Directions"]').value.trim();
    const id = window.location.toString().slice(-1)
    console.log(description);
    const response = await fetch(`/api/recipie/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
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
      document.location.replace(`/dashboard/recipie/${id}`);
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#edit-form').addEventListener('submit', editFormHandler);
  