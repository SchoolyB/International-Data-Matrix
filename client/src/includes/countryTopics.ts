import id from '../pages/Country/[id]'

export default function(id: string) {
	const getText = (id: string) => {
		return import(`../../../assets/countryTopics/${id}.txt?raw`)
	}
}
