import { z } from 'zod';
export declare const IPInfoSchema: z.ZodObject<{
    type: z.ZodEnum<["dhcp", "static"]>;
    ipAddress: z.ZodString;
    gatewayAddress: z.ZodString;
    mask: z.ZodString;
    macAddress: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "dhcp" | "static";
    ipAddress: string;
    gatewayAddress: string;
    mask: string;
    macAddress: string;
}, {
    type: "dhcp" | "static";
    ipAddress: string;
    gatewayAddress: string;
    mask: string;
    macAddress: string;
}>;
export declare const DeviceInfoSchema: z.ZodObject<{
    deviceInternalTemperatureC: z.ZodNumber;
    name: z.ZodString;
    firmwareVersion: z.ZodString;
    firmwareBuild: z.ZodString;
    ip: z.ZodObject<{
        type: z.ZodEnum<["dhcp", "static"]>;
        ipAddress: z.ZodString;
        gatewayAddress: z.ZodString;
        mask: z.ZodString;
        macAddress: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "dhcp" | "static";
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
    }, {
        type: "dhcp" | "static";
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
    }>;
}, "strip", z.ZodTypeAny, {
    deviceInternalTemperatureC: number;
    name: string;
    firmwareVersion: string;
    firmwareBuild: string;
    ip: {
        type: "dhcp" | "static";
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
    };
}, {
    deviceInternalTemperatureC: number;
    name: string;
    firmwareVersion: string;
    firmwareBuild: string;
    ip: {
        type: "dhcp" | "static";
        ipAddress: string;
        gatewayAddress: string;
        mask: string;
        macAddress: string;
    };
}>;
export declare const BatteryStatusSchema: z.ZodObject<{
    index: z.ZodNumber;
    batteryBayTempC: z.ZodNumber;
    batteryDetected: z.ZodString;
    slotState: z.ZodEnum<["charging", "empty", "not charging", "error", "done"]>;
    stateOfChargePercent: z.ZodNumber;
    timeRemainingSeconds: z.ZodNumber;
    errorMsg: z.ZodString;
}, "strip", z.ZodTypeAny, {
    index: number;
    batteryBayTempC: number;
    batteryDetected: string;
    slotState: "charging" | "empty" | "not charging" | "error" | "done";
    stateOfChargePercent: number;
    timeRemainingSeconds: number;
    errorMsg: string;
}, {
    index: number;
    batteryBayTempC: number;
    batteryDetected: string;
    slotState: "charging" | "empty" | "not charging" | "error" | "done";
    stateOfChargePercent: number;
    timeRemainingSeconds: number;
    errorMsg: string;
}>;
export declare const ChargerStatusSchema: z.ZodObject<{
    deviceStatus: z.ZodEnum<["ok", "error"]>;
    batteries: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        batteryBayTempC: z.ZodNumber;
        batteryDetected: z.ZodString;
        slotState: z.ZodEnum<["charging", "empty", "not charging", "error", "done"]>;
        stateOfChargePercent: z.ZodNumber;
        timeRemainingSeconds: z.ZodNumber;
        errorMsg: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        index: number;
        batteryBayTempC: number;
        batteryDetected: string;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }, {
        index: number;
        batteryBayTempC: number;
        batteryDetected: string;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    deviceStatus: "error" | "ok";
    batteries: {
        index: number;
        batteryBayTempC: number;
        batteryDetected: string;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }[];
}, {
    deviceStatus: "error" | "ok";
    batteries: {
        index: number;
        batteryBayTempC: number;
        batteryDetected: string;
        slotState: "charging" | "empty" | "not charging" | "error" | "done";
        stateOfChargePercent: number;
        timeRemainingSeconds: number;
        errorMsg: string;
    }[];
}>;
export declare const DeviceIdentifySchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
