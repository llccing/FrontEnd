A company has fine-tuned a large language model （LLM） to answer questions 
for a help desk. The company wants to determine if the fine-tuning has enhanced the 
model's accuracy. Which metric should the company use for the evaluation? 
A.Precision 
B.Time to first token 
C.F1 score 
D.Word error rate 

The correct answer is C. F1 score.

In the context of evaluating large language models (LLMs) for tasks like a help desk (Question Answering), the F1 score is a standard metric used to measure accuracy. It provides a balanced assessment of how well the model's response matches the ground-truth answer.

Why F1 Score is the Best Choice
For text-based tasks, "accuracy" isn't a simple "yes/no" calculation. The F1 score is used because it combines two critical factors:

Precision: How much of the model's generated answer is relevant and correct?

Recall: Did the model capture all the important information from the reference answer?

By taking the harmonic mean of these two, the F1 score rewards models that are both concise (high precision) and comprehensive (high recall), which is ideal for a help desk environment where users need both correct and complete information.

Why the other options are incorrect:

Metric,Primary Use Case,Why it's not the best for LLM accuracy

Precision,Classification / Retrieval,"Precision alone ignores ""Recall."" A model could give a very short, one-word correct answer and have 100% precision, but fail to actually help the user (low recall)."

Time to first token,Performance / Latency,"This measures speed, not correctness. It tells you how fast the model starts responding, which is irrelevant to whether the answer is accurate."

Word error rate,Speech-to-Text (ASR),"This measures the number of insertions, deletions, or substitutions. It is used to see how well a transcript matches audio, not how well an AI understands and answers a question."


Common Evaluation Pair

In professional machine learning evaluations (such as the SQuAD benchmark), the F1 score is almost always paired with Exact Match (EM). While EM requires the model's answer to be character-perfect, the F1 score is preferred in help desk scenarios because it is more "forgiving"—it recognizes when a model provides the right information even if the wording or phrasing differs slightly from the reference.

