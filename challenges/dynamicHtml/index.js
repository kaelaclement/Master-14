const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchTerm');
const numResults = document.getElementById('number');
const wrapper = document.getElementById('wrapper');

const makeDivs = () => {
	const term = searchInput.value;
	const num = numResults.value;

	for (let i = 0; i < num; i++) {
		let div = document.createElement('div');
		let content = document.createTextNode(term);
		div.className = 'box';
		div.appendChild(content);
		wrapper.appendChild(div);
	}
}


searchButton.addEventListener('click', () => {
	makeDivs();
})