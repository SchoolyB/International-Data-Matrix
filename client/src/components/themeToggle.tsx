import React from 'react'

export default function themeToggle() {
	return (
		<>
			<div className="toggle-theme-wrapper">
				<span>☀️</span>
				<label className="toggle-theme" htmlFor="checkbox">
					<input title="box" type="checkbox" id="checkbox" />
					<div className="slider round"></div>
				</label>
				<span>🌒</span>
			</div>
		</>
	)
}
