const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const searchInput = document.getElementById('searchTerm');
const numResults = document.getElementById('number');
const wrapper = document.getElementById('wrapper');

const makeDivs = (term, num) => {
	for (let i = 0; i < num; i++) {
		let randNum = Math.floor((Math.random() * 100) + 1);
		let img = document.createElement('img');
		img.src = `https://source.unsplash.com/random/500x500/?sig=${randNum}&${term}`;
		img.className = 'box';
		wrapper.appendChild(img);
	}
}

const reset = () => {
	searchInput.value = 'Search term';
	numResults.value = 'Number of results';
}


searchButton.addEventListener('click', () => {
	if (isNaN(numResults.value)) {
		alert('Please enter a number');
	} else {
		const term = searchInput.value;
		const num = parseInt(numResults.value);
		makeDivs(term, num);
		reset();
	}
})

clearButton.addEventListener('click', () => {
	wrapper.innerHTML = '';
	reset();
})