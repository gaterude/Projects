# Day 4 Notes

We use `[...tasks, newTask]` instead of `tasks.push(newTask)` because React state should not be changed directly. The spread operator creates a brand new array with the old tasks and the new one added.

If we mutate state directly using `push`, React may not detect that anything changed because the array reference stays the same. This can cause the UI not to update correctly.

React compares old state and new state by reference. Creating a new array tells React that the state changed, so it re-renders the component properly.