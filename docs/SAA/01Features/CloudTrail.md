## AWS CloudTrail

CloudTrail enables auditing, security monitoring, and operational troubleshooting by tracking user activity and API usage. CloudTrail logs, continuously monitors, and retains account activity related to actions across your AWS infrastructure, giving you control over storage, analysis, and remediation actions.

CloudTrail helps you prove compliance, improve security posture, and consolidate activity records across Regions and accounts. CloudTrail provides visibility into user activity by recording actions taken on your account. CloudTrail records important information about each action, including who made the request, the services used, the actions performed, parameters for the actions, and the response elements returned by the AWS service. This information helps you track changes made to your AWS resources and troubleshoot operational issues. CloudTrail makes it easier to ensure compliance with internal policies and regulatory standards.

[AWS CloudTrail FAQs](https://aws.amazon.com/cloudtrail/faqs/)

### CloudTrail log file integrity validation

To determine whether a log file was modified, deleted, or unchanged after CloudTrail delivered it, you can use CloudTrail log file integrity validation. This feature is built using industry standard algorithms: SHA-256 for hashing and SHA-256 with RSA for digital signing. This makes it computationally infeasible to modify, delete or forge CloudTrail log files without detection. You can use the AWS CLI to validate the files in the location where CloudTrail delivered them.

https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html

### Entrypting CloudTrail log files with AWS KMS Keys(SSE-KMS)

By default, the log files delivered by CloudTrail to your bucket are encrypted by using server-side encryption with a KMS key (SSE-KMS). If you don't enable SSE-KMS encryption, your logs are encrypted using SSE-S3 encryption.

https://docs.aws.amazon.com/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html