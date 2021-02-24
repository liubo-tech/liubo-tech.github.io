(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{512:function(s,t,a){"use strict";a.r(t);var n=a(42),p=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[s._v("#")]),s._v(" 一、概述")]),s._v(" "),a("p",[s._v("在我们的系统中，很多时候都用到了权限。最简单的权限就是登录。登录了，我就可以自己的相关信息；没有登录，就不能看到。")]),s._v(" "),a("p",[s._v("目前比较流行的权限框架就是apache shiro和spring security，大家在选择时比较青睐apache shiro，因为spring security的拦截器过多，导致性能下降。")]),s._v(" "),a("p",[s._v("笔者在搭建系统时也是选择了Apache shiro。在权限框架中，最常用的两个地方是：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在controller层，使用"),a("code",[s._v("@RequiresPermissions")]),s._v("注解，标识这个链接只能是拥有这个权限的用户才能使用。")])]),s._v(" "),a("li",[a("p",[s._v("在jsp中，使用"),a("code",[s._v("<shiro:hasPermission>")]),s._v("标签，标识着拥有这个权限的用户才能够展示标签中的内容。")])])]),s._v(" "),a("p",[s._v("笔者在搭建系统时，由于采用了集群，session统一用redis管理，在使用shiro框架时，重写了shiro的sessionDAO，CRUD都在redis中。")]),s._v(" "),a("p",[s._v("在使用shiro的过程中，笔者发现一个request请求，在shiro的session管理中调用了40多次redis。虽然redis的性能非常好，但是调用40多次也没有必要。")]),s._v(" "),a("p",[s._v("所以，笔者基于java注解和jsp标签简单的实现了权限框架，它有一定的局限性，不过大家可以进行扩展。")]),s._v(" "),a("h2",{attrs:{id:"二、jsp标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、jsp标签"}},[s._v("#")]),s._v(" 二、jsp标签")]),s._v(" "),a("p",[s._v("在这一篇中，先向大家介绍jsp的权限标签。")]),s._v(" "),a("p",[a("strong",[s._v("首先，编写jsp标签的实现类，如下：")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HasAnyPermission")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TagSupport")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Setter")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Getter")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" permissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doStartTag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JspException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpSession")]),s._v(" session "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pageContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" arrPermissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" permissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用户是否登录")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserSessionUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" hasPermissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SESSION_ATTR_PLAT_PERMISSION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用户是否分配了权限　")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CollectionUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNotEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hasPermissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" psermission "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" arrPermissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用户分配的权限中，是否包含该权限")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hasPermissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("psermission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TagSupport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EVAL_BODY_INCLUDE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TagSupport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SKIP_BODY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TagSupport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SKIP_BODY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("在这里，permissions为标签中传过来的权限，可以为多个，使用“,”隔开，这个可以大家可以扩展。")]),s._v(" "),a("p",[s._v("例如：自定义分隔符。这里就不详细介绍了；多个权限间的“或”，“与”关系等。")]),s._v(" "),a("p",[s._v("在jsp当中，标签都是成对出现的，在开始标签时，将会执行"),a("code",[s._v("doStartTag()")]),s._v("方法，对应的在结束标签时，将执行"),a("code",[s._v("doEndTag()")]),s._v("方法，上面的类中没有写出"),a("code",[s._v("doEndTag()")]),s._v("方法，将会执行父类"),a("code",[s._v("TagSupport")]),s._v(" 中的"),a("code",[s._v("doEndTag()")]),s._v("方法。")]),s._v(" "),a("p",[a("code",[s._v("doStartTag()")]),s._v("方法中的具体逻辑这里不做介绍，无非就是判断这个用户有没有这个权限。最关键的是return的内容：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("EVAL_BODY_INCLUDE：如果返回这个，则标签包含的内容会展示出来。")])]),s._v(" "),a("li",[a("p",[s._v("SKIP_BODY ：标签包含的内容不会展示。")])])]),s._v(" "),a("p",[a("strong",[s._v("其次，创建tld文件")])]),s._v(" "),a("p",[s._v("在 webapp/WEB-INF/ 下，创建taglib目录，并在taglib目录中，创建xxx.tld文件，如下：")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[s._v('<?xml version="1.0" encoding="ISO-8859-1" ?>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[s._v("DOCTYPE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[s._v("taglib")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[s._v("PUBLIC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-//Sun Microsystems, Inc.//DTD JSP Tag Library 1.2//EN"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://java.sun.com/dtd/web-jsptaglibrary_1_2.dtd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("taglib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("tlib-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.1.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("tlib-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("jsp-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("jsp-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("short-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Apache Shiro"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("short-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("/WEB-INF/taglib/xxx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 配置成tld文件的目录，xxx为tld文件的文件名 --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Apache Shiro JSP Tag Library."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hasAnyPermissions"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--标签的名称 --\x3e")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("tag-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.rent.common.shiro.HasAnyPermission"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("tag-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 实现的类，上面编写的HasAnyPermission类 --\x3e")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("JSP"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("attribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--传入参数--\x3e")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("permissions"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--参数名称--\x3e")]),s._v("  \n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--是否必传--\x3e")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("rtexprvalue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("rtexprvalue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--是否可用jsp表达式--\x3e")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("attribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("taglib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("p",[s._v("uri的参数需要在jsp中引用，tag的name属性是标签的名称，permissions是变量的名称，由jsp中传入，而且必传。")]),s._v(" "),a("p",[a("strong",[s._v("最后，标签的使用")])]),s._v(" "),a("p",[s._v("在jsp的头部引入自定义标签，如下：")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v('<%@taglib prefix="pm" uri="/WEB-INF/taglib/xxx"%>\n')])])]),a("p",[s._v("uri为tld文件中配置的uri，prefix是标签的前缀，可以自定义，我们定义成pm。")]),s._v(" "),a("p",[s._v("权限标签的使用，如下：")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("pm:")]),s._v("hasAnyPermissions")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("permissions")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("哈哈"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("pm:")]),s._v("hasAnyPermissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("p",[s._v("当我们在编译器中敲入 <pm:，就会出现提示，hasAnyPermissions就是我们在tld文件中定义的name，permissions是需要的权限，而且必传。")]),s._v(" "),a("p",[s._v("这样，当用户拥有“show”这个权限时，将会展示出“哈哈”，没有“show”权限时，不会展示。")])])}),[],!1,null,null,null);t.default=p.exports}}]);