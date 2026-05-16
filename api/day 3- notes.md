The naive +2 button failed because Because both setCount calls  the same stale count.

React batches state updates so the second update did not see the updated value from the first one.

Functional updates fix this problem because React gives the latest state value to the updater function.

Using:

setCount((c) => c + 1);

ensures each update uses the newest count.