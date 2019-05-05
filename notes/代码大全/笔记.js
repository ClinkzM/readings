P67
作者写这本书是 15 年前（2004年）了
P68 摘抄
编程工具不应该决定你的编程思路，区分“在一种语言上编程（programming in a language）”和“深入一种语言去编程（programming into a language）”。
“在一种语言上编程（programming in a language）”的程序员将他的思想限制于“语言直接支持的那些构建”。如果语言工具是初级的，那么程序员的思想也是初级的。
“深入一种语言去编程（programming into a language）”首先决定他要表达的思想是什么，然后决定如何使用特定语言提供的工具来表达这些思想
P69
发明你自己的编码约定、标准、类库以及其他改进措施
P79
同一时间只应该专注于非常少的事情，就像边抛边接的杂耍，别妄图同时思考整个程序，累且混乱，也不现实
所以目标是写出既让自己容易理解，也能让别人容易看懂，而且很少有错误的代码
P80
当我解决问题的时候，我从来不考虑美感。我只想着如何才能解决它。但一旦解决了问题，如果解决方法不够优美的话，我就知道做错了。
P86
类 与 对象 的区别，类是静态的，对象则是在程序运行过程中的实体。可以简单理解，类与对象的关系就是模式（schema）与实例（instance）的关系。对象是蛋糕，类是蛋糕模具
P87
指引试错（trail and error）
P89
定义每个对象的接口
对象对其他对象暴露的数据及方法称为该对象的“公开接口/public interface”，而对象通过继承关系向其派生对象暴露的部分则被称为“受保护的接口（protected interface）”。要考虑两种不同的接口。
P91
编程语言如果能支持像 open() 或 close() 这样在运行期间才能确定所针对的对象的实际类型的操作，这种能力叫做多态/polymorphism
P103
Factory Method 是一个模式，它允许你在对一个特定基类的任意派生类做实例化的时候无须关注具体派生类的情况，除了在 Factory Method 内部。
P105
内聚性指的是类内部的子程序或子程序内的所有代码在支持一个中心目标上的紧密程度 —— 这个类的目标是否集中。包含一切密切相关的功能的类被称为有着高内聚性，而这种启发式方法的目标就是使内聚性尽可能地高。
P106
分层结构使你能够只关注当前正在关注的那一层细节。其他的细节并没有完全消失，它只是被放到了另一层次上，这样你就可以在需要的时候去考虑它们，而不是在所有时间都考虑所有细节。
P114
你可以用 Python 为 Java 设计原型，或者用 PPT 来模拟用户界面。如果你必须要用同一种技术来开发原型，那么可以采纳一种非常实用的标准：在原型的类或者包的名字之前加上 prototype 前缀。这样至少能保证程序员在拓展原型代码之前能三思。
P126
抽象数据类型（ADT, abstract data type）是指一些数据以及对这些数据所进行的操作的集合。这些操作既向程序的其余部分描述了这些数据是怎么样的，也允许程序的其余部分改变这些数据。一个 ADT 可能是一个图形窗体以及所有能影响该窗体的操作；也可以是一个文件以及对这个文件进行的操作；或者是一张保险费率表以及相关操作等。
P129
再创建一个针对现实世界中的问题的抽象层次（最后一句的后半截）
P133
考虑类的一种方式，就是把它看做是抽象数据类型再加上继承和多态两个概念。
P137
一个接口中任何无法通过编译器强制实施的部分，就是一个可能被误用的部分。要想办法把语义接口的元素转换为编程接口的元素，比如说使用 Assets（断言）或其他的技术。
P138
如果你发现某个类的内聚性很弱，也不知道该怎么改，那就换一种方法，问问你自己这个类是否表现为一致的抽象。
P139
也不可能知道 Point 是不是把它们保存在月亮上，然后再从外层空间中的卫星上把它们找回来
P140
建议你把类的接口与类的实现隔离开，并在类的声明中包含一个指针，让该指针指向一个类的实现，但不能包含任何其他实现细节
P141
但是当你读到那些暴露了其实现细节的代码时，你就应该顶住诱惑，不要到类接口的私用部分去寻找关于实现细节的线索。
P146
如果你只是想使用一个类的实现而不是接口，那么就应该采用包含方式，而不该用继承。
派生类中的成员函数不要与基类中不可覆盖的成员函数重名。
只需要一个实例，这可能表明设计中把对象和类混为一谈了。Singleton 则是特例。
P147
请牢牢记住首要的技术使命。请确保你在用继承来避免代码重复并使复杂度最小。
P149
从控制复杂度的角度说，你应该对继承持有非常歧视的态度。
P151
对象的深层复本（deep copies）是对象成员数据逐项复制（member-wise copy）的结果；而其浅层复本则往往只是指向或引用同一个实际对象。
P152
为了不确定的性能提高而增加复杂度是不妥的。
实现浅拷贝除了要用到两种方法都需要的代码外，还要增加很多代码用于引用计数、确保安全地复制对象、安全地比较对象以及安全地删除对象等。而这些代码是容易出错的。
P154
你可以把预计要被改动的部分放到单独的类里，同其他部分隔离开。
P158
LSP 原则 P144 除非派生类真的“是一个”更特殊的基类，否则不应该从基类继承。
P161
什么是子程序（routines）？子程序是为实现一个特定的目的而编写的一个可被调用的方法（method）或过程（procedure）。例如 C++ 中的函数（function），Java 中的方法（method）..
P164
当内部循环或条件判断的嵌套层次很深时，就意味着需要从子程序中提取出新的子程序了。把嵌套的部分提取出来形成一个独立的子程序，可以降低外围子程序的复杂度。
P166
编写有效的子程序时，一个最大的心理障碍是不情愿为一个简单的目的而编写一个简单的子程序。写一个只有两三行代码的子程序可能看起来有些大材小用，但经验表明，一个很好而又小巧的子程序会多有用。
P168
对子程序而言，内聚性是指子程序中各种操作之间联系的紧密程度。
我们的目标是让每一个子程序只把一件事做好，不再做其他任何事情。
P171
编写功能上的内聚性的子程序几乎总是可能的，因此把注意力集中于功能上的内聚性，从而得到更大的收获。
P173
与其对子程序的长度强加限制，还不如让下面这些因素 —— 如子程序的内聚性、嵌套的层次、变量的数量、决策点（decision point）的数量、解释子程序用意所需要的注释数量以及其他一些跟复杂度相关的考虑事项等 —— 来决定子程序的长度。
P179
如果你采用传递整个对象的做法，并发现自己是先创建对象，把被调用子程序所需的 3 项数据填入对象，在调用过子程序后，又从对象中取出 3 项数据的值，那就是一个证据，说明你应该只传递那 3 项数据而不是整个对象。（一般说来，如果在调用子程序之前出现进行装配（set up）的代码，或者在调用子程序之后出现拆卸（take down）的代码，都是子程序设计不佳的表现）。
P180
形式参数也称为“哑参数（dummy parameters）”，是指在子程序定义中的声明的变量。实际参数是指在实际的子程序的调用中用到的变量、常量或表达式。
请养成好的习惯，总要检查参数表中参数的类型，同时留意编译器给出的关于参数类型不匹配的警告。
P182
检查所有可能的返回路径 ...在函数开头用一个默认值来初始化返回值是个很好的做法 —— 这种方法能够在未正确地设置返回值时提供一张保险网。
不要返回指向局部数据的引用或指针 一旦子程序执行结束，其局部数据就都出了作用域，那么任何指向局部数据的引用或指针也随之失效。如果一个对象需要返回有关其内部数据的信息，那就应该把这些信息保存为类的数据成员。然后，它还应该提供可以返回这些数据成员的访问器子程序，而不是返回对局部数据的引用或指针。
P183
通常认为，用宏代替函数调用的做法有风险，而且不易理解 —— 这是一个糟糕的编程实践 —— 因此，除非必要，否则还是应该避免这种技术。
P187
防御式编程这一概念来自于防御式驾驶。
P190
在开发阶段，断言可以帮助查清相互矛盾的假定、预料之外的情况以及传给子程序的错误数据等。
P191
用错误处理代码来处理预期会发生的状况，用断言来处理绝不应该发生的状况
错误处理通常用来检查有害的输入数据，而断言是用于检查代码中的 bug。
P192
前条件是子程序或类的调用方代码在调用子程序或实例化对象之前要确保为真的属性。前条件是调用方代码对其所调用的代码要承担的义务。
后条件是子程序或类在执行结束后要确保为真的属性。后置条件是子程序或类对调用方代码所承担的责任。
P194
那么又该如何处理那些预料中可能要发生的错误呢？根据所处的情形不同，你可以返回中立的值（neutral value）、换用下一个正确数据、返回与前次相同的值、换用最接近的有效值、在日志文件中记录警告信息、返回一个错误码、调用错误处理子程序或对象、显示出错信息或者关闭程序 ———— 或把这些技术结合起来使用。
P204
完成这一工作最简单的方法是在得到外部数据时立即进行清理，不过数据往往需要经过一层以上的清理，因此多层清理有时也是必需的。
在程序中长时间传递类型不明的数据，会增加程序的复杂度和崩溃的可能性
P206
通常情况下死程序说造成的损失要比残废的程序少得多。
