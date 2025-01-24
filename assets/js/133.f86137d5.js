(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{372:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q151"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q151"}},[e._v("#")]),e._v(" Q151")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AC")]),e._v(" "),t("p",[e._v("A. By using Control Tower, the company can enforce data residency guardrails and restrict internet access for VPCs and denies access to all Regions except the required ap-northeast-3 Region.")]),e._v(" "),t("p",[e._v("C. With Organizations, the company can configure SCPs to prevent VPCs from gaining internet access. By denying access to all Regions except ap-northeast-3, the company ensures that VPCs can only be deployed in the specified Region.")]),e._v(" "),t("p",[e._v("Option B is incorrect because using rules in AWS WAF alone does not address the requirement of denying access to all AWS Regions except ap-northeast-3.")]),e._v(" "),t("p",[e._v("Option D is incorrect because configuring outbound rules in network ACLs and IAM policies for users can help restrict traffic and access, but it does not enforce the company's requirement of denying access to all Regions except ap-northeast-3.")]),e._v(" "),t("p",[e._v("Option E is incorrect because using AWS Config and managed rules can help detect and alert for specific resources and configurations, but it does not directly enforce the restriction of internet access or deny access to specific Regions.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("agree with A and C\nhttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_vpc.html#example_vpc_2")]),e._v(" "),t("h2",{attrs:{id:"q152"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q152"}},[e._v("#")]),e._v(" Q152")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("D.\nYou need to use AWS Systems Manager State Manager, not Systems Manager Session Manager.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Agree with study_aws1 comment.\nLambda and event bridge solution is the correct answer.\nThe option A was only possible if it had mentioned System manager state manager")]),e._v(" "),t("h2",{attrs:{id:"q153"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q153"}},[e._v("#")]),e._v(" Q153")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("Answer D\nWhy Optoin D ?\nThe Question talks about downloads are infrequent older than 90 days which means files less than 90 days are accessed frequently. Standard-Infrequent Access (S3 Standard-IA) needs a minimum 30 days if accessed before, it costs more.\nSo to access the files frequently you need a S3 Standard . After 90 days you can move it to Standard-Infrequent Access (S3 Standard-IA) as its going to be less frequently accessed")]),e._v(" "),t("h2",{attrs:{id:"q154"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q154"}},[e._v("#")]),e._v(" Q154")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v('The key is "No users can have the ability to modify or delete any files" and compliance mode supports that.\nI remember it this way: ( governance is like government, they set the rules but they can allow some people to break it 😄 )')]),e._v(" "),t("h2",{attrs:{id:"q155"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q155"}},[e._v("#")]),e._v(" Q155")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("The reasons are:")]),e._v(" "),t("p",[e._v("Amazon CloudFront is a content delivery network (CDN) that caches content at edge locations around the world.\nConnecting the S3 buckets containing the media files to CloudFront will cache the content at global edge locations.\nThis provides fast reliable access to users everywhere by serving content from the nearest edge location.\nCloudFront integrates tightly with S3 for secure, durable storage.\nGlobal Accelerator improves availability and performance for TCP/UDP traffic, not HTTP-based content delivery.\nDataSync and SQS are not technologies for a global CDN like CloudFront.")]),e._v(" "),t("h2",{attrs:{id:"q156"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q156"}},[e._v("#")]),e._v(" Q156")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AE")]),e._v(" "),t("p",[e._v("A is a given due to Athena and QuickSight option.\nBetween C and E, the AWS Lake Formation is a more managed solution so it should have less operational overhead that writing Custom AWS Lambda.\nAE should be preferred over AC.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("AWS Lake Formation and Glue provide automated data lake creation with minimal coding. Glue crawlers identify sources and ETL jobs load to S3.\nAthena allows ad-hoc queries directly on S3 data with no infrastructure to manage.\nQuickSight provides easy cloud BI for dashboards.\nOptions C and D require significant custom coding for ETL and queries.\nRedshift and OpenSearch would require additional setup and management overhead.")]),e._v(" "),t("h2",{attrs:{id:"q157"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q157"}},[e._v("#")]),e._v(" Q157")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" DE")]),e._v(" "),t("p",[e._v("I tend to agree D and E...")]),e._v(" "),t("p",[e._v("A - Manual task that can be automated, so why make life difficult?\nB - The maximum retention period is 35 days, so would not help\nC - The maximum retention period is 35 days, so would not help\nD - Only option that deals with logs, so makes sense\nE - Partially manual but only option that achieves the 5 year goal")]),e._v(" "),t("h2",{attrs:{id:"q158"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q158"}},[e._v("#")]),e._v(" Q158")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("website = http = cloudfront, if it is UDP, then global accelerator")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Ans A - CloudFront delivers video on demand or live streaming video using any HTTP origin")]),e._v(" "),t("h2",{attrs:{id:"q159"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q159"}},[e._v("#")]),e._v(" Q159")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AC")]),e._v(" "),t("p",[e._v("Agree A and C")]),e._v(" "),t("p",[e._v("I don't see how E is feasible as its a public API. How would you create an IAM role for each user?")]),e._v(" "),t("h2",{attrs:{id:"q160"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q160"}},[e._v("#")]),e._v(" Q160")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Ans C:\nCost-effective solution with milliseconds of retrieval -> it should be s3 standard")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("S3 Standard provides high durability and availability for storage\nIt allows millisecond access to retrieve objects\nObjects can be stored for any duration, meeting the 30 day retention need\nStorage costs are low, around $0.023 per GB/month\nOpenSearch and RDS require running and managing a cluster for DR storage\nGlacier has lower cost but retrieval time is too high at 3-5 hours\nS3 Standard's simplicity, high speed access, and low cost make it optimal for this small DR dataset that needs to be accessed quickly")])])}),[],!1,null,null,null);t.default=s.exports}}]);