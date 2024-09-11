"use strict";
// Bitfocus AS - 2024
// Author: William Viker
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const dummy_1 = require("../dummy");
const schema_1 = require("../schema");
let server;
const app = (0, dummy_1.KLVRDummyDevice)();
(0, globals_1.describe)('KLVR Dummy Device', () => {
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
    (0, globals_1.test)('DeviceInfo: Schema', async () => {
        const response = await (0, supertest_1.default)(app).get('/api/v1/device/info');
        (0, globals_1.expect)(response.status).toBe(200);
        const validationResult = schema_1.DeviceInfoSchema.safeParse(response.body);
        (0, globals_1.expect)(validationResult.success).toBe(true);
    });
    (0, globals_1.test)('ChargerStatus: Schema', async () => {
        const response = await (0, supertest_1.default)(app).get('/api/v1/charger/status');
        (0, globals_1.expect)(response.status).toBe(200);
        const validationResult = schema_1.ChargerStatusSchema.safeParse(response.body);
        (0, globals_1.expect)(validationResult.success).toBe(true);
    });
    (0, globals_1.test)('DeviceIdentify: Schema', async () => {
        const response = await (0, supertest_1.default)(app).post('/api/v1/device/identify').send({});
        (0, globals_1.expect)(response.status).toBe(200);
        const validationResult = schema_1.DeviceIdentifySchema.safeParse(response.body);
        (0, globals_1.expect)(validationResult.success).toBe(true);
    });
    (0, globals_1.test)('DeviceIdentify: Should crash on empty payload', async () => {
        const response = await (0, supertest_1.default)(app).post('/api/v1/device/identify');
        (0, globals_1.expect)(response.status).toBe(200);
        const validationResult = schema_1.DeviceIdentifySchema.safeParse(response.body);
        (0, globals_1.expect)(validationResult.success).toBe(true);
    });
});
//# sourceMappingURL=dummy.test.js.map