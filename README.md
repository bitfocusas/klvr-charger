# KLVR Charger Client Library

TypeScript + Zod + Axios + Jest = 🚀

## Usage

```typescript
import { KLVRCharger } from '@bitfocusas/klvr-charger'

async function client() {
    const charger = KLVRCharger('192.168.0.1')
    console.log(await charger.chargerStatus())
    console.log(await charger.deviceInfo())
}
client();
```

### Author

Bitfocus AS (c) 2024
William Viker <william@bitfocus.io>
