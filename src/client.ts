// Bitfocus AS - 2024
// Author: William Viker

import Axios from 'axios'
import type { ChargerStatus, DeviceIdentify, DeviceInfo } from './types'

export function KLVRCharger(ip: string) {
	// Handle IP addresses that may include ports
	const baseURL = ip.includes(':') ? `http://${ip}/api/v2/` : `http://${ip}:8000/api/v2/`
	
	const api = Axios.create({
		baseURL,
	})

	let lastError: string | null = null

	return {
		deviceInfo: async () => {
			try {
				const res = await api.get<DeviceInfo>('/device/info')
				return res.data
			} catch (e) {
				lastError = String(e)
			}
			return null
		},

		chargerStatus: async () => {
			try {
				const res = await api.get<ChargerStatus>('/charger/status')
				return res.data
			} catch (e) {
				lastError = String(e)
			}
			return null
		},

		deviceIdentify: async () => {
			try {
				const res = await api.post<DeviceIdentify>('/device/identify', {})
				if (res.status === 200) {
					return true
				}
			} catch (e) {
				lastError = String(e)
			}
			return false
		},

		getLastError: () => {
			return lastError
		},
	}
}
