## SageMaker

Bringing together widely adopted AWS machine learning (ML) and analytics capabilities, the next generation of Amazon SageMaker delivers an integrated experience for analytics and AI with unified access to all your data. Collaborate and build faster from a unified studio using familiar AWS tools for model development in SageMaker AI (including HyperPod, JumpStart, and MLOps), generative AI, data processing, and SQL analytics, accelerated by Amazon Q Developer, the most capable generative AI assistant for software development. Access all your data whether it’s stored in data lakes, data warehouses, or third-party or federated data sources, with governance built in to meet enterprise security needs.

### Amazon SageMaker Feature Store

A fully managed service for machine learning features

Amazon SageMaker Feature Store is a fully managed, purpose-built repository to store, share, and manage features for machine learning (ML) models. Features are inputs to ML models used during training and inference. For example, in an application that recommends a music playlist, features could include song ratings, listening duration, and listener demographics. Features are used repeatedly by multiple teams and feature quality is critical to ensure a highly accurate model. Also, when features used to train models offline in batch are made available for real-time inference, it’s hard to keep the two feature stores synchronized. SageMaker Feature Store provides a secured and unified store to process, standardize, and use features at scale across the ML lifecycle.

### Amazon SageMaker Data Wrangler

The fastest and easiest way to prepare data for machine learning - now in SageMaker Canvas. 

Amazon SageMaker Data Wrangler reduces data prep time for tabular, image, and text data from weeks to minutes. With SageMaker Data Wrangler you can simplify data preparation and feature engineering through a visual and natural language interface. Quickly select, import, and transform data with SQL and over 300 built-in transformations without writing code. Generate intuitive data quality reports to detect anomalies across data types, and estimate model performance. Scale to process petabytes of data.

#### the difference between SageMaker Feature Store and SageMaker Data Wrangler.

SageMaker Data Wrangler and SageMaker Feature Store solve different parts of the ML data lifecycle:

SageMaker Data Wrangler (prepare/transform data)
Purpose: A data preparation tool to clean, transform, and engineer features from raw data.

When you use it: During data exploration and feature engineering (before training).
What it does:
  Connects to data sources (S3, Redshift, Athena, Snowflake, etc.)
  Lets you apply transforms (joins, filters, missing value handling, encoding, scaling, text/date parsing, outlier handling)
  Can generate a repeatable pipeline (SageMaker Processing job / SageMaker Pipelines)
  Supports data quality insights and some bias/leakage checks depending on workflow
Output: Writes transformed datasets back to S3, and/or exports the steps as code/pipelines.
Key idea: It’s an interactive + automatable ETL/feature engineering environment.

SageMaker Feature Store (store/serve features)
Purpose: A centralized repository for engineered features so they can be reused consistently across training and inference.

When you use it: After you’ve defined features—so you can store them and retrieve them reliably for:
  model training datasets
  real-time or batch inference
What it does:
  Manages feature groups (schemas, record identifiers, event times)
  Supports an offline store (historical features, typically in S3) for training
  Supports an online store (low-latency lookup) for real-time inference
  Helps prevent training/serving skew by using the same feature definitions/data source
  Enables feature reuse across teams and models, with metadata and lineage
Output: Feature values accessible via APIs for training/inference.

Core difference in one line
Data Wrangler = create/transform features (feature engineering + ETL).
Feature Store = persist, manage, and serve features (reuse + consistency for training/inference).

How they work together (common pattern)
Use Data Wrangler to clean raw data and engineer features.
Write the resulting features into Feature Store (offline and/or online).
Training pulls historical features from the offline store.
Real-time inference queries the online store for the latest features.

Quick “which should I use?” guide
Need to explore data and build transformations quickly? → Data Wrangler
Need a central place to reuse features and serve them in production (online/offline)? → Feature Store
Doing production ML with multiple models/teams and want consistency? → Feature Store (often plus Data Wrangler upstream)

If you tell me whether your use case is batch scoring, real-time inference, or training-only, I can suggest a typical architecture and which components are worth adopting.

### Amazon SageMaker Clarify

Evaluate models and explain model predictions.

### Amazon SageMaker Model Cards

Use Amazon SageMaker Model Cards to document critical details about your machine learning (ML) models in a single place for streamlined governance and reporting. Model cards can help you to capture key information about your models throughout their lifecycle and implement responsible AI practices.

Catalog details such as the intended use and risk rating of a model, training details and metrics, evaluation results and observations, and additional call-outs such as considerations, recommendations, and custom information. By creating model cards, you can do the following:

Provide guidance on how a model should be used.

Support audit activities with detailed descriptions of model training and performance.

Communicate how a model is intended to support business goals.

Model cards provide prescriptive guidance on what information to document and include fields for custom information. After creating a model card, you can export it to a PDF or download it to share with relevant stakeholders. Any edits other than an approval status update made to a model card result in additional model card versions in order to have an immutable record of model changes.


### Amazon SageMaker Model Monitor

Keep machine learning models accurate over time

Amazon SageMaker Model Monitor helps you maintain high quality machine learning (ML) models by automatically detecting and alerting on inaccurate predictions from models deployed in production.

The accuracy of ML models can deteriorate over time, a phenomenon known as model drift. Many factors can cause model drift such as changes in model features. The accuracy of ML models can also be affected by concept drift, the difference between data used to train models and data used during inference.

Amazon SageMaker Model Monitor helps you maintain high quality ML models by detecting model and concept drift in real-time, and sending you alerts so you can take immediate action. Model and concept drift are detected by monitoring the quality of the model based on independent and dependent variables. Independent variables (also known as features) are the inputs to an ML model, and dependent variables are the outputs of the model. For example, with an ML model predicting a bank loan approval, independent variables could be age, income, and credit history of the applicant, and the dependent variable would be the actual result of the loan application. Further, SageMaker Model Monitor constantly monitors model performance characteristics such as accuracy which measures the number of correct predictions compared to the total number of predictions so you can take action to address anomalies.

Additionally, SageMaker Model Monitor is integrated with Amazon SageMaker Clarify to help you identify potential bias in your ML models with model bias detection.

### Amazon SageMaker Serverless Inference

Amazon SageMaker Serverless Inference is a purpose-built inference option that makes it easy for you to deploy and scale machine learning (ML) models. It provides a pay-per-use model, which is ideal for services where endpoint invocations are infrequent and unpredictable. Unlike a real-time hosting endpoint, which is backed by a long-running instance, compute resources for serverless endpoints are provisioned on demand, thereby eliminating the need to choose instance types or manage scaling policies.
