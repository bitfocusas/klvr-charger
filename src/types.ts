// Bitfocus AS - 2024
// Author: William Viker

import type {
	BatteryStatusSchema,
	ChargerStatusSchema,
	DeviceIdentifySchema,
	DeviceInfoSchema,
	IPInfoSchema,
} from './schema'

export type DeviceInfo = Zod.infer<typeof DeviceInfoSchema>
export type IPInfo = Zod.infer<typeof IPInfoSchema>
export type BatteryStatus = Zod.infer<typeof BatteryStatusSchema>
export type ChargerStatus = Zod.infer<typeof ChargerStatusSchema>
export type DeviceIdentify = Zod.infer<typeof DeviceIdentifySchema>
