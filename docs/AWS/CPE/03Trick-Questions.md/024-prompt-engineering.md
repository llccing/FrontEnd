24.A company wants to make a chatbot to help customers. The chatbot will help  solve technical problems without hurnan intervention.The company chose a  foundation model （FM） for the chatbot. The chatbot needs to produce responses  that adhere to company tone.Which solution meets these requirements? 
A.Set a low limit on the number of tokens the FM can produce.
B.Use batch inferencing to process detailed responses. 
C.refine the prompt until the FM produces the desired responses. 
D.Define a higher number for the temperature parameter. 


**Correct answer: C. Refine the prompt until the FM produces the desired responses.**

To ensure the chatbot’s replies **adhere to the company tone**, you need **prompt engineering** (and typically a fixed “system”/instruction prompt with style guidelines, do/don’t rules, examples, etc.). Refining the prompt is the direct way to guide a foundation model’s **tone and response style** without human intervention.

Why the others don’t meet the requirement:
- **A** limits response length, not tone.
- **B** batch inference is about throughput/cost, not tone control.
- **D** higher temperature increases randomness/creativity, making tone **less consistent**, not more.