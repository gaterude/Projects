## Comparison 2 – Article + Aside Layout

### My Approach
I used display: inline-block for both the article and aside sections.

### AI Approach
AI suggested using float: left and float: right with a clearfix.

### Trade-offs
Inline-block was easier to understand and did not require clearfix hacks. However, inline-block can create spacing issues caused by whitespace in HTML.

The float approach is more traditional and works well for older layouts, but it removes elements from normal flow and usually needs clearfix to prevent collapsing parent containers.

### Final Decision
I shipped the inline-block version because it felt cleaner and easier to maintain for this exercise.