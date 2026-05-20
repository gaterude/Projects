# AI Audit

## Comparison Exercise

### Prompt Used

"Here is my CSS for this element. Rewrite this as an alternative version. Do not explain — just show me a different way to style the same element."

---

## My Version

```css
article {
  max-width: 700px;
  margin: 32px auto;
  padding: 20px;
  border: 2px solid var(--color-muted);
  background-color: var(--color-bg);
  border-radius: 10px;
}
  ## AI-VERSION
  article {
  width: 80%;
  padding: 24px;
  border-left: 5px solid blue;
  background: #fafafa;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
Differences I Noticed
My version uses max-width while AI used percentage width.
AI added a box-shadow while mine uses a simple border.
My spacing is more minimal while AI's is more decorative.
Which Version I Am Keeping

I am keeping a hybrid version because I like my layout structure but I also like the AI shadow effect.
