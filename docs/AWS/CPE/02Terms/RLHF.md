## Reinforcement learning from human feedback

Reinforcement Learning from Human Feedback (RLHF) is a technique used to fine-tune large language models (LLMs) using human preferences. 

### How RLHF Works:

Response Generation: An LLM (which can be the target model or another model) generates sets or pairs of responses to a given prompt.
Human Evaluation: Human moderators rank these responses based on preference. This ranking considers factors like helpfulness and harmlessness, especially when prompts are designed to elicit harmful responses.
Reward Model Training: A reward model is trained using the human preference data. This model learns to predict a preference score for a given prompt.
Model Optimization: The original LLM is then optimized using reinforcement learning, guided by the reward model. The goal is to generate responses that maximize the reward score, aligning the model's behavior with human preferences and safety guidelines. RLHF also tries to embed the concept of safety by optimizing the model using human feedback.