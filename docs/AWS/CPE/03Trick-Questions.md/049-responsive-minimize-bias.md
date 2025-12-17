49.(多选题)A loan company is building a generative Al-based solution to offer new  applicants discounts based on specific business criteria. The company wants to  build and use an Al model responsibly to minimize bias that could negatively affect  some customers. Which actions should the company take to meet these  requirements? （Choose two.） 
A.Detect imbalances or disparities in the data. 
B.Ensure that the model runs frequently. 
C.Evaluate the model's behavior so that the company can provide transparency to  stakeholders. 
D.Use the Recall-Oriented Understudy for Gisting Evaluation （ROUGE） technique  to ensure that the model is 100% accurate. 
E.Ensure that the model's inference time is within the accepted limits. 


The correct answers are A and C.

Explanation

The question focuses on Responsible AI and minimizing bias in a financial context (loan discounts). The selected actions must directly address fairness, transparency, and data integrity.

A. Detect imbalances or disparities in the data:
    Why it's correct: Bias in AI models is almost always a result of biased training data. If specific demographic groups are underrepresented or historically disadvantaged in the training data (imbalances), the model will produce discriminatory results. Detecting and mitigating these disparities is the first and most critical step in minimizing bias.

C. Evaluate the model's behavior so that the company can provide transparency to stakeholders:
    Why it's correct: Transparency and explainability are core pillars of Responsible AI. In the financial sector, companies must understand why a model makes a specific decision (like offering a discount) to ensure it isn't basing decisions on protected attributes (like race or gender). Continuous evaluation allows the company to detect unfair behavior and explain decisions to regulators and customers.

Why the other options are incorrect:

B. Ensure that the model runs frequently: This is an operational scheduling task. It has no impact on the fairness or bias of the model's decisions.
D. Use ROUGE to ensure 100% accuracy:
    First, ROUGE is a metric used for text summarization (comparing generated text to a reference), not for evaluating loan/business logic bias.
    Second, it is impossible to guarantee that a Machine Learning model is "100% accurate."
E. Ensure that the model's inference time is within the accepted limits: This refers to latency and performance (how fast the model works), not whether the model is fair or unbiased.


### 3. 为什么选项 D 是错误的？

在你的题目场景中，ROUGE 是一个错误的选项，原因如下：

1.  **应用场景不同：**
    *   题目中的贷款模型是一个**决策/分类模型**（决定是否给折扣），输出的是由于特定的业务标准得出的数值或分类（是/否）。
    *   ROUGE 是用来评估**文本生成**（如写文章摘要、翻译句子）的相似度的。用 ROUGE 来评估贷款数据是不合逻辑的。
2.  **无法衡量偏见 (Bias)：**
    *   ROUGE 只能告诉你生成的文字和标准答案像不像，它无法检测模型是否对某个种族、性别或年龄段存在歧视（Bias）。
3.  **“100% 准确”是不可能的：**
    *   选项 D 说要使用 ROUGE 确保模型“100% accurate”。在机器学习中，几乎没有任何技术能保证模型 100% 准确。此外，ROUGE 的分数通常是 0 到 1 之间的数值，代表相似度，而不是“准确率”。

**总结：**
ROUGE 是用来给**写摘要的 AI** 打分的，看它写得全不全面；而题目需要的是确保**贷款 AI** 公平、没有偏见，因此 ROUGE 完全不适用。