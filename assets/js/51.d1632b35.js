(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{362:function(v,a,_){"use strict";_.r(a);var l=_(7),e=Object(l.a)({},(function(){var v=this,a=v._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"gradle-java-插件相关的包含关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-java-插件相关的包含关系"}},[v._v("#")]),v._v(" Gradle Java 插件相关的包含关系")]),v._v(" "),a("h2",{attrs:{id:"question"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[v._v("#")]),v._v(" question")]),v._v(" "),a("p",[v._v("grade 8.8 中，自带了很官方核心插件，比如 java 、java-library等等，我已知 java-library 已经包含 java 插件的功能，还有其他的插件相关的包含关系吗，请告诉我")]),v._v(" "),a("h2",{attrs:{id:"answer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer"}},[v._v("#")]),v._v(" answer")]),v._v(" "),a("p",[v._v("在 Gradle 中，一些插件会包含其他插件的功能，以简化项目配置。这些核心插件和它们之间的包含关系如下：")]),v._v(" "),a("h3",{attrs:{id:"java-插件相关的包含关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-插件相关的包含关系"}},[v._v("#")]),v._v(" Java 插件相关的包含关系")]),v._v(" "),a("ol",[a("li",[a("strong",[v._v("Java Library Plugin ("),a("code",[v._v("java-library")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("java-library")]),v._v(" 插件是为构建 Java 库设计的，它扩展了 "),a("code",[v._v("java")]),v._v(" 插件的功能，增加了 "),a("code",[v._v("api")]),v._v(" 和 "),a("code",[v._v("implementation")]),v._v(" 依赖配置，使得区分公共 API 和内部实现变得更加容易。")])])]),v._v(" "),a("li",[a("strong",[v._v("Application Plugin ("),a("code",[v._v("application")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("application")]),v._v(" 插件用于构建可执行的 Java 应用程序。它扩展了 "),a("code",[v._v("java")]),v._v(" 插件，并添加了创建分发包、启动脚本等功能。")])])]),v._v(" "),a("li",[a("strong",[v._v("War Plugin ("),a("code",[v._v("war")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("war")]),v._v(" 插件用于构建 Web 应用程序的 WAR（Web Application Archive）包。它扩展了 "),a("code",[v._v("java")]),v._v(" 插件，并添加了特定于 Web 应用程序的任务和配置。")])])]),v._v(" "),a("li",[a("strong",[v._v("Ear Plugin ("),a("code",[v._v("ear")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("ear")]),v._v(" 插件用于构建企业应用程序的 EAR（Enterprise Application Archive）包。它扩展了 "),a("code",[v._v("java")]),v._v(" 插件，并添加了特定于企业应用程序的任务和配置。")])])]),v._v(" "),a("li",[a("strong",[v._v("Groovy Plugin ("),a("code",[v._v("groovy")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("groovy")]),v._v(" 插件用于构建 Groovy 项目。它扩展了 "),a("code",[v._v("java")]),v._v(" 插件，并添加了对 Groovy 编译和测试的支持。")])])]),v._v(" "),a("li",[a("strong",[v._v("Scala Plugin ("),a("code",[v._v("scala")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("scala")]),v._v(" 插件用于构建 Scala 项目。它扩展了 "),a("code",[v._v("java")]),v._v(" 插件，并添加了对 Scala 编译和测试的支持。")])])]),v._v(" "),a("li",[a("strong",[v._v("Kotlin Plugin ("),a("code",[v._v("kotlin")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("kotlin")]),v._v(" 插件用于构建 Kotlin 项目。它扩展了 "),a("code",[v._v("java")]),v._v(" 插件，并添加了对 Kotlin 编译和测试的支持。")])])]),v._v(" "),a("li",[a("strong",[v._v("Java Gradle Plugin Development Plugin ("),a("code",[v._v("java-gradle-plugin")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("包含："),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("java-gradle-plugin")]),v._v(" 插件用于开发 Gradle 插件。它扩展了 "),a("code",[v._v("java")]),v._v(" 插件，并添加了与 Gradle 插件开发相关的任务和配置。")])])])]),v._v(" "),a("h3",{attrs:{id:"其他常见的插件包含关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他常见的插件包含关系"}},[v._v("#")]),v._v(" 其他常见的插件包含关系")]),v._v(" "),a("ol",[a("li",[a("strong",[v._v("Base Plugin ("),a("code",[v._v("base")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("不包含其他插件")]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("base")]),v._v(" 插件添加了一些基础的任务（如 "),a("code",[v._v("clean")]),v._v("），并允许其他插件扩展其功能。")])])]),v._v(" "),a("li",[a("strong",[v._v("Java Platform Plugin ("),a("code",[v._v("java-platform")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("不包含 "),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("java-platform")]),v._v(" 插件用于定义一个依赖管理平台。它不包含 "),a("code",[v._v("java")]),v._v(" 插件，因为它专注于依赖版本管理，而不是构建代码。")])])]),v._v(" "),a("li",[a("strong",[v._v("Distribution Plugin ("),a("code",[v._v("distribution")]),v._v(")")]),v._v(" "),a("ul",[a("li",[v._v("不包含 "),a("code",[v._v("java")])]),v._v(" "),a("li",[v._v("说明："),a("code",[v._v("distribution")]),v._v(" 插件用于创建可分发的压缩包。它可以与 "),a("code",[v._v("java")]),v._v(" 插件结合使用，但不直接包含 "),a("code",[v._v("java")]),v._v(" 插件。")])])])]),v._v(" "),a("p",[v._v("通过这些插件之间的包含关系，Gradle 可以简化项目配置，使开发人员更容易选择和使用合适的插件来构建他们的项目。如果你有更多关于具体插件的问题，或者需要进一步的帮助，请随时告诉我！")])])}),[],!1,null,null,null);a.default=e.exports}}]);