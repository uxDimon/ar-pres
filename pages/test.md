---
routeAlias: test
---

# Page test

This is a normal page

```ts {all|11,13|all} {lines:true, startLine:9}
import { ref } from "vue";

const props = withDefaults(
	defineProps<{
		count?: number;
	}>(),
	{
		count: 0,
	}
);

const counter = ref(+props.count);
```

<v-clicks depth="2">

-   Item 1
    -   Item 1.1
    -   Item 1.2

</v-clicks>

::counter{count=2}
