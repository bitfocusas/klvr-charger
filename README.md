# KLVR Charger Client Library

TypeScript + Zod + Axios + Jest = 🚀

## Without a physical decvice present

```typescript
import { KLVRCharger, KLVRDummyDevice } from '@bitfocusas/klvr-charger'

const server = KLVRDummyDevice()
server.listen(8000, () => {
    console.log("listening")
    client()
})

async function client() {
    const charger = KLVRCharger('127.0.0.1')
    console.log(await charger.chargerStatus())
}
```

## With a device present (congrats!)

```typescript
import { KLVRCharger, KLVRDummyDevice } from '@bitfocusas/klvr-charger'

async function client() {
    const charger = KLVRCharger('192.168.0.1')
    console.log(await charger.chargerStatus())
}
client();
```

### Author

Bitfocus AS (c) 2024
William Viker <william@bitfocus.io>
