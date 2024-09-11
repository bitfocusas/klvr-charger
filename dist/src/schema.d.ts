import { z } from 'zod';
export declare const IPInfoSchema: z.ZodObject<{
    ipAddress: z.ZodString;
    gatewayAddress: z.ZodString;
    mask: z.ZodString;
    macAddress: z.ZodString;
    method: z.ZodEnum<["dhcp", "static"]>;
}, "strip", z.ZodTypeAny, {
    ipAddress: string;
    gatewayAddress: string;
    mask: string;
    macAddress: string;
    method: "dhcp" | "static";
}, {
    ipAddress: string;
    gatewayAddress: string;
    mask: string;
    macAddress: string;
    method: "dhcp" | "static";
}>;
export declare const DeviceInfoSchema: z.ZodObject<{
    deviceInternalTemperatureC: z.ZodNumber;
    name: z.ZodString;
    firmwareVersion: z.ZodString;
    firmwareBuild: z.ZodString;
    ip: z.ZodObject<{
        ipAddress: z.ZodString;
        gatewayAddress: z.ZodString;
        mask: z.ZodString;
        macAddress: z.ZodString;
        method: z.ZodEnum<["dhcp", "static"]>;
    }, "strip", z.ZodTypeAny, {
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
        method: "dhcp" | "static";
    }, {
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
        method: "dhcp" | "static";
    }>;
}, "strip", z.ZodTypeAny, {
    deviceInternalTemperatureC: number;
    name: string;
    firmwareVersion: string;
    firmwareBuild: string;
    ip: {
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
        method: "dhcp" | "static";
    };
}, {
    deviceInternalTemperatureC: number;
    name: string;
    firmwareVersion: string;
    firmwareBuild: string;
    ip: {
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
        method: "dhcp" | "static";
    };
}>;
export declare const BatteryStatusSchema: z.ZodObject<{
    batteryBayTempC: z.ZodNumber;
    slotState: z.ZodEnum<["charging", "empty", "not charging", "error", "done"]>;
    stateOfChargePercent: z.ZodNumber;
    timeRemainingSeconds: z.ZodNumber;
    errorMsg: z.ZodString;
}, "strip", z.ZodTypeAny, {
    batteryBayTempC: number;
    slotState: "charging" | "empty" | "not charging" | "error" | "done";
    stateOfChargePercent: number;
    timeRemainingSeconds: number;
    errorMsg: string;
}, {
    batteryBayTempC: number;
    slotState: "charging" | "empty" | "not charging" | "error" | "done";
    stateOfChargePercent: number;
    timeRemainingSeconds: number;
    errorMsg: string;
}>;
export declare const ChargerStatusSchema: z.ZodObject<{
    deviceStatus: z.ZodEnum<["ok", "error"]>;
    batteries: z.ZodRecord<z.ZodString, z.ZodObject<{
        batteryBayTempC: z.ZodNumber;
        slotState: z.ZodEnum<["charging", "empty", "not charging", "error", "done"]>;
        stateOfChargePercent: z.ZodNumber;
        timeRemainingSeconds: z.ZodNumber;
        errorMsg: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        batteryBayTempC: number;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }, {
        batteryBayTempC: number;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    deviceStatus: "error" | "ok";
    batteries: Record<string, {
        batteryBayTempC: number;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }>;
}, {
    deviceStatus: "error" | "ok";
    batteries: Record<string, {
        batteryBayTempC: number;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }>;
}>;
export declare const DeviceIdentifySchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
