const fetch = require('node-fetch');

async function getContributions(token, username) {
		const headers = {
				'Authorization': `bearer ${token}`,
		}
		const body = {
				"query": `query {
						user(login: "${username}") {
							name
							login
							contributionsCollection {
								contributionCalendar {
									colors
									totalContributions
									weeks {
										contributionDays {
											color
											contributionCount
											date
											weekday
										}
										firstDay
									}
								}
							}
						}
					}`
		}
		const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
		const data = await response.json()
		return data
}

const main = async () => {
	const data = await getContributions('GITHUB_TOKEN', 'gebeto')
	console.log(data);
	console.log(data.data.user.contributionsCollection.contributionCalendar.colors);
	console.log(data.data.user.contributionsCollection.contributionCalendar.totalContributions);
	console.log(data.data.user.contributionsCollection.contributionCalendar.weeks[0]);

}

main();