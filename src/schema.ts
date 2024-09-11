// Bitfocus AS - 2024
// Author: William Viker

import { z } from 'zod'

// Define Zod schemas (same as before)
export const IPInfoSchema = z.object({
	ipAddress: z.string().ip(),
	gatewayAddress: z.string().ip(),
	mask: z.string(),
	macAddress: z.string().regex(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/i),
	method: z.enum(['dhcp', 'static']),
})

export const DeviceInfoSchema = z.object({
	deviceInternalTemperatureC: z.number(),
	name: z.string(),
	firmwareVersion: z.string(),
	firmwareBuild: z.string(),
	ip: IPInfoSchema,
})

export const BatteryStatusSchema = z.object({
	batteryBayTempC: z.number(),
	slotState: z.enum(['charging', 'empty', 'not charging', 'error', 'done']),
	stateOfChargePercent: z.number().min(0).max(100),
	timeRemainingSeconds: z.number().int().nonnegative(),
	errorMsg: z.string(),
})

export const ChargerStatusSchema = z.object({
	deviceStatus: z.enum(['ok', 'error']),
	batteries: z.record(z.string(), BatteryStatusSchema),
})

export const DeviceIdentifySchema = z.object({})
