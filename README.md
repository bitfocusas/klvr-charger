# KLVR Charger Client Library

TypeScript + Zod + Axios + Jest = 🚀

A TypeScript client library for interacting with KLVR battery chargers via their v2 API.

## Features

- Full TypeScript support with type safety
- Zod schema validation for all API responses
- Support for KLVR v2 API endpoints
- Comprehensive test suite with dummy device
- Error handling and last error retrieval

## API Endpoints

The library supports the following v2 API endpoints:

- `GET /api/v2/device/info` - Get device information
- `GET /api/v2/charger/status` - Get charger and battery status
- `POST /api/v2/device/identify` - Identify the device

## Usage

```typescript
import { KLVRCharger } from '@bitfocusas/klvr-charger'

async function client() {
    const charger = KLVRCharger('192.168.0.1')
    
    // Get device information
    const deviceInfo = await charger.deviceInfo()
    console.log(deviceInfo)
    
    // Get charger status with battery information
    const chargerStatus = await charger.chargerStatus()
    console.log(chargerStatus)
    
    // Identify the device
    const identified = await charger.deviceIdentify()
    console.log(identified)
    
    // Get last error if any
    const lastError = charger.getLastError()
    if (lastError) {
        console.error('Last error:', lastError)
    }
}
client();
```

## Response Types

### DeviceInfo
```typescript
{
  deviceInternalTemperatureC: number
  name: string
  firmwareVersion: string
  firmwareBuild: string
  ip: {
    type: 'dhcp' | 'static'
    ipAddress: string
    gatewayAddress: string
    mask: string
    macAddress: string
  }
}
```

### ChargerStatus
```typescript
{
  deviceStatus: 'ok' | 'error'
  batteries: Array<{
    index: number
    batteryBayTempC: number
    batteryDetected: string
    slotState: 'charging' | 'empty' | 'not charging' | 'error' | 'done'
    stateOfChargePercent: number
    timeRemainingSeconds: number
    errorMsg: string
  }>
}
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the library
npm run build
```

### Author

Bitfocus AS (c) 2024
William Viker <william@bitfocus.io>
