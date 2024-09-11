export declare function KLVRCharger(ip: string): {
    deviceInfo: () => Promise<{
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
    } | null>;
    chargerStatus: () => Promise<{
        deviceStatus: "ok" | "error";
        batteries: Record<string, {
            batteryBayTempC: number;
            slotState: "error" | "charging" | "empty" | "not charging" | "done";
            stateOfChargePercent: number;
            timeRemainingSeconds: number;
            errorMsg: string;
        }>;
    } | null>;
    deviceIdentify: () => Promise<boolean>;
    getLastError: () => string | null;
};
