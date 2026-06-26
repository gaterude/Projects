# schema-notes.md

## 1. Why UUID instead of auto-incrementing integers?

UUIDs are globally unique so records can be created on different systems without causing ID conflicts. They are also more secure compared to intergers
## 2. Why TIMESTAMPTZ instead of TIMESTAMP?

`TIMESTAMPTZ` stores the date and time together with time zone information ensuring accuracy for user in diffrent timezones while `TIMESTAMP` does not consider timezone when storing date and time

## 3. What does the CHECK (status IN (...)) constraint buy you over just a comment?

`CHECK`  is enforced by the database so only valid status values can be stored, comment only explains what values should be used but it does not stop someone from inserting invalid data. 

## 4. Why ON DELETE CASCADE on conversations.lead_id and messages.lead_id?

`ON DELETE CASCADE` automatically deletes related conversations and messages when a lead is deleted. 
