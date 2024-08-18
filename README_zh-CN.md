# Dom Yw

[English](./README.md) | 中文

## 介绍

对原生 DOM Api 的封装，简化操作, 仅用于学习封装的思路. 不支持生产环境.

## 使用


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

[查看更多](./src/dyw.js)

## 联系我

[Github](https://github.com/Layouwen)