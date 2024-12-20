**What you should know**
Node.js CLI

Basic commands
Build-in Node.js CLI options
Environment Variables
Node.js Modules

Standard Modules
ES Modules
Module Scope
Global Objects
Module Load System
Module Object
Node.js Package Managers

CLI Options
Package Structure
Package manager as a build tool
Package manager configuration
Package manager scripts
Node.js Async programming

Callbacks
Promise
Async programming patterns/tools
async/await
Node.js Events

Event-Driven Programming
Event Loop
EventEmitter
OS events handlers
Node.js API

Console API
File System API
String Decoder API
Timer API
URI API
Buffer API
Cluster API
Crypto API
Net API
OS API
Readline API
Stream API
Zlib API
Node.js Error Handling

Async errors, Promise rejections
Error Class
Custom Errors
Node.js Network

HTTPS
Network API
Node.js Real Time Applications

WebSockets
Node.js Performance

Profilers
Node.js Debugging

Native debugging
Inspectors and specialized tools
Node.js Authorization

JWT
PassportJS
Node.js Security

Basic practices and approaches
Node.js Testing

Unit tests
Contract tests
Integration tests
TDD/BDD
Node.js Documentation

JSDoc
Third party documentation tools / services
Node.js ORM / ODMNode.js Frameworks  Node.js Serverless

Serverless code implementaiton
Serverless solution (based on AWS Lambda, Azure functions, Google CloudFunctions, etc.)
Node.js Loggers

Types of logges. Logging levels.
Logging tools and libraries (Logstash, Winston etc.)
Node.js Queue

Basic knowledge of tools and solutions (RabbitMQ / AtiveMQ / Kafka / SQS / SNS)
Node.js Containerization

Containerization practices and approaches
Tools and services (Docker, Docker Compose, etc.)
Node.js Architecture / Patterns

Application structure architecture principles
Basic GoF Creational, Structural, Behavioral patterns knowledge
Microservices basic principles
Node.js Deployment

NPM Scripts
CI/CD
SSH/Command line tools

**Introduction to Node.js**
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.