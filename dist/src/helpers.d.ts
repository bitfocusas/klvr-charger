import type { BatteryStatus } from './types';
export declare function generateRandomBatteryStatus(): BatteryStatus;
export declare function generateBatteries(): {
    [key: string]: BatteryStatus;
};
