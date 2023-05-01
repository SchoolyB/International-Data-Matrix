import React from 'react'
import { render } from 'react-dom'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100,
)
const renderer = new THREE.WebGLRenderer()
const controls = new OrbitControls(camera, renderer.domElement)

const axesHelper = new THREE.AxesHelper(5)
const ambientLight = new THREE.AmbientLight(0x4444444)
const light = new THREE.DirectionalLight(0xffffff, 2)

light.position.set(0, 0, 2)
light.castShadow = true
light.shadow.bias = -0.003
light.shadow.mapSize.width = 2048
light.shadow.mapSize.height = 2048
light.shadow.camera.left = -2
light.shadow.camera.right = 2
light.shadow.camera.top = -2
light.shadow.camera.bottom = -2
light.shadow.camera.near = 1
light.shadow.camera.far = 5

const helper = new THREE.CameraHelper(light.shadow.camera)
const lightPivot = new THREE.Object3D()
lightPivot.add(light)

scene.background = new THREE.CubeTextureLoader().load([
	'../../assets/textures/background.jpg',
])

scene.add(ambientLight)
scene.add(axesHelper)
scene.add(helper)
scene.add(light) //?maybe take out?
scene.add(lightPivot)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement) //??unsure

const loader = new GLTFLoader()

export default function globe() {
	return (
		<>
			<div id="globeContainer">
				<div id="globe">{/* GLOBE GOES HERE */}</div>
			</div>
		</>
	)
}
