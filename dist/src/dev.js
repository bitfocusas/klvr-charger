"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const dummy_1 = require("./dummy");
const server = (0, dummy_1.KLVRDummyDevice)();
server.listen(8000, () => {
    console.log("listening");
    client();
});
async function client() {
    const charger = (0, client_1.KLVRCharger)('127.0.0.1');
    console.log(await charger.chargerStatus());
}
//# sourceMappingURL=dev.js.map