## Day 1 Notes

If I needed to print 20 numbers this way the code would become very long and  nested. It would be difficult to keep track of where each callback starts and ends because of all the indentation and closing brackets. This makes the code hard to read debug and maintain. A small mistake  could cause errors that are difficult to find. I would want a better tool that lets me write asynchronous code in a cleaner and more readable way without excessive nesting.

## The Event Loop

### Diagram

```text
Call Stack
    |
    v
Runs code

setTimeout(...)
    |
    v
Web APIs (timer runs here)
    |
    v
Task Queue
    |
    v
Event Loop checks if the Call Stack is empty
    |
    v
Callback goes back to the Call Stack and runs
```

### My Explanation

Synchronous code runs one line after another, and JavaScript waits for each line to finish before moving on. Asynchronous code lets some tasks happen in the background while the rest of the program keeps running. When a timer created with `setTimeout` finishes, its callback is put into the task queue. The event loop keeps checking whether the call stack is empty so it can move queued callbacks back onto the stack. `setTimeout(..., 0)` does not run immediately because the current code on the call stack must finish first.

