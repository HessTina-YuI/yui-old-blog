---
title: '博客的介绍'
dateTime: '2021-03-12 11:00'
coverImage: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-20-01.png'
articleTopImage: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-25-01.jpg'
description: '浅谈现在博客的由来，以及对 markdown 解析实现的功能的介绍'
tag:
    - 'Blog'
    - 'Markdown'
---
# 博客的介绍

## 现状
现在的世面上，博客的脚手架百花齐放，种类大致分为了两类：1. 静态站点 、2. 前后端一体


### 静态站点的流行脚手架
#### [Hexo](https://hexo.io/zh-cn/)
有自己独立的一套 Node.js 命令用于生成有固定头部的 markdown 文件，使用 NJK 格式的文件渲染成 HTML、CSS、JavaScript，模板也相当丰富，丰富的插件可用于自定义样式

```github
https://github.com/hexojs/hexo
```

#### [Hugo](https://gohugo.io/)
由 Go 语言生成静态页面的博客脚手架，主题非常非常多。由于语言的特性，编译速度也非常的快。强大的功能，可以在不增加插件的情况下就能做到许多的效果。

```github
https://github.com/gohugoio/hugo
```

### 前后端一体
#### [WordPress](https://cn.wordpress.org/)
世界上最好的语言 PHP 搭建的前后一体化的博客脚手架，很老牌。因为有服务端的功能，所以不仅是用做博客，很多的商业网站也会采用它。现有的很多云服务器厂商也做了一键安装配置 WordPress 的功能。

```github
https://github.com/WordPress/WordPress
```

#### [Halo](https://halo.run/)
采用 SpringBoot 作为后端，FreeMaker 为前端渲染模板。很适合用来作为 Java 的学习项目。主题没有上面列举的其他博客脚手架那么多，都是质量上乘的主题。

```github
https://github.com/halo-dev/halo
```

## 由来

上面的博客脚手架，我都有思考过是否采用。最后打算自己写的原因也很简单，无外乎作为一个程序员，在想要定制化的功能很多的情况下，自己写一个或许比看懂别人写的代码会容易很多。
其次，我是一个 Java 后端工程师，但是作为想要往更高处走，例如成为一个架构师、技术专家等等职位。前端的知识虽然不需要知道的太深，但是不能不知，这也是我最后打算自己写一个博客的初衷。
看到这里的朋友，希望你能喜欢这个博客，尽管现在功能还不齐全，我会尽最大努力的完善他。

## 架构
React 框架，使用 Next.js 作为 SSR 渲染引擎，集成 Ant-Design UI 样式

## Markdown 实现功能介绍
具体 markdown 的书写，如果不是我个人的定制化显示，参考官方文档即可

### 引用
> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面。    —— [维基百科](https://zh.wikipedia.org/wiki/Markdown) 

正如您在阅读的这份文档，它使用简单的符号标识不同的标题，将某些文字标记为**粗体**或者*斜体*，创建一个[链接](http://www.example.com)。


### 代码块

定制化增加了，对特定行数的高亮，只需要在 **``` java** 后输入 **:4,5** ，就会高亮显示第 4，5 行

```java:4,5
public class SingletonTest {

    public static void main(String[] args) {
        System.out.println(Singleton.INSTANCE.getTest());
        System.out.println(Singleton.INSTANCE.getTest());
    }
    
    public enum Singleton {
        INSTANCE;

        private final Test test;

        Singleton() {
            test = new Test();
        }

        public Test getTest() {
            return test;
        }
    }

    private static class Test {

    }
}
```


### Github 块显示

使用和代码块相同的语法，语言使用 github，**```github**

以下为我的博客的 github 地址

```github
https://github.com/Trafalgar-YuI/yui-blog
```

### LaTeX 公式

可以创建行内公式，例如 $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$。或者块级公式：

$$	x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

### 表格 

| Item     | Value    | Qty  |
| :-------- | --------: | :----: |
| Computer | 1600 USD | 5    |
| Phone    | 12 USD   | 12   |
| Pipe     | 1 USD    | 234  |


### 复选框

使用 `- [ ]` 和 `- [x]` 语法可以创建复选框，实现 todo-list 等功能。例如：

- [x] 已完成事项
- [ ] 待办事项1
- [ ] 待办事项2

### 脚注

在文字上方提供一个脚注[^1]，用于跳转到对该脚注的注释上

[^1]: 这是一个脚注