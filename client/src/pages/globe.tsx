import React from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import SceneInitializer from '../lib/SceneInitializer.js' //this is a warning not an error

export default function globe() {
	useEffect(() => {
		const spoolUp = new SceneInitializer('globe')
		spoolUp.initialize()
		spoolUp.animate()

		const boxGeometry = new THREE.BoxGeometry(16, 16, 16)
		const boxMaterial = new THREE.MeshNormalMaterial()
		const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)

		spoolUp.scene!.add(boxMesh)
	}, [])

	return (
		<>
			<canvas id="globe"></canvas>
		</>
	)
}
