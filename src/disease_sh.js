class DiseaseSh {
	constructor() {
		this.api = "https://disease.sh/v3/covid-19"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getCovidHistory() {
		const response = await fetch(
			`${this.api}/historical/all?lastdays=all`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCovidWorldWide() {
		const response = await fetch(
			`${this.api}/all`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCovidByCountry(countryCode = "usa") {
		const response = await fetch(
			`${this.api}/countries/${countryCode}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCovidVaccinesWorldWide() {
		const response = await fetch(
			`${this.api}/vaccine/coverage/countries?lastdays=1`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {DiseaseSh}
