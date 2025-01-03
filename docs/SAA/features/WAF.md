## AWS WAF Web Application Firewall

AWS WAF is a web application firewall that helps protect web applications from attacks by allowing you to configure rules that allow, block, or monitor (count) web requests based on conditions that you define. These conditions include IP addresses, HTTP headers, HTTP body, URI strings, SQL injection and cross-site scripting.

[AWS WAF FAQs](https://aws.amazon.com/waf/faqs/)


### What type of attack is AWS WAF protecting against?

AWS WAF helps protects your website from common attack techniques like SQL injection and Cross-Site Scripting (XSS). In addition, you can create rules that can block or rate-limit traffic from specific user-agents, from specific IP addresses, or that contain particular request headers. 


### Geo Match Condition

Today, we are excited to announced new Geographic (Geo) Match Conditions in AWS WAF. This new condition type allows you to use AWS WAF to restrict application access based on the geographic location of your viewers. With geo match conditions you can choose the countries from which AWS WAF should allow access. 

https://aws.amazon.com/about-aws/whats-new/2017/10/aws-waf-now-supports-geographic-match/