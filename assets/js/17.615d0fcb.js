(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{330:function(v,_,t){"use strict";t.r(_);var s=t(7),o=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"进程与线程的基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程的基本概念"}},[v._v("#")]),v._v(" 进程与线程的基本概念")]),v._v(" "),_("h2",{attrs:{id:"进程产生的背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程产生的背景"}},[v._v("#")]),v._v(" 进程产生的背景")]),v._v(" "),_("p",[v._v("最初的计算机只能接受一些特定的指令，用户每输入一个指令，计算机就做出一个操作。当用户在思考或者输入时，计算机就在等待。这样效率非常低下，在很多时候，计算机都处在等待状态。")]),v._v(" "),_("p",[_("strong",[v._v("批处理操作系统")])]),v._v(" "),_("p",[v._v("后来有了"),_("strong",[v._v("批处理操作系统")]),v._v(",把一系列需要操作的指令写下来，形成一个清单，一次性交给计算机。用户将多个需要执行的程序写在磁带上，然后交由计算机去读取并逐个执行这些程序，并将输出结果写在另一个磁带上。")]),v._v(" "),_("p",[v._v("批处理操作系统在一定程度上提高了计算机的效率，但是由于"),_("strong",[v._v("批处理操作系统的指令运行方式仍然是串行的，内存中始终只有一个程序在运行")]),v._v("，后面的程序需要等待前面的程序执行完成后才能开始执行，而前面的程序有时会由于I/O操作、网络等原因阻塞，所以"),_("strong",[v._v("批处理操作效率也不高")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("进程的提出")])]),v._v(" "),_("p",[v._v("人们对于计算机的性能要求越来越高，现有的批处理操作系统并不能满足人们的需求，而批处理操作系统的瓶颈在于内存中只存在一个程序，那么内存中能不能存在多个程序呢？这是人们亟待解决的问题。")]),v._v(" "),_("p",[v._v("于是，科学家们提出了进程的概念。")]),v._v(" "),_("p",[v._v("进程就是"),_("strong",[v._v("应用程序在内存中分配的空间，也就是正在运行的程序")]),v._v("，各个进程之间互不干扰。同时进程保存着程序每一个时刻运行的状态。")]),v._v(" "),_("blockquote",[_("p",[v._v("程序：用某种编程语言(java、python等)编写，能够完成一定任务或者功能的代码集合,是指令和数据的有序集合，是"),_("strong",[v._v("一段静态代码")]),v._v("。")])]),v._v(" "),_("p",[v._v("此时，CPU采用时间片轮转的方式运行进程：CPU为每个进程分配一个时间段，称作它的时间片。如果在时间片结束时进程还在运行，则暂停这个进程的运行，并且CPU分配给另一个进程（这个过程叫做上下文切换）。如果进程在时间片结束前阻塞或结束，则CPU立即进行切换，不用等待时间片用完。")]),v._v(" "),_("blockquote",[_("p",[v._v("当进程暂停时，它会保存当前进程的状态（进程标识，进程使用的资源等），在下一次切换回来时根据之前保存的状态进行恢复，接着继续执行。")])]),v._v(" "),_("p",[v._v("使用进程+CPU时间片轮转方式的操作系统，在宏观上看起来同一时间段执行多个任务，换句话说，"),_("strong",[v._v("进程让操作系统的并发成为了可能")]),v._v("。虽然并发从宏观上看有多个任务在执行，但在事实上，对于"),_("strong",[v._v("单核CPU")]),v._v("来说，任意具体时刻都只有一个任务在占用CPU资源。")]),v._v(" "),_("p",[_("strong",[v._v("对操作系统的要求进一步提高")])]),v._v(" "),_("p",[v._v("虽然进程的出现，使得操作系统的性能大大提升，但是随着时间的推移，人们并不满足一个进程在一段时间只能做一件事情，如果一个进程有多个子任务时，只能逐个得执行这些子任务，很影响效率。")]),v._v(" "),_("blockquote",[_("p",[v._v("比如杀毒软件在检测用户电脑时，如果在某一项检测中卡住了，那么后面的检测项也会受到影响。或者说当你使用杀毒软件中的扫描病毒功能时，在扫描病毒结束之前，无法使用杀毒软件中清理垃圾的功能，这显然无法满足人们的要求。")])]),v._v(" "),_("p",[_("strong",[v._v("线程的提出")])]),v._v(" "),_("p",[v._v("那么能不能让这些子任务同时执行呢？于是人们又提出了线程的概念，"),_("strong",[v._v("让一个线程执行一个子任务，这样一个进程就包含了多个线程，每个线程负责一个单独的子任务。")])]),v._v(" "),_("blockquote",[_("p",[v._v("使用线程之后，事情就变得简单多了。当用户使用扫描病毒功能时，就让扫描病毒这个线程去执行。同时，如果用户又使用清理垃圾功能，那么可以先暂停扫描病毒线程，先响应用户的清理垃圾的操作，让清理垃圾这个线程去执行。响应完后再切换回来，接着执行扫描病毒线程。")]),v._v(" "),_("p",[v._v("注意：操作系统是如何分配时间片给每一个线程的，涉及到线程的调度策略，有兴趣的同学可以看一下《操作系统》，本文不做深入详解。")])]),v._v(" "),_("p",[v._v("总之，进程和线程的提出极大的提高了操作系统的性能。"),_("strong",[v._v("进程让操作系统的并发性成为了可能，而线程让进程的内部并发成为了可能。")])]),v._v(" "),_("p",[_("strong",[v._v("多进程的方式也可以实现并发，为什么我们要使用多线程？")])]),v._v(" "),_("p",[v._v("多进程方式确实可以实现并发，但使用多线程，有以下几个好处：")]),v._v(" "),_("ul",[_("li",[v._v("进程间的通信比较复杂，而线程间的通信比较简单，通常情况下，我们需要使用共享资源，这些资源在线程间的通信比较容易。")]),v._v(" "),_("li",[v._v("进程是重量级的，而线程是轻量级的，故多线程方式的系统开销更小。")])]),v._v(" "),_("p",[_("strong",[v._v("进程和线程的区别")])]),v._v(" "),_("p",[v._v("进程是一个独立的运行环境，而线程是在进程中执行的一个任务。他们两个本质的区别是"),_("strong",[v._v("是否单独占有内存地址空间及其它系统资源（比如I/O）")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("进程单独占有一定的内存地址空间，所以进程间存在内存隔离，数据是分开的，数据共享复杂但是同步简单，各个进程之间互不干扰；而线程共享所属进程占有的内存地址空间和资源，数据共享简单，但是同步复杂。")]),v._v(" "),_("li",[v._v("进程单独占有一定的内存地址空间，一个进程出现问题不会影响其他进程，不影响主程序的稳定性，可靠性高；一个线程崩溃可能影响整个程序的稳定性，可靠性较低。")]),v._v(" "),_("li",[v._v("进程单独占有一定的内存地址空间，进程的创建和销毁不仅需要保存寄存器和栈信息，还需要资源的分配回收以及页调度，开销较大；线程只需要保存寄存器和栈信息，开销较小。")])]),v._v(" "),_("p",[v._v("另外一个重要区别是，"),_("strong",[v._v("进程是操作系统进行资源分配的基本单位，而线程是操作系统进行调度的基本单位")]),v._v("，即CPU分配时间的单位 。")]),v._v(" "),_("h2",{attrs:{id:"上下文切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#上下文切换"}},[v._v("#")]),v._v(" 上下文切换")]),v._v(" "),_("p",[v._v("上下文切换（有时也称做进程切换或任务切换）是指 CPU 从一个进程（或线程）切换到另一个进程（或线程）。上下文是指"),_("strong",[v._v("某一时间点 CPU 寄存器和程序计数器的内容。")])]),v._v(" "),_("blockquote",[_("p",[v._v("寄存器是cpu内部的少量的速度很快的闪存，通常存储和访问计算过程的中间值提高计算机程序的运行速度。")]),v._v(" "),_("p",[v._v("程序计数器是一个专用的寄存器，用于表明指令序列中 CPU 正在执行的位置，存的值为正在执行的指令的位置或者下一个将要被执行的指令的位置，具体实现依赖于特定的系统。")]),v._v(" "),_("p",[v._v("举例说明 线程A - B")]),v._v(" "),_("p",[v._v("1.先挂起线程A，将其在cpu中的状态保存在内存中。")]),v._v(" "),_("p",[v._v("2.在内存中检索下一个线程B的上下文并将其在 CPU 的寄存器中恢复,执行B线程。")]),v._v(" "),_("p",[v._v("3.当B执行完，根据程序计数器中指向的位置恢复线程A。")])]),v._v(" "),_("p",[v._v("CPU通过为每个线程分配CPU时间片来实现多线程机制。CPU通过时间片分配算法来循环执行任务，当前任务执行一个时间片后会切换到下一个任务。")]),v._v(" "),_("p",[v._v("但是，在切换前会保存上一个任务的状态，以便下次切换回这个任务时，可以再加载这个任务的状态。所以任务从保存到再加载的过程就是一次上下文切换。")]),v._v(" "),_("p",[v._v("上下文切换通常是计算密集型的，意味着此操作会"),_("strong",[v._v("消耗大量的 CPU 时间，故线程也不是越多越好")]),v._v("。如何减少系统中上下文切换次数，是提升多线程性能的一个重点课题。")])])}),[],!1,null,null,null);_.default=o.exports}}]);