# Web Optimize（Web 优化）

**前端性能优化——原理与实践**

> 前置知识：HTML\CSS\JS\Vue

> 涉及内容：
>
> * 网络层面
> * 构建层面
> * 浏览器渲染层面
> * 服务端层面
> ---
> * 资源的合并与压缩
> * 图片编码原理与类型的选择
> * 浏览器渲染机制
> * 懒加载预加载
> * 浏览器存储
> * 缓存机制
> * PWA
> * Vue-SSR

> 前端性能优化原理：
>
> * 作用及原理
> * 如何与真实场景结合
> * 理论结合实践
> * 量化分析

# 目录（Contents）

* [1. 基础优化](#1-基础优化)
	* [1.1 资源的合并与压缩-HTTP请求的过程及潜在的性能优化](#11-资源的合并与压缩-http请求的过程及潜在的性能优化点)
		* [1.1.1 HTML 压缩](#111-html-压缩)
		* [1.1.2 CSS 压缩](#112-css-压缩)
		* [1.1.3 JS 压缩和混乱](#113-js-压缩和混乱)
		* [1.1.4 文件合并](#114-文件合并)
		* [1.1.5 开启 gzip](#115-开启-gzip)
	* [1.2 图片压缩](#12-图片压缩)
* [2. 进阶优化](#2-进阶优化)
* [3. 综合服务端的优化](#3-综合服务端的优化)


## 1. 基础优化

![Web 请求示意图](img/附录-1.png)

HTTP请求的过程及潜在的性能优化点：

* dns：可通过缓存减少 dns 查询时间
* 网络请求：网络请求走最近的网络环境
* 静态资源：缓存相同的静态资源
* HTTP 请求：减少 HTTP 请求大小及请求次数
* 页面渲染：采用服务端渲染

### 1.1 资源的合并与压缩-HTTP请求的过程及潜在的性能优化点

node-minify：[官网](https://node-minify.2clics.net) | [Github](https://github.com/srod/node-minify)

HTTP请求的过程性能优化的原则：

* 减少 HTTP 请求的数量
* 减少请求资源的大小

#### 1.1.1 HTML 压缩

**HTML 代码压缩**：压缩这些在文本文件中有意义，但是在 HTML 中**不显示**的字符，包括**空格**、**制表符**、**换行符**等，还有一些有意义的字符，如 **HTML注视** 也可以被压缩。

HTML 压缩方法：

* 使用在线网站进行压缩（很少使用）
* nodejs 中的 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 工具
* 后端模板引擎渲染压缩

#### 1.1.2 CSS 压缩

**CSS 压缩**：对无效代码压缩，进行 CSS 语义合并。

CSS 压缩方法：

* 使用在线网站进行压缩（很少使用）
* 对 HTML 中的 CSS 使用 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 [clean-css](https://github.com/jakubpawlowicz/clean-css) 进行压缩

#### 1.1.3 JS 压缩和混乱

**JS 压缩和混乱**：是对 JS 中的无效字符进行删除、删除注视、代码语义的缩减与优化、代码保护。

JS 压缩和混乱方法：

* 使用在线网站进行压缩（很少使用）
* 对 HTML 中的 JS 使用 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 [uglifyjs2](http://lisperator.net/uglifyjs/) 进行压缩

#### 1.1.4 文件合并

不进行文件合并的缺点：

* 文件与文件之间有插入的上行请求，增加了 N-1 个网络延迟
* 受丢包问题影响更严重
* 经过代理服务器时可能会被断开

文件合并的缺点：

* 首屏渲染问题
* 缓存失败问题

文件合并的原则：

* 公共库合并
* 分页面合并
* 根据业务场景进行合并

文件合并的方法：

* 使用在线网站进行压缩（很少使用）
* 构建时进行文件合并

#### 1.1.5 开启 gzip

### 1.2 图片压缩

**图片压缩**：针对真实图片情况，舍弃一些相对无关紧要的色彩信息。

[tinypng - 图片压缩](https://tinypng.com) |
[智图 - 图片格式转换](https://zhitu.isux.us) |
[spritecow - 雪碧图制作](http://www.spritecow.com)

png8/png24/png32 之间的区别：

* png8 - 256色，支持透明
* png24 - 2^24色，不支持透明
* png32 - 2^24色，支持透明

不同格式图片的区别：

* [jpg](https://zh.wikipedia.org/wiki/JPEG) - 有损压缩，压缩率高，不支持透明（不需要透明图片的业务场景）
* [png](https://zh.wikipedia.org/wiki/PNG) - 支持透明，浏览器兼容性好（需要透明图片的业务场景）
* [webp](https://zh.wikipedia.org/wiki/WebP) - 压缩程度好，在 ios webview 有兼容性问题（安卓广泛使用）
* [SVG 矢量图](https://developer.mozilla.org/zh-CN/docs/Web/SVG) - 代码内嵌，相对较小（图片样式简单）
* [gif](https://zh.wikipedia.org/wiki/GIF) - 动图，不可取代（动图）

图片压缩方法：

* [CSS 雪碧图](https://zh.wikipedia.org/wiki/%E7%B2%BE%E7%81%B5%E5%9B%BE)：优点-减少 HTTP 请求数量，缺点-图片较大，页面上有较多的图片信息依赖于一张图的加载。（较少使用）
* Image inline：将图片内容内嵌到 HTML 上，减少 HTTP 强求的数量。如使用矢量图 SVG 进行简单图片的绘制，使用 confont 解决 icon 问题。（一个 [iconfont](https://www.iconfont.cn) 图标网站）

## 2. 进阶优化

### 2.1 CSS、JS 的加载与执行

![HTML 页面加载渲染的过程](img/图-1.png)

HTML 渲染过程的特点：

* 顺序执行，并发加载
	* 词法分析 - 对 HTML 文档进行解析，顺序执行
	* 并发加载 - Web 资源并发请求
	* 并发上限 - 对同一域名下的并发请求有数量上的限制
* 阻塞
	* CSS 阻塞
		* CSS head 中阻塞页面的渲染 - CSS 在 head标签 中通过 link 方式引入时需等待 CSS 加载完后页面才会渲染，渲染出的页面带有样式，可避免页面闪动。**推荐使用**
		* CSS 阻塞 JS 的执行 - 在 CSS 加载完成之前，后续 JS 执行会被阻塞
		* CSS 不阻塞外部脚本的加载 - CSS 不会阻塞后续 JS 的加载，但会阻塞其执行
	* JS 阻塞
		* JS script 中阻塞页面渲染 - JS 通过 script标签 引入时需等待 JS 加载完成后页面才会渲染
		* JS 是顺序执行的 - 对多个 JS 脚本的执行是按引入顺序执行的，并且每一个脚本的执行都会阻塞后续脚本的执行（单线程）
		* JS 不阻塞资源加载
* 依赖关系
* 引入方式

## 3. 综合服务端的优化



