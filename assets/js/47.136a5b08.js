(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{360:function(s,n,t){"use strict";t.r(n);var i=t(7),a=Object(i.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"新版-jenkins-的巨坑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新版-jenkins-的巨坑"}},[s._v("#")]),s._v(" 新版 jenkins 的巨坑")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("最近在业余时间做项目练习，想模拟真实的工作场景，包括各种代码和应用的安装和部署都放在阿里云的服务器上，在走到安装部署 jenkins 的时候，发现了各种如依赖无法下载，页面跳转 403 的问题，折腾了两天，终于填上了一个大坑。废话少扯，直接复现问题和解决方案：")]),s._v(" "),n("h2",{attrs:{id:"环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),n("p",[s._v("阿里云服务器 + docker + jenkins")]),s._v(" "),n("h2",{attrs:{id:"问题-1-依赖无法下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题-1-依赖无法下载"}},[s._v("#")]),s._v(" 问题 1：依赖无法下载")]),s._v(" "),n("p",[s._v("首先 使用 docker 下载最新的 jenkins")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301818254.png",alt:"image-20220930181835190"}})]),s._v(" "),n("p",[s._v("注意我们下载的是的第二个 jenkins/jenkins，第一个 jenkins 官方已经不维护了")]),s._v(" "),n("p",[s._v("然后 "),n("code",[s._v("docker run -di --name=jenkins -p 50000:50000 -p 8888:8080 -v /mnt/jenkins:/var/jenkins_home jenkins/jenkins")])]),s._v(" "),n("p",[s._v("端口和挂载目录自己指定")]),s._v(" "),n("p",[s._v("之后访问 "),n("code",[s._v("阿里云ip:8888")]),s._v("发现找不到服务，然后回到终端 "),n("code",[s._v("docker ps")]),s._v("发现我们的 jenkins 并没有启动起来，这里算是第一个小坑，")]),s._v(" "),n("p",[s._v("通过 "),n("code",[s._v("docker logs jenkins")]),s._v(" 可以看到信息是因为我们挂载的目录要授权")]),s._v(" "),n("p",[s._v("解决办法是："),n("code",[s._v("chown -R 1000:1000 /mnt/jenkins")]),s._v("(自己修改挂载目录)")]),s._v(" "),n("p",[s._v("然后在访问发现开始初始化了")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301818954.png",alt:"image-20220930181839935"}})]),s._v(" "),n("p",[s._v("然后进入弹框输入 挂载目录下的 initialAdminPassword 文件里的密码  进入插件安装页面，这里出现第一个大坑")]),s._v(" "),n("p",[s._v("由于众所周知的原因，我们无法观看墙外的风景，对于 jenkins 的下载源都在墙的外面，找了很多资料发现给出的答案都是已经在安装好 jenkins 管理界面去替换下载路径，但是像我这样卡在第一步的情况下，根本进不去，然后继续找，终于在这篇帖子中：")]),s._v(" "),n("p",[s._v("https://my.oschina.net/u/4355717/blog/4721963 找到了解决这个问题的答案。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301818720.png",alt:"image-20220930181845703"}})]),s._v(" "),n("p",[s._v("但是有所区别的是，可能是我下载的版本更新，或者是我用 docker 的原因，default.json 文件里的 "),n("code",[s._v("http://updates.jenkins-ci.org/download")]),s._v(" 变成了"),n("code",[s._v("https://updates.jenkins.io/download")]),s._v("，所以我们需要把这个文件下载到本地，将 "),n("code",[s._v("updates.jenkins.io/download")]),s._v("全局替换成\t"),n("code",[s._v("mirrors.tuna.tsinghua.edu.cn/jenkins")]),s._v("  其他的照他的帖子做就可以。")]),s._v(" "),n("p",[s._v("需要注意的是，这个纯 json文件接近 3M，还是比较大的，需要忍一下，替换的数量没记错的话有 1800 多个，电脑会有点卡")]),s._v(" "),n("p",[s._v("替换好的文本在重新上传到服务器覆盖原始的 json，这样的话，接着往下走，重启一下 docker jenkins ，重新访问页面  选择安装推荐插件")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301818577.png",alt:"image-20220930181850559"}})]),s._v(" "),n("p",[s._v("终于看到这个场景，算是搞定一个坑。")]),s._v(" "),n("p",[s._v("（这里可能会出现重启之后还是不行的情况，我之前有遇过一次，我去查看替换过的 json 文件发现又重新生成了个新的把我上传的又给覆盖，无奈我接着将它再覆盖掉，后来重启docker 镜像就没这个问题了，不行的小伙伴反复几次试试）")]),s._v(" "),n("h2",{attrs:{id:"问题-2-随处可见的-403"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题-2-随处可见的-403"}},[s._v("#")]),s._v(" 问题 2：随处可见的 403")]),s._v(" "),n("p",[s._v("解决问题一之后发现我想在里面设置点东西，随便点几下图标就跳到了403 页面，话说我第一个账号可是超级管理员，百度后发现是需要关闭跨站请求伪造保护，但是大部分给出解决方案是如这篇帖子所说：https://www.cnblogs.com/nnniki/p/9347550.html")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301818728.png",alt:"image-20220930181855712"}})]),s._v(" "),n("p",[s._v("但是我们新版的进去发现根本没有这个框框让我们取消勾选，又找了许久，才发现新版的需要手动配置启动参数，由于是 docker 部署的和直接安装在服务器上的又好像不太一样，有的帖子说需要 "),n("code",[s._v("vim /etc/sysconfig/jenkins")]),s._v(" 设置 "),n("code",[s._v("-Dhudson.security.csrf.GlobalCrumbIssuerConfiguration.DISABLE_CSRF_PROTECTION=true")]),s._v("，但是docker 安装的并没有找到这个文件，终于在：https://blog.csdn.net/weixin_39841610/article/details/111364260?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-4.control&spm=1001.2101.3001.4242 这个帖子里找到解决办法：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301819180.png",alt:"image-20220930181906151"}})]),s._v(" "),n("p",[s._v("注意的时候，这个 jenkins.sh 所在路径并没有挂载，所以需要进入容器里去修改，然后重启。")]),s._v(" "),n("p",[s._v("到这一步  算是大功告成了！！！！")]),s._v(" "),n("h2",{attrs:{id:"结尾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结尾"}},[s._v("#")]),s._v(" 结尾")]),s._v(" "),n("p",[s._v("回想上一次自己部署 jenkins 是在 19 年，那会是在本机上的 vm 虚拟机里搞的，当时一路顺风顺水，没想到现在遇到这么多坑，")]),s._v(" "),n("p",[s._v("由于现在已经是凌晨两点，")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301819983.png",alt:"image-20220930181918954"}})]),s._v(" "),n("p",[s._v("此刻发文是想趁这会刚刚解决完问题思路比较清晰，比如过两天又忘了步骤 23333333")]),s._v(" "),n("p",[s._v("由于时间关系所以很多基础的命令和步骤都没给到，只放了几张图，对与文中的其他人的帖子也是直接截图过来了，放图之前也附上他们的原文地址表示尊重和感谢！！")]),s._v(" "),n("p",[s._v("明天还上班，晚安~")]),s._v(" "),n("h2",{attrs:{id:"更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[s._v("#")]),s._v(" 更新")]),s._v(" "),n("p",[s._v("对于安装好后汉化不完全的问题")]),s._v(" "),n("p",[s._v("需要安装插件 Locale ，然后在全局系统配置设置 Locale 项目中填入 zh_US  (反正我设置 zh_CN 是无效的)")])])}),[],!1,null,null,null);n.default=a.exports}}]);