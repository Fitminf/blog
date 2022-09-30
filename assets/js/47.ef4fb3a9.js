(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{359:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"开发规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[s._v("#")]),s._v(" 开发规范")]),s._v(" "),t("h2",{attrs:{id:"开发规范-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发规范-2"}},[s._v("#")]),s._v(" 开发规范")]),s._v(" "),t("p",[s._v("开发规范包含开发过程中的技术选型、项目规范、数据库表设计等等\n规范中包含【强制】和【推荐】，具体规范可能存在重复")]),s._v(" "),t("p",[s._v("关于代码规范是在 Java 语言允许（jvm 编译通过）的情况下进一步约束，开发规范的订制其目的是为了提升我们在开发工作中和阅读别人代码时每一刻的幸福感（代码洁癖之福音）")]),s._v(" "),t("p",[s._v("关于技术应用选型方面，基本都是在新技术和新框架中选择，并非是对旧技术的排斥，而是要明白大势所趋，在有限的职业生涯内随波逐流，尽可能的在提升编程体验的同时且降低学习成本")]),s._v(" "),t("h3",{attrs:{id:"技术选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[s._v("#")]),s._v(" 技术选型")]),s._v(" "),t("p",[t("strong",[s._v("JDK 版本")])]),s._v(" "),t("ul",[t("li",[s._v("【强制】OpenJDK 1.8 以上")])]),s._v(" "),t("p",[t("strong",[s._v("框架")])]),s._v(" "),t("ul",[t("li",[s._v("【强制】禁止使用任何版本的 SSH 框架")]),s._v(" "),t("li",[s._v("【推荐】使用 springboot 框架作为基础")]),s._v(" "),t("li",[s._v("【推荐】关于常用 util 优先选用 apache 和 spring 提供的工具")]),s._v(" "),t("li",[s._v("【推荐】如选用 mybatis 作为持久层框架应该配合 mybatis-plus 框架一起使用")]),s._v(" "),t("li",[s._v("【推荐】合理使用 Lombok 工具让实体类编写更加优雅美观")])]),s._v(" "),t("p",[t("strong",[s._v("数据库")])]),s._v(" "),t("ul",[t("li",[s._v("【推荐】关系型数据库优先选用 mysql 8.0 以上版本")]),s._v(" "),t("li",[s._v("【推荐】缓存数据库优先选用 redis 6.0 +")])]),s._v(" "),t("p",[t("strong",[s._v("服务器")])]),s._v(" "),t("ul",[t("li",[s._v("【强制】选用 Ubuntu 或者 Centos（版本在 7 中选择，8 的命令改动太大）linux 系统作为服务器禁止使用 window 系统作为服务器")])]),s._v(" "),t("p",[t("strong",[s._v("其他")])]),s._v(" "),t("ul",[t("li",[s._v("【推荐】根据需求酌情使用 docker")]),s._v(" "),t("li",[s._v("【强制】原则上项目应该前后端完全分离")]),s._v(" "),t("li",[s._v("【推荐】git 和 svn 中选择 git")]),s._v(" "),t("li",[s._v("【强制】idea 和 eclipse 中选择 idea")])]),s._v(" "),t("h3",{attrs:{id:"项目规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目规范"}},[s._v("#")]),s._v(" 项目规范")]),s._v(" "),t("p",[t("strong",[s._v("命名")])]),s._v(" "),t("ul",[t("li",[s._v("【强制】代码中任何地方的命名必须以字母开头")]),s._v(" "),t("li",[s._v("【强制】命名时请打开有道词典等翻译工具，能翻译成单词的禁止写成拼音（之前我呆过一家公司真的受够了那群**同事的各种奇葩且花里胡哨命名）")]),s._v(" "),t("li",[s._v("【强制】类名首字母大写且驼峰（DTO、VO 等实体类除外，如：UserDTO、UserVO。我还的遇到过同事把类名首字母小写的，依旧是那家公司）；方法名、参数名、成员变量、局部变量一律首字母小写且驼峰、常量命名全部大写，单词之间下划线分割。")]),s._v(" "),t("li",[s._v("【强制】包名全部小写，多个单词连起来写（spring 框架就是这么干的）")])]),s._v(" "),t("p",[t("strong",[s._v("实体")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("【强制】严格区分 entity、vo、dto 等实体")]),s._v(" "),t("ul",[t("li",[s._v("entity：与持久层对接，对接数据库")]),s._v(" "),t("li",[s._v("vo：表现层展示对象")]),s._v(" "),t("li",[s._v("dto：表现层接收对象")])])]),s._v(" "),t("li",[t("p",[s._v("【强制】entity 属性必须与数据库中所对应表的字段一一对应，且杜绝使用数据库的关键字和保留字")])]),s._v(" "),t("li",[t("p",[s._v("【强制】entity 禁止作为接口返回值和接口参数，包括直接以 entity 为泛型的返回值和参数（如"),t("code",[s._v("List<User>")]),s._v("）")])]),s._v(" "),t("li",[t("p",[s._v("【强制】entity 中不能存在除 Lombok 与持久层相关框架以外的注解（包括 swagger 注解，因为持久层不出现在表现层中），如需要转换时间属性格式，应该 vo 或者 dto 中转换")])]),s._v(" "),t("li",[t("p",[s._v("【强制】原则上 entity 只能出现：成员变量、构造器、get/set 方法以及父类 Object 里拥有的方法。")])]),s._v(" "),t("li",[t("p",[s._v("【强制】如果业务需要继承实体反复使用，可以使用"),t("code",[s._v("XxxModel extends Xxx")]),s._v(" （Xxx 为 entity）")])]),s._v(" "),t("li",[t("p",[s._v("【强制】布尔属性不能加 is，直接使用原有词义作为属性名，使用注释加以详细解释")]),s._v(" "),t("ul",[t("li",[s._v("说明：对于名词，比如 name、age 等，让人见名知意，对于布尔值一般都不是名词，比如要表示是否失效，严禁使用 isInvalid，应该直接使用 invalid 且使用注释说明：0 - 未失效；1 - 已失效")])])]),s._v(" "),t("li",[t("p",[s._v("【强制】一个 entity 该有的样子如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@TableName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mono_info"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MonoInfo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" serialVersionUID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4578914319077161888L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 主键 ID\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@TableId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IdType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ASSIGN_UUID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 项目名\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 创建时间\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),s._v(" createTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])])])]),s._v(" "),t("p",[t("strong",[s._v("接口")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("【强制】如果项目中使用了 swagger，必须详细注释每一个业务接口")])]),s._v(" "),t("li",[t("p",[s._v("【强制】entity 禁止作为接口返回值和接口参数，包括直接以 entity 为泛型的返回值和参数（如"),t("code",[s._v("List<User>")]),s._v("），应该使用 vo 和 dto")])]),s._v(" "),t("li",[t("p",[s._v("【强制】接口中尽量简洁高效，禁止写任何业务逻辑。")])]),s._v(" "),t("li",[t("p",[s._v("【强制】接口中返回值中封装的返回数据里的泛型必须指明，且在任何地方泛型都应该指明数据类型，如果未知类型应该使用"),t("code",[s._v("<?>")])])]),s._v(" "),t("li",[t("p",[s._v("【建议】推荐使用 restful 风格接口")])]),s._v(" "),t("li",[t("p",[s._v("【强制】一个 controller 该有的样子如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Api")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Game"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tags "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"【后台】游戏管理接口"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameService")]),s._v(" gameService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ApiOperation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"游戏列表"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" notes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"获取所有游戏列表信息"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/game/list"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PagerVO")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameVO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GameList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameDTO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Condition")]),s._v(" dto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" gameService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])]),s._v(" "),t("p",[t("strong",[s._v("注释")])]),s._v(" "),t("ul",[t("li",[s._v("每个类必须使用 doc 注释、每个业务方法都应该注释、业务逻辑中关键的逻辑转折点需要注释")]),s._v(" "),t("li",[s._v("实体类每个属性需要注释")])]),s._v(" "),t("p",[t("strong",[s._v("其他")])]),s._v(" "),t("ul",[t("li",[s._v("【推荐】能用编程解决的，就少用配置文件；能用注解解决的，就少用编程（mybatis 持久层操作除外）")]),s._v(" "),t("li",[s._v("【强制】使用 maven 或者 gradle 进行构建项目，且使用构建工具进行依赖引用，原则上禁止手动往项目中添加 jar 包进行引用（特殊情况除外：如使用国产数据库在 maven 仓库中还没有相关 jdbc 驱动）")]),s._v(" "),t("li",[s._v("【推荐】合理使用枚举")])]),s._v(" "),t("h3",{attrs:{id:"数据库表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库表"}},[s._v("#")]),s._v(" 数据库表")]),s._v(" "),t("ul",[t("li",[s._v("【推荐】原则上是先建立数据表再编写 Java 实体类")]),s._v(" "),t("li",[s._v("【强制】表名和 entity 类名一一对应，下划线转驼峰")]),s._v(" "),t("li",[s._v("【强制】字段名和实体属性名一一对应，下划线钻驼峰")]),s._v(" "),t("li",[s._v("【推荐】原则上每张表都应该有创建时间和更新时间")]),s._v(" "),t("li",[s._v("【强制】表名和字段名统一使用小写")]),s._v(" "),t("li",[s._v("【强制】每张表都应该有一个主键，主键名为 id，主键不能与业务中有任何联系，仅为表建立索引，即使该表中已经有业务字段是全局唯一")]),s._v(" "),t("li",[s._v("【强制】原则上任何表不应该有主外键关联，应该使用中间表或者在表中建立冗余字段")]),s._v(" "),t("li")]),s._v(" "),t("p",[t("strong",[s._v("我只想更加愉快的写代码")])]),s._v(" "),t("blockquote",[t("p",[s._v("部分参考《阿里巴巴 Java 开发手册》\n部分为个人"),t("strong",[s._v("强迫症")]),s._v("！")]),s._v(" "),t("p",[s._v("更新日期：2021-06-07 01:11:48")])]),s._v(" "),t("h2",{attrs:{id:"参与贡献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参与贡献"}},[s._v("#")]),s._v(" 参与贡献")]),s._v(" "),t("ol",[t("li",[s._v("Fork 本仓库")]),s._v(" "),t("li",[s._v("新建 Feat_xxx 分支")]),s._v(" "),t("li",[s._v("提交代码")]),s._v(" "),t("li",[s._v("新建 Pull Request")])])])}),[],!1,null,null,null);t.default=e.exports}}]);