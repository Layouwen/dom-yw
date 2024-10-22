# Dom Yw

English | [中文](./README_zh-CN.md)

## Introduction

A wrapper for the native DOM API to simplify operations, intended only for learning purposes. It is not supported in production environments.

## Usage

```javascript
const dom = dyw.create("<div>Avan</div>")
// <div>Avan</div>

dyw.after(dom, "<div>Dom</div>")
// <div>Avan</div><div>Dom</div>

dyw.before(dom, "<div>Yw</div>")
// <div>Yw</div><div>Avan</div><div>Dom</div>

dyw.append(dom, "<span>inner</span>")
// <div>Yw</div><div>Avan</div><div>Dom</div><span>inner</span>

dyw.wrapper(dom, "<main></main>")
// <main><div>Yw</div><div>Avan</div><div>Dom</div><span>inner</span></main>
```

[See more](./src/dyw.js)

## Contact Me

[Github](https://github.com/Layouwen)