// Bitfocus AS - 2024
// Author: William Viker

import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { KLVRDummyDevice } from '../dummy'
import type { Server } from 'node:http'
import { ChargerStatusSchema, DeviceInfoSchema } from '../schema'
import { KLVRCharger } from '../client'

let server: Server

const app = KLVRDummyDevice()
const client = KLVRCharger('127.0.0.1')

describe('KLVR Client Library', () => {
	beforeAll((done) => {
		server = app.listen(8000, () => {
			done()
		})
	})

	afterAll((done) => {
		if (server) {
			server.close((err) => {
				if (err) {
					console.error('Error closing the server:', err)
					return done(err)
				}
				done()
			})
		}
	})

	test('DeviceInfo: Response & Schema', async () => {
		const response = await client.deviceInfo()
		const validationResult = DeviceInfoSchema.safeParse(response)
		expect(validationResult.success).toBe(true)
	})

	test('ChargerStatus: Response & Schema', async () => {
		const response = await client.chargerStatus()
		const validationResult = ChargerStatusSchema.safeParse(response)
		expect(validationResult.success).toBe(true)
	})

	test('DeviceIdentify: Response & Schema', async () => {
		const response = await client.deviceIdentify()
		expect(response).toBe(true)
	})
})
