"use strict";
// Bitfocus AS - 2024
// Author: William Viker
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomBatteryStatus = generateRandomBatteryStatus;
exports.generateBatteries = generateBatteries;
// Helper function to generate random battery status
function generateRandomBatteryStatus(index) {
    const randomTemperature = Math.random() * 4 + 24; // 24 to 28 degrees
    const slotStates = ['charging', 'empty', 'not charging', 'error', 'done'];
    const randomSlotState = slotStates[Math.floor(Math.random() * slotStates.length)];
    const randomChargePercent = Number.parseFloat((Math.random() * 100).toFixed(3)); // 0 to 100 percent
    const randomTimeRemaining = Math.floor(Math.random() * 3600); // 0 to 3600 seconds (1 hour max)
    const randomErrorMsg = randomSlotState === 'error' ? 'Battery Error Detected' : '';
    // Randomly choose between AA and AAA batteries
    const batteryTypes = ['KLVR-AA', 'KLVR-AAA'];
    const randomBatteryType = batteryTypes[Math.floor(Math.random() * batteryTypes.length)];
    return {
        index,
        batteryBayTempC: randomTemperature,
        batteryDetected: randomBatteryType,
        slotState: randomSlotState,
        stateOfChargePercent: randomChargePercent,
        timeRemainingSeconds: randomTimeRemaining,
        errorMsg: randomErrorMsg,
    };
}
// Generate 48 batteries with random status (matching the v2 API)
function generateBatteries() {
    const batteries = [];
    for (let i = 0; i < 48; i++) {
        batteries.push(generateRandomBatteryStatus(i));
    }
    return batteries;
}
//# sourceMappingURL=helpers.js.map