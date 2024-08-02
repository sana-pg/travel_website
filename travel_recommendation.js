const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];


function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
  }

function searchCondition() {
    const input = document.getElementById('recommendations_search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {

        console.log(data.countries)
        const country = data.countries.find(item => item.name === input);

        if (country) {
            const name = country.name.join(', ');
            const cities = country.cities.join(', ');

            resultDiv.innerHTML += `<h2>${country.name}</h2>`;
            resultDiv.innerHTML += `<img src="${country.cities}" alt="hjh">`;

            resultDiv.innerHTML += `<p><strong>Name:</strong> ${name}</p>`;
            resultDiv.innerHTML += `<p><strong>Cities:</strong> ${cities}</p>`;
        } else {
            resultDiv.innerHTML = 'Country not found.';
        }
        })
        .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}


btnSearch.addEventListener('click', searchCondition);
