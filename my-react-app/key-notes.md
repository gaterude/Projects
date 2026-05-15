# React Key Prop Notes

React uses keys to track which items on the list is which when changes ar made on the list.
Keys help React know which items were added,or removed

Using the array index as a key can cause problems when items are reordered or filtered because the positions changes.
A good key should be unique and stable such as an id coming directly from the data.
This helps React perform better 