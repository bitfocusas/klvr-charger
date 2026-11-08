import { z } from 'zod';
export declare const IPInfoSchema: z.ZodObject<{
    type: z.ZodEnum<{
        dhcp: "dhcp";
        static: "static";
    }>;
    ipAddress: z.ZodIPv4;
    gatewayAddress: z.ZodIPv4;
    mask: z.ZodString;
    macAddress: z.ZodString;
}, z.core.$strip>;
export declare const DeviceInfoSchema: z.ZodObject<{
    deviceInternalTemperatureC: z.ZodNumber;
    name: z.ZodString;
    firmwareVersion: z.ZodString;
    firmwareBuild: z.ZodString;
    ip: z.ZodObject<{
        type: z.ZodEnum<{
            dhcp: "dhcp";
            static: "static";
        }>;
        ipAddress: z.ZodIPv4;
        gatewayAddress: z.ZodIPv4;
        mask: z.ZodString;
        macAddress: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const BatteryStatusSchema: z.ZodObject<{
    index: z.ZodNumber;
    batteryBayTempC: z.ZodNumber;
    batteryDetected: z.ZodString;
    slotState: z.ZodEnum<{
        error: "error";
        charging: "charging";
        empty: "empty";
        "not charging": "not charging";
        done: "done";
    }>;
    stateOfChargePercent: z.ZodNumber;
    timeRemainingSeconds: z.ZodNumber;
    errorMsg: z.ZodString;
}, z.core.$strip>;
export declare const ChargerStatusSchema: z.ZodObject<{
    deviceStatus: z.ZodEnum<{
        error: "error";
        ok: "ok";
    }>;
    batteries: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        batteryBayTempC: z.ZodNumber;
        batteryDetected: z.ZodString;
        slotState: z.ZodEnum<{
            error: "error";
            charging: "charging";
            empty: "empty";
            "not charging": "not charging";
            done: "done";
        }>;
        stateOfChargePercent: z.ZodNumber;
        timeRemainingSeconds: z.ZodNumber;
        errorMsg: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const DeviceIdentifySchema: z.ZodObject<{}, z.core.$loose>;
