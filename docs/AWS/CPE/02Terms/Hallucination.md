**What is Hallucination**

In the context of Large Language Models (LLMs), a hallucination occurs when the model generates text that is grammatically correct, fluent, and sounds highly confident or plausible, but is factually incorrect or nonsensical. Because LLMs work by predicting the next most likely word (token) based on patterns rather than accessing a "truth" database, they can easily invent facts that look real.


**Data leakage**: This is a machine learning error that occurs during the training phase. It happens when information from the test dataset (the data the model shouldn't see yet) "leaks" into the training dataset. This leads to overly optimistic performance during testing but doesn't specifically refer to generating false content.

**Overfitting**: This occurs when a model learns the training data too well, including the noise and specific details, to the point that it fails to generalize to new data. While an overfitted model might perform poorly on new tasks, it is not the term used to describe an LLM confidently stating a falsehood.


**Underfitting**: This happens when a model is too simple to learn the underlying patterns in the data. An underfitted model typically performs poorly across the board (both on training and new data) and would likely produce low-quality or nonsensical text rather than "plausible but incorrect" marketing content.