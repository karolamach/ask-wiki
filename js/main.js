function searchSingleItem(event) {
    event.preventDefault();
    let searchFormInputValue = event.target[0].value;

    fetch('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=1&origin=*&search=' + searchFormInputValue)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            let resultRegion = document.getElementById('results-region'),
                searchResultData = `
                <h1>${data[1]}</h1>
                <p>${data[2]} [...]</p>
                <p>You can read more about <b>${data[0]}</b> here:<br>
                <a href="${data[3]}">${data[3]}</a></p>`

            resultRegion.innerHTML = searchResultData;
        });
}

let searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', searchSingleItem);