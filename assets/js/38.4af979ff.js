(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{349:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"发布中央仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布中央仓库"}},[s._v("#")]),s._v(" 发布中央仓库")]),s._v(" "),t("p",[t("strong",[s._v("2024 改版")])]),s._v(" "),t("h2",{attrs:{id:"账号准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#账号准备"}},[s._v("#")]),s._v(" 账号准备")]),s._v(" "),t("h3",{attrs:{id:"注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[s._v("#")]),s._v(" 注册")]),s._v(" "),t("p",[s._v("在 https://central.sonatype.com/ 网站上注册账号")]),s._v(" "),t("h3",{attrs:{id:"新建命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建命名空间"}},[s._v("#")]),s._v(" 新建命名空间")]),s._v(" "),t("p",[s._v("登录后在顶部找到 Publish（发布） 按钮点击")]),s._v(" "),t("p",[s._v("找到 Namespaces（名称空间） 按钮点击")]),s._v(" "),t("p",[s._v("找到 Add Namespaces 按钮点击")]),s._v(" "),t("p",[s._v("添加命名空间")]),s._v(" "),t("ul",[t("li",[s._v("使用 gitee 作为命名空间")]),s._v(" "),t("li",[s._v("比如我的 gitee 主页链接是：https://gitee.com/fitminf")]),s._v(" "),t("li",[s._v("那么我的命名空间是 io.gitee.fitminf\n"),t("ul",[t("li",[s._v("其他的仓库可以按照下面的要求来创建：\n"),t("ul",[t("li",[s._v("GitHub io.github.myusername")]),s._v(" "),t("li",[s._v("GitLab io.gitlab.myusername")]),s._v(" "),t("li",[s._v("...")])])])])])]),s._v(" "),t("p",[s._v("验证命名空间")]),s._v(" "),t("ul",[t("li",[s._v("点击 verify namespace 的名称")]),s._v(" "),t("li",[s._v("按照要求创建一个仓库以证明该命名空间属于你")]),s._v(" "),t("li",[s._v("之后点击 confirm 即可完成")])]),s._v(" "),t("p",[s._v("创建 push 账号密码")]),s._v(" "),t("ul",[t("li",[s._v("点击右上角 view account")]),s._v(" "),t("li",[s._v("点击 Generate User Token")]),s._v(" "),t("li",[s._v("点击 ok")]),s._v(" "),t("li",[s._v("会生成一个账号密码，在一分钟内记录下来（一分钟以后弹窗会消失需要重新生成）")])]),s._v(" "),t("p",[t("strong",[s._v("账号准备自此完毕")])]),s._v(" "),t("h2",{attrs:{id:"gpg-准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpg-准备"}},[s._v("#")]),s._v(" GPG 准备")]),s._v(" "),t("h3",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" macOS")]),s._v(" "),t("p",[s._v("在 macOS 中")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 gpg")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gnupg\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成秘钥")]),s._v("\ngpg --gen-key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依次输入名称，邮箱地址，如下")]),s._v("\n\ngpg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GnuPG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.4")]),s._v(".5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Copyright "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" g10 Code GmbH\nThis is "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software: you are "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\n注意：使用 “gpg --full-generate-key” 以获得一个全功能的密钥生成对话框。\n\nGnuPG 需要构建用户标识以辨认您的密钥。\n\n真实姓名： fitminf\n电子邮件地址： fitminf@163.com\n您选定了此用户标识：\n    “fitminf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fitminf@163.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("”\n\n更改姓名（N）、注释（C）、电子邮件地址（E）或确定（O）/退出（Q）？ O\n我们需要生成大量的随机字节。在质数生成期间做些其他操作（敲打键盘\n、移动鼠标、读写硬盘之类的）将会是一个不错的主意；这会让随机数\n发生器有更好的机会获得足够的熵。\n我们需要生成大量的随机字节。在质数生成期间做些其他操作（敲打键盘\n、移动鼠标、读写硬盘之类的）将会是一个不错的主意；这会让随机数\n发生器有更好的机会获得足够的熵。\ngpg: 目录‘/Users/fitminf/.gnupg/openpgp-revocs.d’已创建\ngpg: 吊销证书已被存储为‘/Users/fitminf/.gnupg/openpgp-revocs.d/8102E1FA945711CE1973BC01774E34A41D736CB5.rev’\n公钥和私钥已经生成并被签名。\n\npub   ed25519 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-06-15 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("有效至：2027-06-15"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      8102E1FA945711CE1973BC01774E34A41D736CB5\nuid                      fitminf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fitminf@163.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nsub   cv25519 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-06-15 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("E"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("有效至：2027-06-15"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拿到秘钥 id：8102E1FA945711CE1973BC01774E34A41D736CB5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布秘钥")]),s._v("\ngpg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--keyserver")]),s._v(" keyserver.ubuntu.com --send-keys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("秘钥 id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布失败就换手机热点查询发布")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测秘钥是否发布成功")]),s._v("\ngpg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--keyserver")]),s._v(" keyserver.ubuntu.com --recv-keys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("秘钥 id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成私钥文件（这一步很重要）")]),s._v("\ngpg --export-secret-keys "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" ~/.gnupg/secring.gpg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("h2",{attrs:{id:"发布-jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布-jar"}},[s._v("#")]),s._v(" 发布 jar")]),s._v(" "),t("h4",{attrs:{id:"gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[s._v("#")]),s._v(" Gradle")]),s._v(" "),t("p",[s._v("使用 vanniktech 的插件")]),s._v(" "),t("ul",[t("li",[s._v("官网：https://github.com/vanniktech/gradle-maven-publish-plugin")]),s._v(" "),t("li",[s._v("文档：https://vanniktech.github.io/gradle-maven-publish-plugin/central/")])]),s._v(" "),t("p",[s._v("最终")]),s._v(" "),t("p",[s._v("build.gradle.kts 文件如下：")]),s._v(" "),t("div",{staticClass:"language-kotlin line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-kotlin"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vanniktech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("maven"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("publish"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SonatypeHost\n\ndescription "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tailor-core script configuration"')])]),s._v("\n\nversion "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.7"')])]),s._v("\n\n\nplugins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.vanniktech.maven.publish"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.28.0"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义源代码和JavaDoc的Jar任务")]),s._v("\nmavenPublishing "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or when publishing to https://central.sonatype.com/")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("publishToMavenCentral")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SonatypeHost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CENTRAL_PORTAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("signAllPublications")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("coordinates")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.gitee.fitminf"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tailor-core"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.7"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    pom "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tailor-core"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        description"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test publish"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        inceptionYear"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2024"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://gitee.com/fitminf/caramel-personal-tailor"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        licenses "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            license "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The Apache License, Version 2.0"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.apache.org/licenses/LICENSE-2.0.txt"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                distribution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.apache.org/licenses/LICENSE-2.0.txt"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        developers "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            developer "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"caramel-personal-tailor"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tailor-core"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fitminf@163.com"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        scm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://gitee.com/fitminf/caramel-personal-tailor"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scm:git:git://gitee.com/fitminf/caramel-personal-tailor.git"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            developerConnection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scm:git:ssh://gitee.com/fitminf/caramel-personal-tailor.git"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br")])]),t("p",[s._v("gradle.properties 文件如下：")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("mavenCentralUsername")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("sonatype 中 Generate User Token 生成的账号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("mavenCentralPassword")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("sonatype 中 Generate User Token 生成的密码")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("signing.keyId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("秘钥 id 最后 8 位")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("signing.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("秘钥 id 密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("signing.secretKeyRingFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/Users/fitminf/.gnupg/secring.gpg")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("在 idea gradle 插件中找到 publishing 里的 publish 点击")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202406161457630.png",alt:"image-20240616145711583"}})]),s._v(" "),t("p",[s._v("然后来到 https://central.sonatype.com/publishing/deployments 找到刚刚的发布记录，如果没有报错，在网页中点击 publish 稍等片刻即可发布成功")]),s._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),t("h3",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])])])}),[],!1,null,null,null);t.default=e.exports}}]);