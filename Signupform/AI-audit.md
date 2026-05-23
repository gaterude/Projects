# AI Audit – Email Validation Discussion

## Prompt
"My email validation just checks for @ and .. What are the edge cases this misses?"


**AI:**  
It can still accept invalid emails like:

- `@gmail.com` (missing username)
- `test@` (missing domain)
- `test@gmail` (missing top-level domain)
- `test@@gmail.com` (multiple @ symbols)
- `test..123@gmail.com` (double dots)
- `test gmail.com` (spaces)

A simple check is okay for learning projects, but production apps usually use regex or backend validation.

---

### Exchange 2

**Me:**  
Do I actually need to catch all of those for a signup form, or is this good enough for now?

**AI:**  
For a beginner React signup form, your current validation is mostly fine. The goal is usually to practice:

- controlled inputs
- state updates
- validation logic
- conditional rendering

You do not need perfect RFC-compliant email validation for a small project.

However, checking:
- one `@`
- at least one `.`
- no spaces

would make it slightly more reliable without making the code complicated.

---


### Exchange 3

**Me:**  
So what would be a good middle ground?

**AI:**  
A simple improvement could be:

```js
if (
  !form.email.includes("@") ||
  !form.email.includes(".") ||
  form.email.includes(" ")
) {
  newErrors.email = "Invalid email";
}
```

This keeps the logic readable while catching a few common invalid cases.

---

## Final Decision

I decided to keep the validator simple because this is a learning project focused on React state and form handling, not production-grade email validation.

I added a small improvement to reject spaces and included a comment explaining the trade-off.

```js
// Simple email validation for learning purposes.
// Production apps would usually use regex or backend validation.
if (
  !form.email.includes("@") ||
  !form.email.includes(".") ||
  form.email.includes(" ")
) {
  newErrors.email = "Invalid email";
}
```