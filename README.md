# disease_sh.js
Web-API for [disease.sh](https://disease.sh/) an open API for disease-related statistics, [Source](https://github.com/disease-sh/api)

## Example
```JavaScript
async function main() {
	const { DiseaseSh } = require("./disease_sh.js")
	const diseaseSh = new DiseaseSh()
	const covidHistory = await diseaseSh.getCovidHistory()
	console.log(covidHistory)
}

main()
```
