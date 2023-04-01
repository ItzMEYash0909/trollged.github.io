function troll() {
  // Get the user's IP address
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;

      // Use the IP address to get the user's city and country
      fetch(`https://ipapi.co/${ipAddress}/json/`)
        .then(response => response.json())
        .then(data => {
          const city = data.city;
          const country = data.country_name;
          
          // Display the user's city and country in an alert
          alert(`bro had the entire earth and chose to live at ${city} in ${country}.`);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
