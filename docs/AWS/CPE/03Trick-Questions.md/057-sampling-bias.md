57.A company has installed a security camera. The company uses an ML model to  evaluate the security camera footage for potential thefts. The company has  discovered that the model disproportionately flags people who are members of a  specific ethnic group. Which type of bias is affecting the model output? 
A.Measurement bias 
B.Sampling bias 
C.Observer bias 
D.Confirmation bias 


The correct answer is B. Sampling bias.

Explanation

To understand why Sampling bias is the correct answer, let's look at how machine learning models are trained and how this specific error occurs:

1. Why it is Sampling Bias:
Sampling bias occurs when the data used to train the model does not accurately represent the real-world environment where the model is deployed. In this scenario, if the training dataset contained a disproportionately high number of images of a specific ethnic group associated with "theft," or if the dataset lacked enough diverse "normal" behavior from that group, the model "learns" a false correlation. Because the sample of data was skewed or unrepresentative, the model’s output becomes biased against that specific group.

2. Why the other options are incorrect:

A. Measurement bias: This occurs when there is an issue with the way data is collected or measured (e.g., a faulty sensor, a blurry camera, or inconsistent labeling). While this involves the "tools," it doesn't specifically explain the disproportionate flagging of an ethnic group unless the camera itself failed to capture certain skin tones correctly (which is a different technical issue).
C. Observer bias (or Experimenter bias): This happens when the person conducting the research or labeling the data projects their own subconscious expectations onto the data. While observer bias can lead to sampling bias (if the human labeling the footage is biased), in the context of ML model performance metrics, "Sampling Bias" is the standard term for the resulting unrepresentative dataset.
D. Confirmation bias: This is a human cognitive bias where a person looks for information that confirms their existing beliefs and ignores information that contradicts them. This affects how humans interpret data, rather than how a model systematically processes a dataset.

Summary
Because the model is incorrectly identifying a specific demographic group, it is a sign that the training data (the sample) was not balanced or representative of the general population, leading to a biased algorithmic outcome.