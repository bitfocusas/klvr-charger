"use strict";
// Bitfocus AS - 2024
// Author: William Viker
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceIdentifySchema = exports.ChargerStatusSchema = exports.BatteryStatusSchema = exports.DeviceInfoSchema = exports.IPInfoSchema = void 0;
const zod_1 = require("zod");
// Define Zod schemas (same as before)
exports.IPInfoSchema = zod_1.z.object({
    ipAddress: zod_1.z.string().ip(),
    gatewayAddress: zod_1.z.string().ip(),
    mask: zod_1.z.string(),
    macAddress: zod_1.z.string().regex(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/i),
    method: zod_1.z.enum(['dhcp', 'static']),
});
exports.DeviceInfoSchema = zod_1.z.object({
    deviceInternalTemperatureC: zod_1.z.number(),
    name: zod_1.z.string(),
    firmwareVersion: zod_1.z.string(),
    firmwareBuild: zod_1.z.string(),
    ip: exports.IPInfoSchema,
});
exports.BatteryStatusSchema = zod_1.z.object({
    batteryBayTempC: zod_1.z.number(),
    slotState: zod_1.z.enum(['charging', 'empty', 'not charging', 'error', 'done']),
    stateOfChargePercent: zod_1.z.number().min(0).max(100),
    timeRemainingSeconds: zod_1.z.number().int().nonnegative(),
    errorMsg: zod_1.z.string(),
});
exports.ChargerStatusSchema = zod_1.z.object({
    deviceStatus: zod_1.z.enum(['ok', 'error']),
    batteries: zod_1.z.record(zod_1.z.string(), exports.BatteryStatusSchema),
});
exports.DeviceIdentifySchema = zod_1.z.object({});
//# sourceMappingURL=schema.js.map