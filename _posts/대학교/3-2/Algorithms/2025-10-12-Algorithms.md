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

| Parameter | STACK | HEAP |
| --- | --- | --- |
| Basic | Memory is allocated in a contiguous block. | Memory is allocated in any random order. |
| Allocation and De-allocation | Automatic by compiler instructions. | Manual by the programmer (in C or C++ and garbage collector in Java or Python) |
| Cost | Less | More |
| Implementation | Easy | Hard |
| Main Issue | Shortage of memory | Memory fragmentation |
| Locality of reference | Excellent | Adequate |
| Safety | Thread safe, data stored can only be accessed by the owner | Not Thread safe, data stored visible to all threads |
| Flexibility | Fixed-size | Resizing is possible |
| Data type structure | Linear | Hierarchical |
| Preferred | Static memory allocation is preferred in an array. | Heap memory allocation is preferred in the linked list. |
| Size | Smaller than heap memory. | Larger than stack memory. |






<br>

 ---

<br>

<details>
  <summary><h5> Title 3 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_03.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 4 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_04.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 5 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_05.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 6 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_06.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 7 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_07.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 8 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_08.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 9 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_09.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 10 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_10.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 11 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_11.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 12 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_12.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 13 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_13.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 14 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_14.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 15 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_15.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 16 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_16.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 17 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_17.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 18 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_18.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 19 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_19.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 20 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_20.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 21 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_21.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 22 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_22.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 23 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_23.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 24 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_24.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 25 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_25.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 26 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_26.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 27 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_27.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 28 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_28.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 29 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_29.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 30 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_30.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 31 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_31.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 32 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_32.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 33 </h5></summary>
  img(Algo/Lecture02/Alg_02_Review_Data_Structures_33.jpg)
</details>
<br>

 ---

<br>