// Bitfocus AS - 2024
// Author: William Viker

import express from 'express'
import type { ChargerStatus, DeviceIdentify, DeviceInfo } from './types'
import { generateBatteries } from './helpers'

export function KLVRDummyDevice() {
	const app = express()

	app.use(express.json())

	app.get('/api/v1/device/info', (_req, res) => {
		const randomTemperature = Math.random() * 4 + 24 // 24 to 28 degrees
		const deviceInfo: DeviceInfo = {
			deviceInternalTemperatureC: randomTemperature,
			name: 'Laddare #1',
			firmwareVersion: '0.1.0',
			firmwareBuild: 'abc123',
			ip: {
				ipAddress: '127.0.0.2',
				gatewayAddress: '10.0.0.1',
				mask: '255.255.255.0',
				macAddress: '00:B0:D0:63:C2:26',
				method: 'dhcp',
			},
		}
		res.json(deviceInfo)
	})

	app.get('/api/v1/charger/status', (_req, res) => {
		const chargerStatus: ChargerStatus = {
			deviceStatus: 'ok',
			batteries: generateBatteries(),
		}
		res.json(chargerStatus)
	})

	app.post('/api/v1/device/identify', (_req, res) => {
		const response: DeviceIdentify = { message: 'Device identified successfully' }
		res.json(response)
	})

	return app
}
