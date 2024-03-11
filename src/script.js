document.getElementById('fetchDataBtn').addEventListener('click', () => {
    fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data && data.count) {
          alert(`Total count of records fetched: ${data.count}`);
        } else {
          alert('Error: Unable to fetch count of records.');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  