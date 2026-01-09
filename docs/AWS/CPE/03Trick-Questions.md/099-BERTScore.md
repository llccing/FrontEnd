A company has developed a generative text summarization model by using 
Amazon Bedrock. The company will use Amazon Bedrock automaticl model 
evaluation capabilities. Which metric should the company use to evaluate the 
accuracy of the model? 
A.Area Under the ROC Curve （AUC） score 
B.F1 score 
C.BERTScore 
D.Real world knowledge （RWK） score 


The correct answer is C. BERTScore.

Amazon Bedrock provides different automatic metrics depending on the specific task type you select for model evaluation. For Text Summarization, the accuracy metric is calculated specifically using BERTScore. 

Why BERTScore for Summarization?

Unlike traditional metrics that look for exact word matches, BERTScore uses contextual embeddings (from the BERT model family) to measure the semantic similarity between the model-generated summary and the reference summary.

Synonym Awareness: It can recognize that "The car is fast" and "The vehicle is quick" have the same meaning, even though the words are different.

Contextual Understanding: It evaluates how well the key points and context are captured, which is the primary goal of summarization.


Comparison of Bedrock Automatic Metrics
Amazon Bedrock maps "Accuracy" to different specific calculations based on the Task Type:

Task Type,Accuracy Metric Used,Description

Text Summarization,BERTScore,Measures semantic similarity between tokens using cosine similarity of embeddings.

Question & Answer,F1 Score,Measures the word overlap (precision/recall) between the answer and the ground truth.

General Text Generation,RWK Score,(Real World Knowledge) Evaluates the model's ability to encode factual knowledge.

Text Classification,Accuracy,A simple ratio of correctly predicted classes to total instances.
