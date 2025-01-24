(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{314:function(e,t,o){"use strict";o.r(t);var s=o(14),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"aws-key-management-service-aws-kms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-key-management-service-aws-kms"}},[e._v("#")]),e._v(" AWS Key Management Service (AWS KMS)")]),e._v(" "),t("p",[e._v("AWS KMS is a managed service that helps you more easily create and control the keys used for cryptographic operations. The service provides a highly available key generation, storage, management, and auditing solution for you to encrypt or digitally sign data within your own applications or control the encryption of data across AWS services.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://aws.amazon.com/kms/faqs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS KMS 常见问题"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"why-should-i-use-aws-kms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-should-i-use-aws-kms"}},[e._v("#")]),e._v(" Why should I use AWS KMS?")]),e._v(" "),t("p",[e._v("If you are responsible for securing your data across AWS services, you should use it to centrally manage the encryption keys that control access to your data. If you are a developer who needs to encrypt data in your applications, you should use the AWS Encryption SDK with AWS KMS to more easily generate, use and protect symmetric encryption keys in your code. If you are a developer who needs to digitally sign or verify data using asymmetric keys, you should use the service to create and manage the private keys you’ll need. If you’re looking for a scalable key management infrastructure to support your developers and their growing number of applications, you should use it to reduce your licensing costs and operational burden. If you’re responsible for proving data security for regulatory or compliance purposes, you should use it because it facilitates proving your data is consistently protected. It’s also in scope for a broad set of industry and regional compliance regimes.")]),e._v(" "),t("h3",{attrs:{id:"multi-region-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-region-keys"}},[e._v("#")]),e._v(" Multi-Region Keys")]),e._v(" "),t("p",[e._v("AWS KMS 支持多区域密钥，允许您在多个区域中创建和管理密钥。这使得您可以在不同区域中使用相同的密钥，从而简化跨区域数据加密和解密的过程。")]),e._v(" "),t("p",[e._v("more details: https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html")]),e._v(" "),t("h3",{attrs:{id:"kms-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kms-keys"}},[e._v("#")]),e._v(" KMS keys")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys")]),e._v(" "),t("p",[e._v("Three types of keys:")]),e._v(" "),t("ul",[t("li",[e._v("Customer managed keys (CMKs), more control, more cost. such as 90 days rotation. audit log. etc.")]),e._v(" "),t("li",[e._v("AWS managed keys (AWS KMS keys)")]),e._v(" "),t("li",[e._v("AWS owned keys (AWS KMS keys)")])]),e._v(" "),t("h4",{attrs:{id:"difference-between-aws-s3-bucket-encryption-sse-c-sse-s3-sse-kms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-aws-s3-bucket-encryption-sse-c-sse-s3-sse-kms"}},[e._v("#")]),e._v(" Difference between AWS S3 Bucket Encryption SSE-C , SSE-S3, SSE-KMS")]),e._v(" "),t("p",[e._v("https://awstip.com/5-minutes-to-aws-s3-bucket-encryption-sse-c-sse-s3-sse-kms-e2fb07b05cb3")]),e._v(" "),t("p",[t("strong",[e._v("SSE-S3")]),e._v("\nSSE-S3 is the simplest way to encrypt your S3 data (I repeat S3 data not S3 bucket). It’s the default and the commonly used one.\nWith this method, Amazon S3 automatically manages your encryption keys using AES-256 encryption.\nSSE-S3 is a great option if you’re looking for an easy-to-use, secure way to encrypt your S3 data without much admin overhead.\nYou don’t have visibility over the key generated by S3.\nNo role seperation and you can’t control the rotation of the key. An S3 admin can see every object inside the bucket if he wants.\nSome organization and companies may require that administrator do not view the object in clear (think for the example in an hospital enviroment with sensible data). For this we need another type of key.")]),e._v(" "),t("p",[t("strong",[e._v("SSE-C")]),e._v("\nSSE-C allows you to provide your own encryption keys, giving you more control over the security of your S3 data.\nWith SSE-C, Amazon S3 does not store or manage your encryption keys, so it’s up to you to manage and protect them.")]),e._v(" "),t("p",[e._v("If you upload an object you provide the object with the key (a key that AWS will discard and will retain only the HASHING version) and you need to provide the same key every time you make a request to the S3 bucket via HTTPS.\nAs you can see from the image in this blog post SSE-C is never mentioned, it adds complexity to your application and encryption with this method can only be provided via API or AWS SDK.")]),e._v(" "),t("p",[t("strong",[e._v("SSE-KMS")]),e._v("\nSimilar to S3, AWS manages encryption keys for S3 buckets through the AWS Key Management Service (KMS). When you upload an object to S3, you can select the specific KMS key you want to use for encryption. Permissions to view the object are then escalated to the KMS service. This means that whoever has permission to decrypt with the specific KMS key linked to the object can also view the unencrypted version.")]),e._v(" "),t("p",[e._v("You can choose to use only one KMS key for the entire bucket or have a separate KMS key for each object, or even a key for a certain prefix. This provides several benefits, such as:")]),e._v(" "),t("ul",[t("li",[e._v("Setting granular permissions and role separation, which means that S3 administrators cannot view unencrypted objects if they do not have the necessary permissions on the specific KMS key.")]),e._v(" "),t("li",[e._v("Control over key rotation, which helps to improve security by ensuring that keys are regularly updated.")])]),e._v(" "),t("p",[t("strong",[e._v("Conclusion")]),e._v("\nSSE-S3 is the easiest to use and offers strong encryption, while SSE-C provides more control over your encryption keys (and much more admin overhead).\nSSE-KMS offers the most flexibility, as it allows you to use keys managed by KMS and offers additional security features.")])])}),[],!1,null,null,null);t.default=a.exports}}]);