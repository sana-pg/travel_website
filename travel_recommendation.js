const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];


function resetForm() {
    document.getElementById("recommendations_search").value = "";
  }

reset.addEventListener('click', resetForm);

function searchCondition() {
    const input = document.getElementById('recommendations_search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const countries = data.countries;
            const temples = data.temples;
            const beaches = data.beaches;

            if (input === "countries") {
                // Display the list of countries
                countries.forEach(country => {
                resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                });
            } else if (input === "temples") {
                // Display the list of temples
                resultDiv
                temples.forEach(temple => {
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                });
            } else if (input === "beaches") {
                // Display the list of beaches
                beaches.forEach(beach => {
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                });
            } else {
                resultDiv.innerHTML = 'Country not found.';
            }})
        
        .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}


btnSearch.addEventListener('click', searchCondition);
