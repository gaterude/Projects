Customer --> React frontend --> Express backend --> Daraja API --> Customer's phone
                                                 <--  callback  <-- Daraja
Daraja calls the server upon completion of payment through a callback  because safaricom must notify the application whether application passed or failed. 
 The  callback URL must be publicly accessible on the internet for daraja to reach the application ngrok provides a public URL that forwards requests to your local computer. 
 Without Daraja would be unable to deliver the callback. If the callback is lost, the customer could be successfully charged, but your system would not receive confirmation of the payment. 
 As a result, the transaction might not be recorded.
