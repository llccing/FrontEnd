29.A company wants to use a large language model （LLM） to develop a  conversational agent. The company needs to prevent the LLM from being  manipulated with common prompt engineering techniques to perform undesirable  actions or expose sensitive information. Which action will reduce these risks? 
A.Create a prompt template that teaches the LLM to detect attack patterns. B.Increase the temperature parameter on invocation requests to the LLM. C.Avoid using LLMs that are not listed in Amazon SageMaker. 
D.Decrease the number of input tokens on invocations of the LLM. 


**A. Create a prompt template that teaches the LLM to detect attack patterns.**

Using a strong system/prompt template (guardrails) that explicitly instructs the model to **recognize and refuse prompt-injection/jailbreak patterns** and to **never reveal sensitive data** is the most direct way among these options to reduce manipulation risk.

- **B** (increase temperature) generally makes outputs *less predictable* and can increase risk.
- **C** is unrelated to prompt-injection resilience.
- **D** (fewer input tokens) might limit context but doesn’t meaningfully stop common prompt attacks.
