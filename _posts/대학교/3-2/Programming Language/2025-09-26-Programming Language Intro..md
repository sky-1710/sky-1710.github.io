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
  <summary><h5> 요약본  </h5></summary>
  <ul>
   <li> 항목 1</li>
   <li> 항목 2</li>
   <li> 항목 3</li>
   <li> 항목 4</li>
  </ul>
</details>

<br>


---

<br> 




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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

Cost에 관련된 요소로 
- 프로그래머의 트레이닝 시간
- 소프트웨어 제작 시간
- 컴파일하는데 드는 시간 + 컴퓨팅 자원 + 개발 효율성
- 실행 시 드는 컴퓨팅 자원
- 컴파일러의 제작 난이도, 최적화 구현 비용, 런타임 시스템 비용.
- 프로그램에 대한 신뢰성: 오류와 예상치 못한 동작 등... 
- 유지 보수하는데 드는 인적 자원, 에러 대응, 도구 지원

<br>

---

<br> 
<details>
  <summary><h5> Evaluation Criteria : Others </h5></summary>
  <ul>
   <li> Portability</li>
   <li> Generality</li>
   <li> Well-definedness: The completeness and precision of the language's official definition</li>
   <li> Good fit for hardware (e.g., cell) or environmnent (e.g., Web)</li>
   <li> etc...</li>
  </ul>
</details>
- portability
- generality(일반성, 언어의 범용성 : Python, C... )
- well-definedness (syntax + semantics가 얼마나 완전하고 정확하게 정의했는지 평가)
- good fit for hardware/environment (말 그대로)

<br>

---

<br> 

<details>
  <summary><h5 style = "color:blue;"> Recap : Language Evaluation Criteria </h5></summary>
  <ul>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002064206.png" alt="Pasted image 20251002064206" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002064206.png' | relative_url | uri_escape }}" alt="Pasted image 20251002064206" width="400" style="margin-top:40px;">
  </div>
  
  </ul>
</details>


<br>

---

<br> 
<details>
  <summary><h5 style = "color:blue;"> Language Design Trade-offs </h5></summary>
  <ul>
   <li> Reliability vs. Cost of execution</li>
	   <ul>
	   Example: Java demands all references to array elements be checked for proper indexing, which leads to increased execution costs
	   </ul>
   <li> Readability vs. Writability</li>
	   <ul>
	   Example: APL provides many powerful operators (and a large number of new symbols), allowing complex computations to be written in a compact program but at the cost of poor readability
	   </ul>
   <li> Writabiltiy (flexibility) vs. Reliability </li>
	   <ul>
	   Example: C++ pointers are powerful and very flexible but are unreliable
	   </ul>
  </ul>
</details>

- 언어가 reliable하려면 실행 중 더 많은 검사를 해야 됨.
- 프로그램을 간단히 쓸 수 있으면, 읽기는 어려워짐. { ex) Python }
- 프로그램을 유연하게 작성 가능하면 예기치 못한 동작 발생으로 인한 안전성이 떨어짐. 


<br>

---

<br> 
<details>
  <summary><h5> Infulences on Language Design </h5></summary>
  <ul>
   <li> Computer Architecture </li>
	   <ul>
	   <li>
	   Languages are developed around the prevalent computer architecture, known as the von Neumann architecture
	   </li>
	   </ul>
   <li> Program Design Methodologies</li>
	   <ul>
	   <li> New software development methodologies (e.g., objectoriented software development) led to new programming paradigms and by extension, new programming languages</li>
	   </ul>
		<div style="text-align:center;">
	  <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002071444.png" alt="Pasted image 20251002071444" width="400" style="margin-top:40px;">
	  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002071444.png' | relative_url | uri_escape }}" alt="Pasted image 20251002071444" width="400" style="margin-top:40px;">
	</div>
  </ul>
</details>
PL 디자인은 2가지에 영향을 받았는데,
	1. 컴퓨터 구조인(von Neumannn)폰 노이만 구조로 초기 하드웨어 구조인데, 아직 뿌리 깊게 남아 (하드웨어도 마찬가지) 아직도 PL은 이에 맞춰서 디자인 (순차적 실행, 변수/할당, 제어 구조, 메모리 모델) 하고 있다.  
	2. 새로운 프로그램 디자인 개발 방법론이 생기고 (e.g., 객체지향 PL) 이는 새로운 프로그래밍 패러다임으로 이끌고, 새로운 PL로 이어졌다.

<br>

---

<br> 
<details>
  <summary><ul><h5> Language Design Influences</h5><h6> Computer Architecture</h6></ul></summary>
  <ul>
   <li> We use imperative languages, at least in part, because we use von Neumann machines</li>
	   <ul>
	   <li>John von Neuman is generally considered to be the inventor of the "stored program" machines, the class to which most of today's computers belong</li>
	   <li> One CPU + one memory system that contains both program and data </li>
	   </ul>
   <li> Focus on moving data and program instructions between registers in CPU to memory locations</li>
   <li> Fundamentally sequential</li>
<div style="text-align:center;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002074710.png" alt="Pasted image 20251002074710" width="400" style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002074710.png' | relative_url | uri_escape }}" alt="Pasted image 20251002074710" width="400" style="margin-top:40px;">
</div>
  </ul>
</details>
- 주로 쓰는 PL이 명령형 언어인 이유 중 하나는 폰 노이만(von Neumannn) 구조의 컴퓨터를 사용하기 때문. 
- 폰 노이만의 구조는 저장 프로그램(stored-program) 컴퓨터 의 기본 구조로 하나의 CPU와 프로그램과 데이터를 함꼐 저장 하는 하나의 메모리 시스템이다.
- CPU 레지스터와 메모리 사이에서 데이터와 명령어를 옮기는 것이 핵심 동작 방식이라서, 구조는 근본적으로 순차적이다.  
<br>

---

<br> 
<details>
  <summary><h5> Language Design Influences: Programming methodologies </h5></summary>
  <ul>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002074830.png" alt="Pasted image 20251002074830" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002074830.png' | relative_url | uri_escape }}" alt="Pasted image 20251002074830" width="400" style="margin-top:40px;">
  </div>
  </ul>
</details>
- 50-60초는  간단한 프로그램 
- 60 후반은 사람의 효율성을 위해 readability, 제어구조, 유지보수 중요 
- 70 후반은 데이터 추상화
- 80 중반은 객체 지향 PL
<br>

---

<br> 
<details>
  <summary><h5> Language Categories</h5></summary>
  <ul>
   <li> The big four PL paradigms:</li>
	   <ul>
	   <li> Imperative or procedural (e.g., Fortran, C)</li> 
	   <li>Object-oriented (e.g. Smalltalk, Java) </li> 
	   <li>Functional (e.g., Lisp, ML) </li>
	   <li>Rule based (e.g. Prolog, Jess)</li>
	   </ul>
   <li> Others:</li>
	   <ul>
	   <li>Scripting (e.g., Python, Perl, PHP, Ruby)</li>
	   <li>Constraint (e.g., Eclipse)</li> 
	   <li>Concurrent (Occam)</li>  
	   <li>…</li>
	   </ul>
	   	   <div style="text-align:center;">
	     <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002082150.png" alt="Pasted image 20251002082150" width="400" style="margin-top:40px;">
	     <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002082150.png' | relative_url | uri_escape }}" alt="Pasted image 20251002082150" width="400" style="margin-top:40px;">
	   </div>
  </ul>
</details>

- PL의 4가지 패러다임 
	- 명령형 또는 절차적 (순차 실행 + 함수 단위로 모듈화)
	- 객체 지향
	- 함수형
	- 규칙 기반 
- 다른 것들...
	- 스크립트 언어
	- 제약 기반 언어 
	- 병렬/동시성 언어
	- 멀티 페러다임 언어
	- 선언적 / 논리형 언어

- PL의 기본 요소 
	- syntax (구문) 
	- semantics (의미론)
	- binding (바인딩)
	- scope (스코프, 유효 범위)
	- parameter passing (매개변수 전달)
	- control (제어 구조)
	- types (타입 시스템)

<br>

---

<br> 
<details>
  <summary><h5> Implementation methods </h5></summary>
  <ul>
  <li>Direct execution by hardware </li>
	  <ul>
	  <li>e.g., native machine language</li>
	  </ul>
<li>Compilation to another language </li>
	<ul>
	<li>e.g., C compiled to native machine language</li>
	</ul>
<li>Interpretation: direct execution by software  </li>
	<ul>
	<li>e.g., csh, Lisp (traditionally), Python, JavaScript </li>
	</ul>
<li>Hybrid: compilation then interpretation</li>
	<ul>
	<li>Compilation to another language (aka bytecode), then interpreted by a ‘virtual machine’, e.g., Java, Perl  </li>
	</ul>
<li>Just-in-time compilation</li>
	<ul>
	<li>Dynamically compile some bytecode to native code (e.g., V8 javascript engine)</li>
	</ul> 
</ul>
</details>
프로그래밍 언어 구현 방법
 - 하드웨어 직접 실행 (e.g., assembly)
 - 다른 언어로 컴파일 (C->assembly)
 - 인터프리터 : 소프트웨어가 하드웨어 대신 실행 
 - 하이브리드 : 컴파일 후 인터프리트 
	 - 다른 OS에서도 사용 가능 
	 - 가짜 CPU (VM)를 만들어서 실행하면 다른 플랫폼에서도 동작하게 만드는 것 
 - Just-in-compile (즉시 컴파일) 
	 - 자주 실행되는 부분은 런타임에 기계어로 변환해서 속도를 올림.
		 - 처음은 인터프리터처럼 실행하다가 자주 실행되는 코드(핫스팟, hotspot)를 감지하면 런타임 도중 그 부분을 기계어로 변환해서 저장해둠.
		 - 그 뒤부터는 변환된 기계어를 그대로 실행하니까 훨씬 빠름.

<br>

---

<br> 
<details>
  <summary><h5> Implementation metod : Architecture </h5></summary>
  <ul>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002092924.png" alt="Pasted image 20251002092924" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002092924.png' | relative_url | uri_escape }}" alt="Pasted image 20251002092924" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002092842.png" alt="Pasted image 20251002092842" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002092842.png' | relative_url | uri_escape }}" alt="Pasted image 20251002092842" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002092856.png" alt="Pasted image 20251002092856" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002092856.png' | relative_url | uri_escape }}" alt="Pasted image 20251002092856" width="400" style="margin-top:40px;">
  </div>
  </ul>
</details>

<br>

---

<br> 
<details>
  <summary><h5> Implementation Issues </h5></summary>
  <ul>
<div style="text-align:center;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002093032.png" alt="Pasted image 20251002093032" width="400" style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002093032.png' | relative_url | uri_escape }}" alt="Pasted image 20251002093032" width="400" style="margin-top:40px;">
</div>  
</ul>
</details>
<li><font color = "blue"> Compile과 Interpret의 Trade-off </font></li>
<ul>
	<li> Complie의 경우 Interpret보다는 실행 속도가 빠르다.</li>
		<ul> 
		<li> 소스코드에서 기계어 다음 execute 코드라서 실행을 한번만 하니까 빠르다.</li>
		</ul>
	<li>Interpret의 경우 compiler/interpreter 구현 난이도, 번역 속도, 이식성, 디버깅 , 코드의 간결성 같은 경우들이 유리하다. </li>
		 <ul> 
		 <li> compiler/interpreter 구현 난이도 : 소스코드를 읽고 한 줄씩 해석해서 실행하기 때문에 쉬움.</li>
		 <li> 번역 속도: 실행 전에 전체 번역 과정이 없고, 코드를 읽으면서 바로 실행해서, 즉시 결과 확인 가능</li>
		 <li> 코드 이식성 : 중간 코드(또는 원래 소스 코드) + 인터프리터 프로그램만 있으면 됨</li>
			 <ul>
			 <li> 컴파일러의 경우, 특정 OS나 CPU에 맞는 기계어로 변환 과정을 거쳐야됨</li>
			 </ul>
		<li> 디버깅 용이성 : 실행을 한줄씩 진행하면서 바로바로 오류를 알려줌.</li>
        <li> 코드 간결성: Interpreter은 소스 코드나 바이트 코드 그대로 보관해서 실행 파일이 작음.  
			 <ul>
			 <li> 컴파일러의 경우, 최적화된 기계어 생성에 의해 크기가 커짐.</li>
			 </ul>
        </ul>
</ul>

<br>

---

<br> 
<details>
  <summary><h5> Programming Environment </h5></summary>
  <ul>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20251002095329.png" alt="Pasted image 20251002095329" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251002095329.png' | relative_url | uri_escape }}" alt="Pasted image 20251002095329" width="400" style="margin-top:40px;">
  </div>
  </ul>
</details>

- 소프트웨어 개발에 필요한 도구 : 에디터, 디버거, 컴파일러, 협업 도구등이 포함
- 현대는 IDE (Integrated Development Environments) : 보통 특정 언어에 맞춰져 있으며, 프로그래머가 생각하는 수준에서 지원을 제공.
	- 범용 IDE : Eclipse,  
	- 참고로 Anaconda는 배포용 프로그램 (Python 생태계 + 데이터 과학용 패키지 모음 + 환경 관리 도구 + 일부 IDE(Spyder/Jupyter))


