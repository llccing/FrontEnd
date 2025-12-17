36.A company built a deep learning model for object detection and deployed the  model to production.Which Al process occurs when the model analyzes a new image  to identify objects? 
A.Training 
B.Inference 
C.Model deployment 
D.Bias correction 


The correct answer is B. Inference.

Reasoning

Inference is the process where a trained machine learning model is put to work to make predictions on new, unseen data.

Here is a breakdown of why B is correct and the others are not:

A. Training: This is the phase where the model learns from data before it is ready to be used. In this phase, the model is fed thousands of labeled images to learn what objects look like. In the question, the model has already been built and deployed, so the training phase is over.
B. Inference (Correct): Once the model is trained and deployed, every time it processes a new input (in this case, a new image) to generate a result (identifying objects), it is performing inference. It is "inferring" the answer based on what it learned previously.
C. Model deployment: This is the act of moving the model from the development environment to the production environment so it can be used. The question states the model was already deployed; the act of analyzing the image happens after deployment.
D. Bias correction: This is a specific technique used to fix unfairness or inaccuracies in a model (usually during development or monitoring). It is not the general name for the process of analyzing an image.