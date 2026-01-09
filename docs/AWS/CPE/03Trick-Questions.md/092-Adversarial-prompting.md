Which prompting technique can protect against prompt injection attacks? 
A.Adversarial prompting 
B.Zero-shot prompting 
C.Least-to-most prompting 
D.Chain-of-thought prompting 



The correct answer is A. Adversarial prompting.

While adversarial prompting is often used as a method to test or execute attacks, it is also a primary technique used by developers to protect against prompt injection. By using adversarial techniques during the training or fine-tuning phase, developers can teach a model to recognize and ignore malicious instructions.

Why Adversarial Prompting?


In the context of defense, this is often referred to as Adversarial Robustness Training. It involves:

- Red Teaming: Proactively trying to "break" the model with injection attacks to identify vulnerabilities.
- Instructional Guardrails: Teaching the model to prioritize its system instructions over user-provided data that attempts to override them.
- Input Sanitization: Crafting prompts that explicitly tell the model to treat user input as data only, not as commands.


Why the other options are incorrect:

Technique,Description,Why it doesn't protect against injection
Zero-shot,Asking a model to perform a task without any examples.,It provides no defensive framework; a model is just as vulnerable to malicious input.

Least-to-most,Breaking a complex problem down into smaller sub-problems.,"This is a reasoning strategy. An attacker could still inject a ""sub-problem"" that hijacks the model."

Chain-of-thought,Encouraging the model to show its step-by-step reasoning.,"While it improves logic, it can actually make injections easier to see, but it doesn't stop the model from following a malicious instruction."