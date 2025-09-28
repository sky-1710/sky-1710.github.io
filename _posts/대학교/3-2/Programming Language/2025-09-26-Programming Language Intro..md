---
title: Programming Language Intro.
date: 2025-09-26 02:14:00 +09:00
categories:
  - university
  - 2025s
  - 3-2
  - Programming Language
tags:
  - programminglanguage
pin: false
---

<details>
  <summary><h5>What is a PL?</h5></summary>
  <ul>
   <li> formal constructed language - communicate instructions to a machine</li>
   <li> to create programs to control machine </li>
   <li> to express algorithms </li>
   <li> syntax (form) & semantics (meaning)</li>
  </ul>
</details>

 - PL은 알고리즘을 표현하고. 기계를 조종 및 instruction을 주기 위한 형식적인 구조의 언어 
 - 구성 요소는 syntax (form, grammar)와 semantics (meaning, what each sentence means)로 이루어져 있다. 
<br> 

<details>
<summary><h5>PL을 정의 내리면 </h5></summary>
<ul>
<li> A tool for humans to tell the computer what to do </li>
<li> A means of formal and exact communication between humans</li>
<li> A way of describing an abstract machine</li>
<li> A way of describing computation that is readable both man and machine </li>
</ul>
</details>

- 인간 및 컴퓨터에게 형식적이면서 정확한 의사소통을 위해서 쓰는 언어. (+ 논리, 계산 )
- 추상적인 기계를 표현하기 위해 쓰는 언어 
<br>

<details>
  <summary><h5> Why programming languages? </h5></summary>
  <ul>
   <h6> Reasons to study theory programming languages</h6> 
   <li> Enhanced ability to learn new languages</li>
   <li> Borrowing ideas from other languages</li>
   <li> Ability to express ideas and programming concepts</li> 
   <li> Choice of programming language</li>
   <li> Understanding the implementation behind languages </li>
   <li> Mastering different programming paradigms</li>
   <li> Desining your own "programming language"</li>
  </ul>
  
</details>

- 다양한 domain에서 어떤 PL이 나은지 선택 능력 
- 다양한 프로그래밍 패러다임(절차, 객체 ,함수 등등)을 마스터할 수 있음
- PL 디자인 할 수 있게 됨
- 아이디어와 프로그래밍 개념을 표현할 수 있는 능력.

<br>

<details>
  <summary><h5> Programming Language Properties </h5></summary>
  <ul>
   <li> Programming language must be universal.</li>
	   <ul>
	   <li> Every problem must have a programming solution.</li>
	   <li> Any language in which we can define recursive functions is universal.</li>
	   </ul>
   <li> Reasonably natural for solving problems within its intended application area. </li>
   <li> Implementable on a computer.</li>
	   <ul>
	   <li> Possible to execute every well-formed program in the language.</li>
	   <li> Mathematial notation is not implementable (it is possible to formulate problems that cannot be solved in any computer).</li>
	   </ul>
   <li> Acceptably effcient implementation.</li>
  </ul>
</details>

- PL은 universal이여야 하며, 재귀 함수를 정의할 수 있어야 한다. 
- PL은 응용 되어야 할 특정 영역에서 직관적으로 문제를 풀 수 있어야 한다. 
- 컴퓨터에 구현 가능해야 한다. 
	- 수학적 표기법으로 구현 가능하지 않아서, 수학적으로 기술은 가능해도 컴퓨터로 풀 수 없는 경우가 존재. 

<br>

<details>
  <summary><h5> Language Evaluation Criteria </h5></summary>
  <ul>
   <li> Readability : programs can be read and understood</li>
   <li> Writability : language can be used easily to create programs</li>
   <li> Reliability : performs to its specifiactions ( perform specific job as it expected)</li>
   <li> Cost : the ultimate total cost (it should be limited & low)</li>
   <li> Portability : moved from one to another </li>
   <li> Generality : wide range of applications </li>
  </ul>
</details>

- Readability, Writability, Reliability, Cost, Portability, Generality 

<br>

<details>
  <summary><h5> Evaluation Criteria: Readability </h5></summary>
  <ul>
   <li> How easy is it to read and understand programs written in the programming language?</li>
   <li> Arguably the most important criterion!</li>
   <li> Factors effecting readability include:</li>
	   <ul>
	   <li> Overall simplicity</li>
		   <ul>
		   <li> Too many features is bad as is a multiplicity of features</li>
		   </ul>
	   <li> Orthogonality : a relatively small set of primitive constructs can be combined in a relativelly small number of ways to build the control and data structures of the language </li>
		   <ul>
		   <li> Makes the language easy to learn and read</li>
		   <li> Meaning is context independent </li>
		   </ul>
	   <li>Control statements</li>
	   <li> Data type and structures</li>
	   <li> Syntax considerations </li>
	   </ul>
  </ul>
</details>

- criteria 중에서 가장 중요한 criterion 
- Overall simplicity : 전체적으로 심플해야 한다. 여러가지 기능과 다양한 기능은 이를 해친다.  
- Orthogonality(직교성) : 작은 양의 기본 요소들로 단순한 몇 가지 방식으로 제어구조나 데이터 구조를 만드는 것.
	- 직교성이 닞은 경우 :  유연성 (flexibility)이 생긴다.
	- 직교성이 높은 경우 :  readabiltiy가 안 좋다
	- 직교성은 Python이 C언어 보다 높음. 
		- 그래서 배우기 쉽고 의미가 context 독립적이다.

<br>

<details>
  <summary><h5> Readability : simplicity </h5></summary>
  <ul>   
   <li>Programming languages with a large number of basic components are harder to learn; most programmers using these languages tend to learn and use subsets of the whole language.</li>
   <li>Complex languages have multiplicity</li>
   <li>Overloading operators can reduce the clarity of the program’s meaning</li>
  </ul>
</details>

- PL에 기본 요소가 많을 수록 배우기 어렵고, 프로그래머는 일부 요소만 사용하는 경우가 대부분이다. 
- 복잡한 언어일 경우 여러가지 기능을 지원
- 오버로딩 연산자는 프로그램의 명확성을 해친다. 

<br>


<details>
  <summary><h5> Readability : Orthogonality </h5></summary>
  <ul>
   <li> For a programming language to be orthogonal, language  
constructs should not behave differently in different  
contexts.  </li>
	<li> The fact that Modula-2’s constant expressions may not  
include function calls can be viewed as a  
nonorthogonality.  </li>
	<li>Examples of Nonorthogonalities  </li>
		<ul>
		<li> In C/C++, arrays types cannot be returned from a function </li> 
		<li>In C, local variables must be at the beginning of a block.  </li>
		<li>C passes ALL parameters by value except arrays (passed by  </li>
reference).
	</ul>
  </ul>
</details>

- PL에 직교성이 있으면, 다양한 맥락에서 다른 방향으로 행동하면 안된다.
- Nonorthogonalities 예시
	- C/C++에서 배열 타입은 함수에서 return 할 수 없다. 
	- C는 배열 외의 모든 파라미터는 값에 의한 호출로 전달한다.
<br>


<details>
  <summary><h5> Data Types and Structures </h5></summary>
  <ul>
   <li> A more diverse set of data types and the ability of programmers to create their own increased program readability:  </li>
<li>Booleans make programs more readable:  </li>
	<ul>
	<li> TimeOut = 1 vs. TimeOut = True </li>
	</ul>
<li> The use of records to store complex data objects makes programs more readable:  </li>
	<ul>
	<li> CHARACTER*30 NAME(100)  </li>
	<li> INTEGER AGE(100), EMPLOYEE_NUM(100) </li>
	<li>REAL SALARY(100) </li>
		<ul> 
		<li>Wouldn’t it better if these were an array of records instead of 4 parallel arrays?</li>
		</ul>
	</ul>
  </ul>
</details>

- 다양한 데이터 타입과 프로그래머의 능력으로 프로그램의 readability를 향상 시킬 수 있다. 
	- ex) Boolean : True vs False 
- 레코드(struct)를 활용하여 복잡한 데이터들을 객체로 정리하면 readability가 높아진다. 
<br>

<details>
  <summary><h5> Syntax </h5></summary>
  <ul>
   <li>Most syntactic features in a programming language can enhance readability:</li>
   <li>Identifier forms – older languages (like FORTRAN) restrict the length of identifiers, which become less meaningful  </li>
   <li>Special words – in addition to while, do and for, some languages use special words to close structures such as endif and endwhile. – Form and meaning</li>
   <li>In C a static variable within a function and outside a function mean two different things – this is undesirable.</li>
  </ul>
</details>

- Syntaxtic features 가 readability를 향상시킨다. 
	- 예를 들면,
	- identifier forms (변수명)
	- Special words 
	- static variable를 local과 global로 나눈것

<br>


<details>
  <summary><h5> Evaluation Criteria: Writability </h5></summary>
  <ul>
  <li>How easy is it to write programs in the language? </li>
	  <ul>
	  <li>Factors effecting writability:  </li>
	  <li>Simplicity and orthogonality</li>  
	  <li>Support for abstraction  </li>
	  <li>Expressivity: set of relatively convenient ways of specifying operations  </li>
	  <li>Fit for the domain and problem</li>
	  </ul>
  </ul>
</details>

- Writability에 영향을 미치는 요소는 
	- simplicity, orthogonality
	- abstraction 지원
	- expressivity : 다양한 방식으로 표현 가능성
		- <p style="color: blue;"> trade off : less readable, more writable</p> 
	- 특정 도메인과 문제 : Matlab (수학 친화적) 

<br>


<details>
  <summary><h5> Evaluation Criteria : Reliability </h5></summary>
  <ul>
   <li> Type Checking – a large factor in program reliability. Compiletime type checking is more desirable. C’s lack of parameter type checking leads to many reliability problems.</li>
   <li>Exception Handling – the ability to catch runtime errors and make corrections can prevent reliability problems.</li>
   <li>Aliasing – having two or more ways of referencing the same data object can cause unnecessary errors.</li>
  </ul>
</details>

- Reliability에 관련된 요소로 type checking, exception handling( catch run time error), aliasing ( 두 변수와 한 메모리 공간 공유)  

<br>


<details>
  <summary><h5> Evaluation Criteria : Cost </h5></summary>
  <ul>
   <li> Categories:</li>
	   <ul>
	   <li>Programmer training  </li>
	   <li>Software creation  </li>
	   <li>Compilation  </li>
	   <li>Execution  </li>
	   <li>Compiler cost  </li>
	   <li>Poor reliability  </li>
	   <li>Maintenance</li>
	   </ul>
  </ul>
</details>

Cost에 관련된 요소로 프로그래머의 트레이닝 시간, 

<br>


