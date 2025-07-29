// Bitfocus AS - 2024
// Author: William Viker

import { z } from 'zod'

// Define Zod schemas for v2 API
export const IPInfoSchema = z.object({
	type: z.enum(['dhcp', 'static']),
	ipAddress: z.string().ip(),
	gatewayAddress: z.string().ip(),
	mask: z.string(),
	macAddress: z.string().regex(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/i),
})

export const DeviceInfoSchema = z.object({
	deviceInternalTemperatureC: z.number(),
	name: z.string(),
	firmwareVersion: z.string(),
	firmwareBuild: z.string(),
	ip: IPInfoSchema,
})

export const BatteryStatusSchema = z.object({
	index: z.number().int().nonnegative(),
	batteryBayTempC: z.number(),
	batteryDetected: z.string(),
	slotState: z.enum(['charging', 'empty', 'not charging', 'error', 'done']),
	stateOfChargePercent: z.number().min(0).max(100),
	timeRemainingSeconds: z.number().int().nonnegative(),
	errorMsg: z.string(),
})

export const ChargerStatusSchema = z.object({
	deviceStatus: z.enum(['ok', 'error']),
	batteries: z.array(BatteryStatusSchema),
})

export const DeviceIdentifySchema = z.object({})
