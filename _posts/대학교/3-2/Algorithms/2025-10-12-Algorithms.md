---
title: "Review : Data Structures"
date: 2025-10-12 04:52:00 +09:00
categories:
  - university
  - 2025s
  - 3-2
  - Algorithms
tags:
  - Algorithms
pin: false
---
<details>
  <summary><h5> 제목 입력 </h5></summary>
  <ul>
   <li> 항목 1</li>
   <li> 항목 2</li>
   <li> 항목 3</li>
   <li> 항목 4</li>
  </ul>
</details>

<br>

----

<br>
<details>
  <summary><h5> Arrays </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_02.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 02" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_02.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 02" width="400" style="margin-top:40px;">
  </div>
</details>

- Logical order : indicated by index, and it's same as physical order (The data of the array, element is stored continuously in memory)

- Creation of an array
	- Type : int, float, char, class
	- Declaring it in 2 ways : Array, Pointer 
		- Difference : works differently 
			- Array : stores in stack (function call, 메모리 구조 해당) (Weak point : limitation on adjusting size, stack has smaller memory space than heap )
				- physical space(OS)에서 Stack space는 continuously 저장이 보장됨
			- Pointer : stores in heap (function call, 메모리 구조 해당)
				- physical space(OS)에서 heap space는 RAM안에서 페이지 단위로 쪼개어 여러 위치에 흩어져 있을 수 있고, 이는 가상 메모리 저장이 보장됨

| Parameter                    | STACK                                                      | HEAP                                                                           |
| ---------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Basic                        | Memory is allocated in a contiguous block.                 | Memory is allocated in any random order.                                       |
| Allocation and De-allocation | Automatic by compiler instructions.                        | Manual by the programmer (in C or C++ and garbage collector in Java or Python) |
| Cost                         | Less                                                       | More                                                                           |
| Implementation               | Easy                                                       | Hard                                                                           |
| Main Issue                   | Shortage of memory                                         | Memory fragmentation                                                           |
| Locality of reference        | Excellent                                                  | Adequate                                                                       |
| Safety                       | Thread safe, data stored can only be accessed by the owner | Not Thread safe, data stored visible to all threads                            |
| Flexibility (장점)             | Fixed-size                                                 | Resizing is possible                                                           |
| Data type structure          | Linear                                                     | Hierarchical                                                                   |
| Preferred                    | Static memory allocation is preferred in an array.         | Heap memory allocation is preferred in the linked list.                        |
| Size                         | Smaller than heap memory.                                  | Larger than stack memory.                                                      |


- 이 수업에서 global variable을 fixed size로 선언하는 건 Prohibited이다! 절대 쓰지 마라! 
	- \#define MAX 1000000;
	- int d[MAX];
	- 쓰지 말라는 이유는 문제에서 사용될 메모리 공간 보다 더 많이 쓰여, 이를 낭비하게 되기 때문.
	- 그렇기에, 동적 배열 사용.

|     | 배열 생성  | 배열 해제   |
| --- | ------ | ------- |
| C   | malloc | free    |
| C++ | new    | delete  |
- new/delete vs. malloc/free
	- 서포트하는 PL이 다르다. C vs. C,C++
	- Constructor(생성자)의 차이. new/delete는 자동으로 클래스(객체) 생성자와 소멸자를 부름. malloc/free는 못해.
<br>

 ---

<br>

<details>
  <summary><h5> Arrays </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_03.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 03" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_03.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 03" width="400" style="margin-top:40px;">
  </div>
</details>

- new를 사용해서 2 차원 배열 생성
	- int \*\*a = new int \* \[3]; (double pointer 선언)
		for( int = 0 ; i<3 ; i++ )
		{a\[i] = new int \[4];}

- new를 사용해서 3 차원 배열 생성
	- int d\[3]\[4]\[5]; (stack, static ver.)
	- int \*\*\*d = new int \*\*\[3]; (dynamic ver.)
		for (int i=0 ; i < 3 ; i++){
		d\[i] = new int \*\[4];
			for (int j=0 ; j < 4 ; j++ ){
			d\[i]\[j] = new int \[5]; 
			}
		}

	- int \*\*\*d = new int \*\*\[n]; (dynamic ver.) (유연하게, n,m,k 변수로 조정 가능)
		for (int i=0 ; i < n ; i++){
		d\[i] = new int \*\[m];
			for (int j=0 ; j < m ; j++ ){
			d\[i]\[j] = new int \[k]; 
			}
		}


<br>

 ---

<br>

<details>
  <summary><h5> Stacks </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_04.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 04" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_04.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 04" width="400" style="margin-top:40px;">


    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_05.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 05" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_05.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 05" width="400" style="margin-top:40px;">
  </div>
</details>

- Stack is kind of container(data structure that can contain data)
	- Last - In - First - Out(LIFO)
	- 2 basic operation : Insertion (push) & Deletion (pop)
	
- Stack의 Application
	- code parsing (ex> (2\*3)+5...)
	- tracking function call ( function call stack )
	- dealing with undo redo operations ( undo와 redo 상태 operation)
	- Tree / Graph traversal



<br>

 ---

<br>

<details>
  <summary><h5> Queues </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_06.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 06" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_06.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 06" width="400" style="margin-top:40px;">
  </div>
</details>

- Queues 
	- Frist in First out (FIFO) behavior. (different with stack)
	- 2 postion to maintain queue : front (head) , back (tail)
	- 2 basic operation : Enqueue, Dequeue
		- Enqueue : push at the back (insertion)
		- Dequeue : pop at the front (deletion)

<br>

 ---

<br>

<details>
  <summary><h5> Circular Queue </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_07.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 07" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_07.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 07" width="400" style="margin-top:40px;">
  </div>
</details>

- Circular Queue의 탄생
	- tail이 end of the array이고, front 앞에 자리가 남은 상태에서 Enqueue를 했을 때, Queue로써는 사용할 수 없기 때문에 이를 해결하기 위해 고안한 방법.
	- 그래서, end of the array에 넣을 item을 front에 넣으면서, 해결함.


<br>

 ---

<br>

<details>
  <summary><h5> Application of Queues </h5></summary>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_08.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 08" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_08.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 08" width="400" style="margin-top:40px;">
  </div> 
</details>

- Client - Server models
	- many requests comes to server and it has to process sequentially. So, it uses queue.

- Breadth First Search 

<br>

 ---

<br>

<details>
  <summary><h5> Trees </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_09.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 09" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_09.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 09" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_10.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 10" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_10.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 10" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_11.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 11" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_11.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 11" width="400" style="margin-top:40px;">
  </div>
  
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_12.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 12" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_12.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 12" width="400" style="margin-top:40px;">
  </div>
  
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_13.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 13" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_13.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 13" width="400" style="margin-top:40px;">
  </div>


    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_14.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 14" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_14.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 14" width="400" style="margin-top:40px;">
  </div>

</details>

- Tree has a lots of node. Node stores name, phone number....etc.
- Root Node : First node
- Child Node : Node who has Successor node
- Each node, other than the root, has exactly one node (parent node) pointing to it.

- Degree : 특정 노드의 the number of children 
- Sibling : 같은 부모 노드인 노드끼리  

- Leaf node : Children을 갖지 않은 degree가 0인 노드
- internal node : Children을 갖고 degree가 0이 아닌 노드

<br>

 ---


<br>

<details>
  <summary><h5> Trees - 2 </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_15.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 15" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_15.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 15" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_16.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 16" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_16.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 16" width="400" style="margin-top:40px;">
  </div>
  
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_17.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 17" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_17.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 17" width="400" style="margin-top:40px;">
  </div>
</details>

- One way to categorizing tree : Unordered , Ordered

- Path : Sequence of nodes 
- Length : Nodes 사이에 있는 선의 수 
	- 조건은 무조건 부모 자식 관계여야지 length 카운팅에 성립됨.

<br>

 ---
<br>

<details>
  <summary><h5> Trees - 3 </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_18.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 18" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_18.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 18" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_19.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 19" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_19.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 19" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_20.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 20" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_20.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 20" width="400" style="margin-top:40px;">
  </div>
  <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_21.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 21" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_21.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 21" width="400" style="margin-top:40px;">
  </div>
</details>

- Depth : 해당 노드부터 root 노드 사이의 거리 
	- 해당 노드부터 root 노드 까지의 path는 unique해야 됨  
	- 관련 Data Structure : DFS

- Height :  Maximum depth of the tree. 
	- Height 0 : if the tree has only one node or it has only root node  

<br>

 

 ---

<br>

<details>
  <summary><h5> Tree - 4 </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_22.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 22" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_22.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 22" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_23.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 23" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_23.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 23" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_24.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 24" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_24.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 24" width="400" style="margin-top:40px;">
  </div>
   <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_25.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 25" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_25.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 25" width="400" style="margin-top:40px;">
  </div>
</details>

- a -> b 
	- a is an (strict) ancestor of b
	- b is an (strict) descendent of a

- adjective strict 
	- about node a, itself
	- a is an ancestor of a (o)
	- a is a descendent of a (o)
	-  a is a strict ancestor of a (x)
- The root node is a strict ancestor of all nodes (except root node)

<br>

 ---

<br>

<details>
  <summary><h5> Breadth First Search </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_26.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 26" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_26.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 26" width="400" style="margin-top:40px;">
  </div>
  <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_27.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 27" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_27.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 27" width="400" style="margin-top:40px;">
  </div>
       <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_28.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 28" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_28.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 28" width="400" style="margin-top:40px;">
  </div>

<div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_29.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 29" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_29.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 29" width="400" style="margin-top:40px;">
  </div>
<div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_30.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 30" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_30.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 30" width="400" style="margin-top:40px;">
  </div>
<div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_31.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 31" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_31.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 31" width="400" style="margin-top:40px;">
  </div>
<div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_32.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 32" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_32.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 32" width="400" style="margin-top:40px;">
  </div>
</details>

- BFS order is not unique 
- 그저 Breadth 먼저면 되어서, 그 레벨의 순서는 상관이 없다. 

- 그럼 질문... -> 레벨의 순서에 맞지만, 해당 노드의 자식을 무작위한 순서로 갖고 가는 건 되나?  
<br>
 ---

<br>

<details>
  <summary><h5> Depth First Search using Stack </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_33.jpg" alt="Algo/Lecture02/Alg 02 Review Data Structures 33" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Algo/Lecture02/Alg_02_Review_Data_Structures_33.jpg' | relative_url | uri_escape }}" alt="Algo/Lecture02/Alg 02 Review Data Structures 33" width="400" style="margin-top:40px;">
  </div>
</details>

- implement by stack 
- DFS의 스택 원리 : root 노드부터 stack에 넣으면서 시작한다. 그리고 그 노드의 바로 직속 자식 노드를 넣고, 맨 위를 pop한 후, pop한 노드의 직속 자식 노드를 넣는다. 그리고 만약 pop한 노드의 직속 자식 노드가 없으면, 다시 pop하면 된다.   
<br>