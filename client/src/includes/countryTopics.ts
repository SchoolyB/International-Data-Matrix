export default function getText(id: string) {
	return import(`./countryTopics/${id}.txt?raw`).then((mod) => mod?.default) //change the result of what is read form .txt file
	// without this the import would return the module object with excess information
}
