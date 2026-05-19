# AI Audit

## Original Prompt

Here is my CSS for this element. Rewrite this as an alternative version. Do not explain just show me a different way to style the same element.

---

## My Version

```css
.project-card {
    background-color: var(--color-card);
    padding: 20px;
    margin: 20px auto;
    border: 1px solid var(--color-border);
    max-width: 500px;
}
```

---

## AI Version

```css
.project-card {
    background-color: #1a1a24;
    border: 2px solid #a855f7;
    padding: 25px;
    margin: 30px auto;
    max-width: 550px;
    border-radius: 12px;
    text-align: center;
}
```

---

## Differences I Noticed

1. My version uses CSS variables while the AI version uses direct colour values.
2. The AI version added border-radius and text alignment.
3. The AI version uses larger spacing and a thicker border.

---

## Which Version I Am Keeping

I am keeping my version because it matches the rest of my portfolio design.