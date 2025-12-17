ROUGE, or Recall-Oriented Understudy for Gisting Evaluation,[1] is a set of metrics and a software package used for evaluating automatic summarization and machine translation software in natural language processing. The metrics compare an automatically produced summary or translation against a reference or a set of references (human-produced) summary or translation. ROUGE metrics range between 0 and 1, with higher scores indicating higher similarity between the automatically produced summary and the reference.


**Recall-Oriented Understudy for Gisting Evaluation (简称 ROUGE)** 是自然语言处理（NLP）领域中非常经典的一个评估指标。

以下是关于它的详细中文解释，以及它为什么不适合这道题目：

### 1. ROUGE 是什么？
ROUGE 是一组用于评估**自动文本摘要 (Text Summarization)** 和**机器翻译**质量的指标。

*   **它的全称含义：**
    *   **Recall-Oriented（面向召回率）：** 它主要关注“召回率”，即参考答案中的内容有多少被模型生成的文本覆盖了。
    *   **Understudy（替补/代替者）：** 意指它可以代替昂贵且耗时的人工评估，作为自动化的评估手段。
    *   **Gisting（提取大意）：** 指生成摘要或提取主旨的过程。
    *   **Evaluation（评估）：** 衡量效果好坏。

### 2. 它如何工作？
ROUGE 通过比较**模型生成的文本**（System Summary）与**人类写的参考文本**（Reference Summary）之间的**重叠程度**来打分。

它主要计算 **N-gram（N元语法）的重叠率**。
*   **ROUGE-N:** 计算生成的摘要和参考摘要之间 N 个连续单词的重叠情况。
    *   例如，如果参考答案是“猫在睡觉”，模型生成了“猫睡觉”，ROUGE 会计算这两个句子里共同出现的词。
*   **ROUGE-L:** 基于最长公共子序列（Longest Common Subsequence），看句子结构的相似度。
