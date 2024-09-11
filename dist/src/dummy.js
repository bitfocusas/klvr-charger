"use strict";
// Bitfocus AS - 2024
// Author: William Viker
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KLVRDummyDevice = KLVRDummyDevice;
const express_1 = __importDefault(require("express"));
const helpers_1 = require("./helpers");
function KLVRDummyDevice() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get('/api/v1/device/info', (_req, res) => {
        const randomTemperature = Math.random() * 4 + 24; // 24 to 28 degrees
        const deviceInfo = {
            deviceInternalTemperatureC: randomTemperature,
            name: 'Laddare #1',
            firmwareVersion: '0.1.0',
            firmwareBuild: 'abc123',
            ip: {
                ipAddress: '127.0.0.2',
                gatewayAddress: '10.0.0.1',
                mask: '255.255.255.0',
                macAddress: '00:B0:D0:63:C2:26',
                method: 'dhcp',
            },
        };
        res.json(deviceInfo);
    });
    app.get('/api/v1/charger/status', (_req, res) => {
        const chargerStatus = {
            deviceStatus: 'ok',
            batteries: (0, helpers_1.generateBatteries)(),
        };
        res.json(chargerStatus);
    });
    app.post('/api/v1/device/identify', (_req, res) => {
        const response = { message: 'Device identified successfully' };
        res.json(response);
    });
    return app;
}
//# sourceMappingURL=dummy.js.map