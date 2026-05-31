# Day 2 Notes - useEffect

## Mount Effect

Using an empty dependency array ([]) makes the effect run once when the component mounts.

## Dependency Array

Adding a state variable to the dependency array causes the effect to run whenever that value changes.

## Cleanup Functions

A cleanup function runs when a component unmounts.

## localStorage

useEffect can be used to load data when the component mounts and save data whenever state changes.

This allows data to persist after refreshing the page.

## Stale Closure Bug

The interval captured count = 0 from the first render.

Because the effect had an empty dependency array, it never got the updated count value.

Bad fix:
Add count to dependencies, but this recreates the interval every second.

Correct fix:
Use a functional updater:

setCount((c) => c + 1)

This always uses the latest state without restarting the interval.
