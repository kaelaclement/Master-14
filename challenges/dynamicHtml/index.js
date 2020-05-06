// 

const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const searchInput = document.getElementById('searchTerm');
const numResults = document.getElementById('number');
const wrapper = document.getElementById('wrapper');

const makeDivs = (term, num) => {
	for (let i = 0; i < num; i++) {
		let img = document.createElement('img');
		img.src = `https://source.unsplash.com/random/500x500/?sig=${i}&${term}`;
		img.className = 'box';
		wrapper.appendChild(img);
	}
}


searchButton.addEventListener('click', () => {
	if (isNaN(numResults.value)) {
		alert('Please enter a number');
	} else {
		const term = searchInput.value;
		const num = parseInt(numResults.value);
		makeDivs(term, num);
	}
})

clearButton.addEventListener('click', () => {
	wrapper.innerHTML = '';
})