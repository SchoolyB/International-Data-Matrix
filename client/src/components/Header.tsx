import HomeIcon from '@rsuite/icons/legacy/Home'
import { useContext, useState } from 'react'
import { Nav, Navbar } from 'rsuite'
import { SearchContext } from '../App'
import Container from './helpers/Container'
import '../../styles/darkMode.css'
import { ChangeEventHandler } from 'react'
import DarkMode from './darkMode'

export default function Header() {
	const search = useContext(SearchContext)

	const [openMenu, setOpenMenu] = useState(false)

	const handleMenu = () => setOpenMenu((state) => !state)

	const setDark = () => {
		localStorage.setItem('theme', 'dark')

		document.documentElement.setAttribute('data-theme', 'dark')
	}

	const setLight = () => {
		localStorage.setItem('theme', 'light')
		document.documentElement.setAttribute('data-theme', 'light')
	}

	const storedTheme = localStorage.getItem('theme')

	const prefersDark =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches

	const defaultDark =
		storedTheme === 'dark' || (storedTheme === null && prefersDark)

	if (defaultDark) {
		setDark()
	}

	const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.target.checked) {
			setDark()
		} else {
			setLight()
		}
	}

	return (
		<header>
			<Navbar id="navbar">
				<Container>
					<div id="navHead">
						<Navbar.Brand id="logoText" href="/">
							The International Data Matrix
						</Navbar.Brand>
						<div onClick={handleMenu}>{/* <HomeIcon /> */}</div>
					</div>
					<DarkMode />
					{openMenu && (
						<div id="menu">
							<Nav id="nav">
								<Nav.Item id="item" icon={<HomeIcon />} href="/">
									Home
								</Nav.Item>
								<Nav.Item href="Countries">Country Selection</Nav.Item>
								<Nav.Item href="Translator">Translator</Nav.Item>
								<Nav.Item href="Contact">Contact</Nav.Item>
							</Nav>
							<div id="searchContainer">
								<form id="countryFilterForm" className="searchForm ">
									<input
										placeholder="Search Countries"
										id="countryFilter"
										name="countryFilter"
										type="text"
										required
										value={search.value}
										onChange={(event) => {
											search.value = event.target.value
										}}
									></input>
								</form>
							</div>
						</div>
					)}
				</Container>
			</Navbar>
		</header>
	)
}
