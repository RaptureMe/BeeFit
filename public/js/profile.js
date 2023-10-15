const newFormHandler = async (event) => {
  event.preventDefault();

  const food_name = document.querySelector('#food_name').value.trim();
  const calorie_amount = document.querySelector('#calorie_amount').value.trim();

  if (food_name && calorie_amount) {
    const response = await fetch(`/api/calories`, {
      method: 'POST',
      body: JSON.stringify({ food_name, calorie_amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create Calorie Input');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/calories/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('#calorieSubmit')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.delete-item')
  .addEventListener('click', delButtonHandler);

