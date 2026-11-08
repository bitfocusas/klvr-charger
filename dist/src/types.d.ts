import type { BatteryStatusSchema, ChargerStatusSchema, DeviceIdentifySchema, DeviceInfoSchema, IPInfoSchema } from './schema';
import type { z } from 'zod';
export type DeviceInfo = z.infer<typeof DeviceInfoSchema>;
export type IPInfo = z.infer<typeof IPInfoSchema>;
export type BatteryStatus = z.infer<typeof BatteryStatusSchema>;
export type ChargerStatus = z.infer<typeof ChargerStatusSchema>;
export type DeviceIdentify = z.infer<typeof DeviceIdentifySchema>;
