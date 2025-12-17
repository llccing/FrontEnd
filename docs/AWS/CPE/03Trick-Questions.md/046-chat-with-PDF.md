46.A company wants to use large language models （LLMs） with Amazon Bedrock  to develop a chat interface for the company's product manuals. The manuals are  stored as PDF files. Which solution meets these requirements MOST cost-effectively? 
A.Use prompt engineering to add one PDF file as context to the user prompt when  the prompt is submitted to Amazon Bedrock. 
B.Use prompt engineering to add all the PDF files as context to the user prompt  when the prompt is submitted to Amazon Bedrock. 
C.Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the  fine-tuned model to process user prompts. 
D.Upload PDF documents to an Amazon Bedrock knowledge base. Use the  knowledge base to provide context when users submit prompts to Amazon Bedrock. 


The correct answer is D. Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock.

Reason

This scenario describes a classic use case for RAG (Retrieval-Augmented Generation). Here is why Option D is the best and most cost-effective choice:

Cost Efficiency (Tokens): LLMs charge based on the number of "tokens" (words/parts of words) processed.
    Option B suggests sending all PDF manuals with every question. This would result in a massive number of input tokens, making every single chat interaction extremely expensive. It would also likely exceed the model's "Context Window" (the maximum amount of text it can process at once).
    Option D uses a Knowledge Base to search the PDFs first, extract only the specific paragraphs relevant to the user's question, and send only that small amount of text to the LLM. This drastically reduces token usage and cost.

Cost Efficiency (Training vs. Retrieval):
    Option C suggests Fine-tuning. Fine-tuning is very expensive because it requires renting powerful GPU instances to train the model. Furthermore, hosting a custom fine-tuned model usually requires "Provisioned Throughput" in Bedrock, which is a high, fixed hourly cost.
    Option D allows you to use standard, on-demand pricing (pay-as-you-go), which is much cheaper for this type of application.

Accuracy and Maintenance:
    Fine-tuning (Option C) is generally used to change how a model speaks (style/tone) rather than what it knows. Fine-tuned models can still hallucinate (make things up).
    Knowledge Bases (Option D) ground the model in facts. If you update a manual, you simply sync the knowledge base; you do not have to retrain the whole model.

Why the other options are incorrect:

A: This is not scalable. If you have 50 manuals, the system won't know which specific PDF to attach to the prompt without a search mechanism.
B: This is technically unfeasible (due to context window limits) and the most expensive way to handle inference (due to high token counts).
C: Fine-tuning is the most expensive operational approach and is harder to update when manuals change.