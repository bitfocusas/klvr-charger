import { KLVRCharger } from './client'
import { KLVRDummyDevice } from './dummy'

const server = KLVRDummyDevice()
server.listen(8000, () => {
	console.log("listening")
	client()
})

async function client() {
	const charger = KLVRCharger('127.0.0.1')
	console.log(await charger.chargerStatus())
}
