50.A company is using an Amazon Bedrock base model to summarize documents for  an internal use case. The company trained a custom model to improve the  summarization quality. Which action must the company take to use the custom  model through Amazon Bedrock? 
A.Purchase Provisioned Throughput for the custom model. 
B.Deploy the custom model in an Amazon SageMaker endpoint for real-time  inference. 
C.Register the model with the Amazon SageMaker Model Registry. D.Grant access to the custom model in Amazon Bedrock. 


The correct answer is A. Purchase Provisioned Throughput for the custom model.

Reason

In Amazon Bedrock, the pricing and consumption models differ between Base Models and Custom Models (models you have fine-tuned or performed continued pre-training on).

Base Models: Can be used via On-Demand throughput (pay-per-token) or Provisioned Throughput.
Custom Models: To run inference on a custom model in Amazon Bedrock, you are required to purchase Provisioned Throughput. Because the model is unique to your organization, AWS does not keep it loaded in a shared environment. You must provision dedicated "Model Units" to host the model so it is available for your API calls.

Why the other options are incorrect:

B. Deploy the custom model in an Amazon SageMaker endpoint: Amazon Bedrock is a fully managed service that abstracts the underlying infrastructure. You do not deploy Bedrock models to SageMaker endpoints manually; Bedrock handles the hosting once you purchase the provisioned throughput.
C. Register the model with the Amazon SageMaker Model Registry: While SageMaker Model Registry is a tool for tracking model versions, it is not the mechanism used to make a Bedrock custom model available for inference.
D. Grant access to the custom model in Amazon Bedrock: "Model Access" in Bedrock is used to enable third-party base models (like Anthropic Claude or AI21 Labs Jurassic). Since you created the custom model, your account already owns it and has access to it; the barrier to using it is infrastructure provisioning, not permission.
