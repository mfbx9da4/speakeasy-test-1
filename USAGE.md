<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "a";

async function run() {
    const sdk = new SDK();

    const limit = 21453;

    const result = await sdk.pets.listPets(limit);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->