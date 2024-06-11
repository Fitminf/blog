(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{355:function(a,t,s){"use strict";s.r(t);var v=s(7),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"学点数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学点数据结构"}},[a._v("#")]),a._v(" 学点数据结构")]),a._v(" "),t("p",[a._v("和算法一样，都是跨语言的技术，有空学点，日积月累")]),a._v(" "),t("p",[a._v("面试复习用：")]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("数据结构就是把数据元素按照一定的关系组织起来的集合，用来组织和存储数据。")]),a._v(" "),t("p",[t("strong",[a._v("图解分类")])]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("逻辑结构分类")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("集合结构：集合结构中数据元素除了属于同一个集合外，他们之间没有任何其他的关系。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301724154.png",alt:"image-20220930172208125"}})]),a._v(" "),t("li",[t("p",[a._v("线性结构：线性结构中的数据元素之间存在一对一的关系。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301724241.png",alt:"image-20220930172227297"}})]),a._v(" "),t("li",[t("p",[a._v("树形结构：树形结构中的数据元素之间存在一对多的层次关系。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301724345.png",alt:"image-20220930172252652"}})]),a._v(" "),t("li",[t("p",[a._v("图形结构：图形结构的数据元素是多对多的关系。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301724463.png",alt:"image-20220930172259026"}})])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("物理结构分类")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("顺序存储结构：把数据元素放到地址连续的存储单元里面，其数据间的逻辑关系和物理关系是一致的 ，比如我们常用的数组就是")]),a._v(" "),t("p",[a._v("顺序存储结构。")])]),a._v(" "),t("li",[t("p",[a._v("链式存储结构：是把数据元素存放在任意的存储单元里面，这组存储单元可以是连续的也可以是不连续的。此时，数据元素之间并不能反映元素间的逻辑关系，因此在链式存储结构中引进了一个指针存放数据元素的地址，这样通过地址就可以找到相关联数据元素的位置")])])])])]),a._v(" "),t("h2",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),t("p",[a._v("数组中元素的存储是按照先后顺序进行的，同时在内存中也是按照这个顺序进行连续存放。")]),a._v(" "),t("p",[a._v("数组相邻元素之间的内存地址的间隔一般就是数组数据类型的大小。")]),a._v(" "),t("p",[a._v("随机访问效率高，带有索引")]),a._v(" "),t("p",[a._v("增删的效率是比较低的，因为每一次增删操作都伴随着大量的数据元素移动。")]),a._v(" "),t("h2",{attrs:{id:"链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[a._v("#")]),a._v(" 链表")]),a._v(" "),t("h3",{attrs:{id:"单向链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单向链表"}},[a._v("#")]),a._v(" 单向链表")]),a._v(" "),t("p",[a._v("单向链表是链表的一种，它由多个结点组成，每个结点都由一个数据域（E）和一个指针域（Node）组成，数据域用来存储数据，")]),a._v(" "),t("p",[a._v("指针域用来指向其后继结点。链表的头结点的数据域不存储数据，指针域指向第一个真正存储数据的结点（虚拟头结点）。")]),a._v(" "),t("h3",{attrs:{id:"双向链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[a._v("#")]),a._v(" 双向链表")]),a._v(" "),t("p",[a._v("单向链表不能逆向查找，而双向链表结构的出现正是为了解决该缺点。双向链表不同于单向链表的地方在于，单向链表只有后继节点的指针域，而双向链表除了有一个后继节点的指针域外，还有有一个前驱指针域。")]),a._v(" "),t("h3",{attrs:{id:"循环链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环链表"}},[a._v("#")]),a._v(" 循环链表")]),a._v(" "),t("p",[a._v("循环链表相对于单向链表是一种特别的链式存储结构。循环链表与单链表很相似，唯一的改变就是将单链表中最后一个结点和头结点相关 联，即将最后一个节点的后继指针域指向了头节点，这样整个链表结构就行成了一个环。这样改造的好处是当我们想要获取链表中的某个 值时，表中的任何一个结点都能通过循环的方式到达该节点，并获取到该值。")]),a._v(" "),t("h3",{attrs:{id:"循环双向链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环双向链表"}},[a._v("#")]),a._v(" 循环双向链表")]),a._v(" "),t("p",[a._v("就是双向链表+循环链表")]),a._v(" "),t("h2",{attrs:{id:"栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[a._v("#")]),a._v(" 栈")]),a._v(" "),t("p",[a._v("栈是一种比较简单的数据结构，常用一句话描述其特性，先进后出。栈本身是一个线性表，但是在这个表中只有一个口子允许数据的进出。")]),a._v(" "),t("p",[t("strong",[a._v("场景")])]),a._v(" "),t("ul",[t("li",[a._v("系统方法调用")]),a._v(" "),t("li",[a._v("括号匹配")])]),a._v(" "),t("h2",{attrs:{id:"队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[a._v("#")]),a._v(" 队列")]),a._v(" "),t("p",[a._v("队列是一种特殊的线性表，特殊之处在于它只允许在表的队首（front）进行删除操作（出队），而在表的队尾进行插入操作（入队），和栈一样，队列是一种操作受限制的线性表。先进先出。")]),a._v(" "),t("p",[t("strong",[a._v("循环队列")])]),a._v(" "),t("p",[a._v("循环队列是队列的一种升级版本，当一个队列入队了很多元素即将扩容之前，然后又进行了若干个出队操作，在循环队列中此时再次入队，会利用已经出队的内存空间进行元素的存储，合理利用空间，如过此时空间还不够，再进行扩容。")]),a._v(" "),t("p",[a._v("在循环队列中需引入一个类似于指针一样的属性：队尾（tail）去维护最后有个元素指向的位置。")]),a._v(" "),t("h2",{attrs:{id:"树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树"}},[a._v("#")]),a._v(" 树")]),a._v(" "),t("p",[a._v("树结构比较复杂，不深究，只知道他效率极高。")]),a._v(" "),t("p",[t("strong",[a._v("分类")])]),a._v(" "),t("ul",[t("li",[a._v("二分搜索树")]),a._v(" "),t("li",[a._v("红黑树")]),a._v(" "),t("li",[a._v("B 树、B+ 树")])]),a._v(" "),t("h1",{attrs:{id:"与-java-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与-java-相关"}},[a._v("#")]),a._v(" 与 Java 相关")]),a._v(" "),t("p",[a._v("学这玩意自始至终我还是为了搞 java。")]),a._v(" "),t("h2",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" List")]),a._v(" "),t("h3",{attrs:{id:"arraylist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist"}},[a._v("#")]),a._v(" ArrayList")]),a._v(" "),t("p",[a._v("基于动态数组集合，可以动态的增加、删除元素，动态扩容等，默认初始容量10")]),a._v(" "),t("ul",[t("li",[a._v("优点：按下标索引速度快(O(1))。")]),a._v(" "),t("li",[a._v("缺点：插入删除会慢(O(n))。")])]),a._v(" "),t("h3",{attrs:{id:"linkedlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist"}},[a._v("#")]),a._v(" LinkedList")]),a._v(" "),t("p",[a._v("基于链表的集合，是一个双向链表，没有初始化大小，也没有扩容的机制，会一直在前面或者后面新增Node。")]),a._v(" "),t("ul",[t("li",[a._v("优点：便于存取，只要改变头尾节点指向 (O(1))。")]),a._v(" "),t("li",[a._v("缺点：索引慢，极端情况会出现从头结点遍历到最后一个节点的情况 (O(n))。")])]),a._v(" "),t("h3",{attrs:{id:"vector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[a._v("#")]),a._v(" Vector")]),a._v(" "),t("p",[a._v("也是基于数组的一个集合，对一些操作数据的方法加了 synchronized，可以看做是 ArrayList 一个同步、线程安全的版本")]),a._v(" "),t("ul",[t("li",[a._v("优点：线程安全的。")]),a._v(" "),t("li",[a._v("缺点：同步必然会导致效率慢。")])]),a._v(" "),t("h3",{attrs:{id:"list-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-总结"}},[a._v("#")]),a._v(" List 总结")]),a._v(" "),t("ul",[t("li",[a._v("上面几种集合都属于线性数据结构，也是有序，元素之间都有关联关系。")]),a._v(" "),t("li",[a._v("基于数组的：在分配内存时是一块规整的内存，所有数据都紧邻着。")]),a._v(" "),t("li",[a._v("基于链表的：虽然在内存里都是不连续的，但是每个节点都会保留下一个节点的引用。")])]),a._v(" "),t("h2",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" Map")]),a._v(" "),t("p",[a._v("Map 是一种把键对象和值对象映射的集合，它的每一个元素都包含一对键对象和值对象。 Map 没有继承于 Collection 接口。")]),a._v(" "),t("h3",{attrs:{id:"hashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[a._v("#")]),a._v(" HashMap")]),a._v(" "),t("p",[a._v("HashMap 底层是数组+链表(jdk1.8是数组+链表/红黑树)，HashMap 可能也是应用最多的数据结构了。")]),a._v(" "),t("p",[a._v("初始容量 16")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301724691.png",alt:"image-20220930172311216"}})]),a._v(" "),t("h3",{attrs:{id:"hashtable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashtable"}},[a._v("#")]),a._v(" Hashtable")]),a._v(" "),t("p",[a._v("其实就是 HashMap 的一个线程安全版本，像 Vector 和 ArrayList 的关系一样，对内部的方法都加了"),t("code",[a._v("synchronized")]),a._v("关键字修饰。")]),a._v(" "),t("p",[a._v("注意 Hashtable 中的 table 是小写的。")]),a._v(" "),t("ul",[t("li",[a._v("缺点：因为采用"),t("code",[a._v("synchronized")]),a._v("保证同步，每次都会锁住整个map，所以高并发线程在争夺同一把锁的时候性能急剧下降。")])]),a._v(" "),t("h3",{attrs:{id:"linkedhashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashmap"}},[a._v("#")]),a._v(" LinkedHashMap")]),a._v(" "),t("p",[a._v("LinkedHashMap 底层是数组+双向链表，和 HashMap 类似，只是双向链表记录了元素添加的顺序，所以是有序的，具体源码尚未研究。")]),a._v(" "),t("h3",{attrs:{id:"treemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treemap"}},[a._v("#")]),a._v(" TreeMap")]),a._v(" "),t("p",[a._v("平常开发中用的不多，是一个红黑树版本的 map，实现了"),t("code",[a._v("NavigableMap<K,V>")]),a._v("并且NavigableMap又继承了"),t("code",[a._v("SortedMap<K,V>")]),a._v("类，SortedMap接口有一个"),t("code",[a._v("Comparator<? super K> comparator();")]),a._v("比较器，所以TreeMap是支持比较排序的。")]),a._v(" "),t("ul",[t("li",[a._v("特点：采用红黑树实现，是一个有序的map。")])]),a._v(" "),t("h3",{attrs:{id:"concurrenthashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap"}},[a._v("#")]),a._v(" ConcurrentHashMap")]),a._v(" "),t("p",[a._v("底层也是 HashMap，同时保证了线程安全，与 HashTable 不同的 ConcurrentHashMap 采用分段锁思想，抛弃了使用synchronized修饰操作方法的同步方式。")]),a._v(" "),t("ul",[t("li",[a._v("分段锁思想：\n都知道HashTable效率低下的原因是因为整个容器只有一把锁，多线程争抢同一把锁导致。 ConcurrentHashMap分段锁指得是将数据分成一个个的"),t("code",[a._v("Segment<K,V>")]),a._v("，每个Segment又继承"),t("code",[a._v("ReentrantLock")]),a._v("，这样一个map容器就会有多个Lock，每个Lock锁不同的数据段，当一个线程占用锁访问其中一个段数据的时候，其他段的数据也能被其他线程访问。")])]),a._v(" "),t("p",[t("strong",[a._v("1.7与1.8的区别：")])]),a._v(" "),t("ol",[t("li",[a._v("因为底层是HashMap，so 1.8之后也变成了数组+链表/红黑树。")]),a._v(" "),t("li",[a._v("1.8之后放弃了分段锁，采用了"),t("code",[a._v("synchronized")]),a._v("+"),t("code",[a._v("CAS")]),a._v("来保证并发。")])]),a._v(" "),t("p",[t("strong",[a._v("1.8为何放弃分段锁：")])]),a._v(" "),t("ol",[t("li",[a._v("主要是1.8对"),t("code",[a._v("synchronized")]),a._v("进行了优化(偏向锁、轻量级锁、自旋锁、自适宜自旋)")]),a._v(" "),t("li",[a._v("加入多个分段锁浪费内存空间。")]),a._v(" "),t("li",[a._v("生产环境中， map在放入时竞争同一个锁的概率非常小，分段锁反而会造成更新等操作的长时间等待。")])]),a._v(" "),t("h2",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[a._v("#")]),a._v(" Set")]),a._v(" "),t("h3",{attrs:{id:"hashset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[a._v("#")]),a._v(" HashSet")]),a._v(" "),t("p",[a._v("HashSet 基于 HashMap 实现，利用 Map 的 key 不能重复来实现 Set 的元素唯一性。")]),a._v(" "),t("p",[a._v("由源码可知构造器中直接 new 了有个 HashMap：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://fitminfpicgo.oss-cn-guangzhou.aliyuncs.com/picgo/202209301724810.png",alt:"image-20220930172319233"}})]),a._v(" "),t("h3",{attrs:{id:"linkedhashset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset"}},[a._v("#")]),a._v(" LinkedHashSet")]),a._v(" "),t("p",[a._v("LinkedHashSet 基于 LinkedHashMap 实现，继承自 HashSet，可以看出是一个有序的 Set（可以像LinkedHashMap自定义排序）")])])}),[],!1,null,null,null);t.default=_.exports}}]);