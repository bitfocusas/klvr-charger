// Bitfocus AS - 2024
// Author: William Viker

import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import request from 'supertest'
import { KLVRDummyDevice } from '../dummy'
import type { Server } from 'node:http'
import { ChargerStatusSchema, DeviceIdentifySchema, DeviceInfoSchema } from '../schema'

let server: Server

const app = KLVRDummyDevice()

describe('KLVR Dummy Device', () => {
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

	test('DeviceInfo: Schema', async () => {
		const response = await request(app).get('/api/v1/device/info')
		expect(response.status).toBe(200)
		const validationResult = DeviceInfoSchema.safeParse(response.body)
		expect(validationResult.success).toBe(true)
	})

	test('ChargerStatus: Schema', async () => {
		const response = await request(app).get('/api/v1/charger/status')
		expect(response.status).toBe(200)
		const validationResult = ChargerStatusSchema.safeParse(response.body)
		expect(validationResult.success).toBe(true)
	})

	test('DeviceIdentify: Schema', async () => {
		const response = await request(app).post('/api/v1/device/identify').send({})
		expect(response.status).toBe(200)
		const validationResult = DeviceIdentifySchema.safeParse(response.body)
		expect(validationResult.success).toBe(true)
	})

	test('DeviceIdentify: Should crash on empty payload', async () => {
		const response = await request(app).post('/api/v1/device/identify')
		expect(response.status).toBe(200)
		const validationResult = DeviceIdentifySchema.safeParse(response.body)
		expect(validationResult.success).toBe(true)
	})
})
