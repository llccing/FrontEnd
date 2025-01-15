(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{424:function(e,t,o){"use strict";o.r(t);var n=o(14),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"amazon-cloudfront"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amazon-cloudfront"}},[e._v("#")]),e._v(" Amazon CloudFront")]),e._v(" "),t("p",[e._v("Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.")]),e._v(" "),t("ul",[t("li",[e._v("If the content is already in the edge location with the lowest latency, CloudFront delivers it immediately.")]),e._v(" "),t("li",[e._v("If the content is not in that edge location, CloudFront retrieves it from an origin that you've defined—such as an Amazon S3 bucket, a MediaPackage channel, or an HTTP server (for example, a web server) that you have identified as the source for the definitive version of your content.")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("more about CloudFront"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"cloudfront-oai-origin-access-identity-oai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudfront-oai-origin-access-identity-oai"}},[e._v("#")]),e._v(" CloudFront OAI - origin access identity (OAI)")]),e._v(" "),t("p",[e._v("CloudFront OAI is a security feature that allows you to restrict access to your S3 bucket to only CloudFront.")]),e._v(" "),t("p",[e._v("https://repost.aws/knowledge-center/cloudfront-access-to-amazon-s3")]),e._v(" "),t("h3",{attrs:{id:"field-level-encryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#field-level-encryption"}},[e._v("#")]),e._v(" Field-level encryption")]),e._v(" "),t("p",[e._v("Field-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack. This encryption ensures that only applications that need the data—and have the credentials to decrypt it—are able to do so.")]),e._v(" "),t("p",[e._v("you can use a new Amazon CloudFront capability called Field-Level Encryption to further enhance the security of sensitive data, such as credit card numbers or personally identifiable information (PII) like social security numbers. CloudFront’s field-level encryption further encrypts sensitive data in an HTTPS form using field-specific encryption keys (which you supply) before a POST request is forwarded to your origin. This ensures that sensitive data can only be decrypted and viewed by certain components or services in your application stack.")]),e._v(" "),t("p",[e._v("https://aws.amazon.com/about-aws/whats-new/2017/12/introducing-field-level-encryption-on-amazon-cloudfront/")]),e._v(" "),t("p",[e._v("Steps to implement field-level encryption:")]),e._v(" "),t("ol",[t("li",[e._v("Create a field-level encryption configuration.")]),e._v(" "),t("li",[e._v("Create a field-level encryption profile.")]),e._v(" "),t("li",[e._v("Create a field-level encryption policy.")]),e._v(" "),t("li",[e._v("Create a distribution with the field-level encryption configuration.")]),e._v(" "),t("li",[e._v("Create a POST request with the field-level encryption policy.")]),e._v(" "),t("li",[e._v("Create a GET request with the field-level encryption policy.")])]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html")])])}),[],!1,null,null,null);t.default=i.exports}}]);