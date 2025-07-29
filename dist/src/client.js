"use strict";
// Bitfocus AS - 2024
// Author: William Viker
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KLVRCharger = KLVRCharger;
const axios_1 = __importDefault(require("axios"));
function KLVRCharger(ip) {
    // Handle IP addresses that may include ports
    const baseURL = ip.includes(':') ? `http://${ip}/api/v2/` : `http://${ip}:8000/api/v2/`;
    const api = axios_1.default.create({
        baseURL,
    });
    let lastError = null;
    return {
        deviceInfo: async () => {
            try {
                const res = await api.get('/device/info');
                return res.data;
            }
            catch (e) {
                lastError = String(e);
            }
            return null;
        },
        chargerStatus: async () => {
            try {
                const res = await api.get('/charger/status');
                return res.data;
            }
            catch (e) {
                lastError = String(e);
            }
            return null;
        },
        deviceIdentify: async () => {
            try {
                const res = await api.post('/device/identify', {});
                if (res.status === 200) {
                    return true;
                }
            }
            catch (e) {
                lastError = String(e);
            }
            return false;
        },
        getLastError: () => {
            return lastError;
        },
    };
}
//# sourceMappingURL=client.js.map