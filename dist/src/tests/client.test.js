"use strict";
// Bitfocus AS - 2024
// Author: William Viker
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const dummy_1 = require("../dummy");
const schema_1 = require("../schema");
const client_1 = require("../client");
let server;
const app = (0, dummy_1.KLVRDummyDevice)();
const client = (0, client_1.KLVRCharger)('127.0.0.1');
(0, globals_1.describe)('KLVR Client Library', () => {
    (0, globals_1.beforeAll)((done) => {
        server = app.listen(8000, () => {
            done();
        });
    });
    (0, globals_1.afterAll)((done) => {
        if (server) {
            server.close((err) => {
                if (err) {
                    console.error('Error closing the server:', err);
                    return done(err);
                }
                done();
            });
        }
    });
    (0, globals_1.test)('DeviceInfo: Response & Schema', async () => {
        const response = await client.deviceInfo();
        const validationResult = schema_1.DeviceInfoSchema.safeParse(response);
        (0, globals_1.expect)(validationResult.success).toBe(true);
    });
    (0, globals_1.test)('ChargerStatus: Response & Schema', async () => {
        const response = await client.chargerStatus();
        const validationResult = schema_1.ChargerStatusSchema.safeParse(response);
        (0, globals_1.expect)(validationResult.success).toBe(true);
    });
    (0, globals_1.test)('DeviceIdentify: Response & Schema', async () => {
        const response = await client.deviceIdentify();
        (0, globals_1.expect)(response).toBe(true);
    });
});
//# sourceMappingURL=client.test.js.map