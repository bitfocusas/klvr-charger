export declare function KLVRCharger(ip: string): {
    deviceInfo: () => Promise<{
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
    } | null>;
    chargerStatus: () => Promise<{
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
    } | null>;
    deviceIdentify: () => Promise<boolean>;
    getLastError: () => string | null;
};
