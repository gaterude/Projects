# Layout Notes

Normal flow is just the normal way elements appear on a webpage before you start changing positions. Block elements usually stack on top of each other while inline elements stay next to each other. Elements in normal flow also affect the spacing and position of other elements around them.

A containing block is basically the area an element uses as a reference when it is being positioned. Things like top, left, right, and bottom depend on that area.

When an element has position: absolute, it checks for the nearest parent with a position value that is not static. That parent becomes the reference point for where the element should go.

If there is no positioned parent, the element uses the whole viewport instead. That is why absolute elements can sometimes appear at random corners of the screen.

People usually add position: relative to a parent so the absolute child stays inside that section and does not move around the whole page.

Sticky and fixed positioning are different because they stay visible when scrolling, but they behave in different ways depending on the scroll position.