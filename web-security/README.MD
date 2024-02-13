**Common web security vulnerabilities**

```
<!-- Cross-Site Scripting (XSS) -->
XSS is a type of attack where an attacker injects malicious code into a web page. This code can then be executed by other users who visit the page. XSS attacks can be used to steal cookies, session tokens, and other sensitive information.

<!-- Cross-Site Request Forgery (CSRF) -->
CSRF is a type of attack where an attacker tricks a user into performing an unwanted action on a web application. This can be done by sending the user a malicious link or by embedding malicious code in a web page. CSRF attacks can be used to steal data, transfer money, or change account settings.

<!-- CORS (Cross-Origin Resource Sharing) -->
CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null

```

**Resolve CORS errors in JavaScript**

```
<!-- Enable CORS on the server. -->
This is the most common and recommended solution. To enable CORS, you need to add the Access-Control-Allow-Origin header to the server's response. The value of this header should be the origin of the web page that is trying to access the resources.

<!-- Use a proxy server. -->
A proxy server can be used to bypass CORS restrictions. When you use a proxy server, the web page makes the request to the proxy server, and the proxy server then makes the request to the other domain. The proxy server adds the necessary CORS headers to the request, so the other domain will allow the request.


<!-- Fixing server-side configuration -->
The most straightforward way to handle CORS errors is to configure the server to send the correct CORS headers in its responses. To do this, you need to modify the server's settings to allow specific domains or all domains to access its resources. Here's an example of how to set the Access-Control-Allow-Origin header in different server environments:

Node.js (Express)
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your routes go here

app.listen(3000, () => console.log('Server running on port 3000'));


<!-- Using a proxy server -->
A proxy server sits between your application and the target server, forwarding requests and responses between them. Since the proxy server is on the same domain as your application, it bypasses the CORS restrictions. Here's how you can set up a simple proxy server using Node.js and Express:

Setting up a proxy server with Node.js and Express
First, install the http-proxy-middleware package:
npm install http-proxy-middleware

Next, create a new file called proxy.js and add the following code:
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://example.com', changeOrigin: true }));

app.listen(3001, () => {
  console.log('Proxy server running on port 3001');
});

In this example, we're creating a proxy server that listens on port 3001 and forwards requests to http://example.com. Your frontend application can now make requests to http://localhost:3001/api, and the proxy server will forward the requests to http://example.com.
```

**How to Prevent Cross-site Scripting (XSS)**

```
To keep yourself safe from XSS, you must sanitize your input. Your application code should never output data received as input directly to the browser without checking it for malicious code.

When to Escape:
<!-- HTML Escaping -->
<div>If this data is untrusted, it must be HTML-escaped.</div>

<!-- JavaScript Escaping -->
<script>alert('If this data is untrusted, it must be JavaScript-escaped.')</script>
<body onload="If this data is untrusted, it must be JavaScript-escaped.">

<!-- CSS Escaping -->
<div style="background-image: If this data is untrusted, it must be CSS-escaped.">

```

**Preventing Cross-Site Scripting in JavaScript**

```
<!-- Sanitize User Input -->
The first step in preventing XSS is to sanitize all user input before it is displayed on the webpage. This can be done using a variety of techniques, including input validation and output encoding.

Input validation involves checking user input to check that it meets certain criteria. For example, if you are expecting a user to enter an email address, you can check that the input contains the “@” symbol and a domain name. If the input does not meet these criteria, it should be rejected.

Output encoding involves encoding user input so that it is not interpreted as HTML or JavaScript code. This can be done using a variety of techniques, including HTML escaping and JavaScript encoding.

Here is an example of HTML escaping in JavaScript:
function escapeHTML(str) {
  return str.replace(/[&<>"'\/]/g, function (char) (
  switch (char) {
    case '&':
      return '&amp;';
    case '<':
      return '&lt;';
    case '>':
      return '&gt;';
    case '"':
      return '&quot;';
    case '\':
      return '&#39;';
    case '/':
      return '&#x2F;';
    default:
      return char;
    }
  });
}

This function takes a string as input and replaces any characters that have special meaning in HTML (such as < and >) with their corresponding HTML entities

<!-- Use a Content Security Policy -->
A Content Security Policy (CSP) is a security feature that allows you to specify which sources of content are allowed to be loaded on your webpage. This can help prevent XSS attacks by preventing malicious code from being loaded from untrusted sources.

Here is an example of how to use CSP in JavaScript:
// Set the Content Security Policy header
app.use(function (req, res, next) {
  res.setHeader('Content-Security-Policy, "default-src 'self' ");
  next();
});

// Load scripts only from trusted sources
<script src="[https://trusted-site.com/script.js](https://trusted-site.com/script.js)"></script>

<!-- Use Input Validation -->
function validateEmail (email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

<!-- Using HTTP-Only Cookies -->
HTTP-only cookies are cookies that can only be accessed by the web server, not by client-side JavaScript code.
document.cookie = "sessionID=12345; HttpOnly";
```
