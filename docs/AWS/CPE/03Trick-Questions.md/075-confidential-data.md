An AI practitioner trained a custom model on Amazon Bedrock by using a 
training dataset that contains confidential data. The AI practitioner wants to ensure 
that the custom model does not generate inference responses based on confidential 
data. How should the AI practitioner prevent responses based on confidential data? 
A.Delete the custom model. Remove the confidential data from the training dataset. 
Retrain the custom model. 
B.Mask the confidential data in the inference responses by using dynamic data 
masking. 
C.Encrypt the confidential data in the inference responses by using Amazon 
SageMaker. 
D.Encrypt the confidential data in the custom model by using AWS Key Management 
Service （AWS KMS）。


**The correct answer is A.**
Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model.

Detailed Explanation

To understand why A is the only effective solution, we need to look at how Large Language Models (LLMs) and training/fine-tuning work:

1. The Nature of Model Training (The "Why")
When you train or fine-tune a custom model on Amazon Bedrock, the data in your training set is used to update the weights and parameters of the model. The model essentially "learns" and "memorizes" patterns from that data. 
If confidential data (like social security numbers, private keys, or internal strategy documents) is included in the training set, that information becomes part of the model's internal knowledge base. 
There is always a risk that a user could provide a specific prompt that causes the model to "leak" or hallucinate that confidential information in its response.

2. Why the other options fail:

B. Masking data in inference responses: While services like Amazon Bedrock Guardrails can perform PII (Personally Identifiable Information) masking, this is a "reactive" filter. It happens after the model has already generated the thought. If the model generates confidential data in a way the filter doesn't recognize (e.g., slightly altered formatting), the data will leak. Furthermore, it doesn't solve the root problem: the model still "knows" the secret data.
C. Encrypting responses via SageMaker: This is technically irrelevant. Amazon Bedrock and Amazon SageMaker are separate services. Even if you encrypted the output, the authorized user receiving the decrypted response would still see the confidential data. It prevents a "man-in-the-middle" attack but doesn't stop the model from generating the data in the first place.
D. Encrypting the model with AWS KMS: AWS KMS is used for Encryption at Rest. This means that if someone were to physically steal the hard drives from an AWS data center or gain unauthorized access to your S3 bucket, they couldn't read the model file. However, when the model is "running" (inference), it is decrypted so it can function. Encryption at rest has zero impact on what the model actually says during a chat session.

Summary of Best Practices
In AI security, this is known as Data Minimization and Sanitization. Before any data is used for fine-tuning or training a custom model:
Identify PII/Confidential data.
Scrub, redact, or anonymize the data.
Validate the dataset.
Train the model only after the dataset is clean.

If the model has already been trained on "dirty" data (confidential data), the only way to ensure that information is completely removed from the model's "memory" is to delete that version and retrain it using a clean dataset.