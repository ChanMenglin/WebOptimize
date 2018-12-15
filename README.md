# Web 优化（Web Optimize）

**前端性能优化——原理与实践**

> 前置知识：HTML\CSS\JS\Vue

> 涉及内容：
>
> * 网络层面
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
	* [1.1 资源的合并与压缩-HTTP请求的过程及潜在的性能优化](#11-资源的合并与压缩-http请求的过程及潜在的性能优化)
		* [1.1.1 HTML 压缩](#111-html-压缩)
		* [1.1.2 CSS 压缩](#112-css-压缩)
		* [1.1.3 JS 压缩和混乱](#113-js-压缩和混乱)
		* [1.1.4 文件合并](#114-文件合并)
		* [1.1.5 开启 gzip](#115-开启-gzip)
* [2. 进阶优化](#2-进阶优化)
* [3. 综合服务端的优化](#3-综合服务端的优化)


## 1. 基础优化

!()(img/附录-1.png)

HTTP请求的过程及潜在的性能优化点：

* dns：可通过缓存减少 dns 查询时间
* 网络请求：网络请求走最近的网络环境
* 静态资源：缓存相同的静态资源
* HTTP 请求：减少 HTTP 请求大小及请求次数
* 页面渲染：采用服务端渲染

### 1.1 资源的合并与压缩-HTTP请求的过程及潜在的性能优化点

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
node-minify：[官网](https://node-minify.2clics.net) | [Github](https://github.com/srod/node-minify)
=======
node-minify：(官网)(https://node-minify.2clics.net) | (Github)(https://github.com/srod/node-minify)
>>>>>>> bfb7b52... http请求过程中的优化
=======
node-minify：[官网](https://node-minify.2clics.net) | [Github](https://github.com/srod/node-minify)
>>>>>>> f841a0c... http请求过程中的优化
=======
node-minify：(官网)(https://node-minify.2clics.net) | (Github)(https://github.com/srod/node-minify)
>>>>>>> bfb7b52... http请求过程中的优化

HTTP请求的过程性能优化的原则：

* 减少 HTTP 请求的数量
* 减少请求资源的大小

#### 1.1.1 HTML 压缩

**HTML 代码压缩**：压缩这些在文本文件中有意义，但是在 HTML 中**不显示**的字符，包括**空格**、**制表符**、**换行符**等，还有一些有意义的字符，如 **HTML注视** 也可以被压缩。

HTML 压缩方法：

* 使用在线网站进行压缩（很少使用）
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
* nodejs 中的 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 工具
=======
* nodejs 中的 (html-minifier)(https://node-minify.2clics.net/compressors/html-minifier.html) 工具
>>>>>>> bfb7b52... http请求过程中的优化
=======
* nodejs 中的 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 工具
>>>>>>> f841a0c... http请求过程中的优化
=======
* nodejs 中的 (html-minifier)(https://node-minify.2clics.net/compressors/html-minifier.html) 工具
>>>>>>> bfb7b52... http请求过程中的优化
* 后端模板引擎渲染压缩

#### 1.1.2 CSS 压缩

**CSS 压缩**：对无效代码压缩，进行 CSS 语义合并。

CSS 压缩方法：

* 使用在线网站进行压缩（很少使用）
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
* 对 HTML 中的 CSS 使用 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 [clean-css](https://github.com/jakubpawlowicz/clean-css) 进行压缩
=======
* 对 HTML 中的 CSS 使用 (html-minifier)(https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 (clean-css)(https://github.com/jakubpawlowicz/clean-css) 进行压缩
>>>>>>> bfb7b52... http请求过程中的优化
=======
* 对 HTML 中的 CSS 使用 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 [clean-css](https://github.com/jakubpawlowicz/clean-css) 进行压缩
>>>>>>> f841a0c... http请求过程中的优化
=======
* 对 HTML 中的 CSS 使用 (html-minifier)(https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 (clean-css)(https://github.com/jakubpawlowicz/clean-css) 进行压缩
>>>>>>> bfb7b52... http请求过程中的优化

#### 1.1.3 JS 压缩和混乱

**JS 压缩和混乱**：是对 JS 中的无效字符进行删除、删除注视、代码语义的缩减与优化、代码保护。

JS 压缩和混乱方法：

* 使用在线网站进行压缩（很少使用）
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
* 对 HTML 中的 JS 使用 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 [uglifyjs2](http://lisperator.net/uglifyjs/) 进行压缩
=======
* 对 HTML 中的 JS 使用 (html-minifier)(https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 (uglifyjs2)(http://lisperator.net/uglifyjs/) 进行压缩
>>>>>>> bfb7b52... http请求过程中的优化
=======
* 对 HTML 中的 JS 使用 [html-minifier](https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 [uglifyjs2](http://lisperator.net/uglifyjs/) 进行压缩
>>>>>>> f841a0c... http请求过程中的优化
=======
* 对 HTML 中的 JS 使用 (html-minifier)(https://node-minify.2clics.net/compressors/html-minifier.html) 进行压缩
* 使用 (uglifyjs2)(http://lisperator.net/uglifyjs/) 进行压缩
>>>>>>> bfb7b52... http请求过程中的优化

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

## 2. 进阶优化

## 3. 综合服务端的优化



