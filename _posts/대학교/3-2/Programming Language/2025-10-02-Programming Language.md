---
title: Syntax 1
date: 2025-10-02 10:31:00 +09:00
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
  <summary><h5> 요약본 </h5></summary>
  <ul>
   <li> 항목 1</li>
   <li> 항목 2</li>
   <li> 항목 3</li>
   <li> 항목 4</li>
  </ul>
</details>

<br>

---


<details>
  <summary><h5> Introduction </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_04.jpg" alt="PL/Lecture02/Module2 TPL 04" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_04.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 04" width="400" style="margin-top:40px;">
  </div>
</details>
<br>
- Language : a system of gestures, grammar, signs, sounds, symbols, or words, which is used to represent and communicate concepts, ideas, meanings, and thoughts.
- Human Language : a way to communicate representations from one (human) mind to another 
- Programming Language :  a way to communicate representations(e.g., of data or procedure) between human minds and/or machines





 ---

<br>

<details>
  <summary><h5> Introduction Cont. </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_05.jpg" alt="PL/Lecture02/Module2 TPL 05" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_05.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 05" width="400" style="margin-top:40px;">
  </div>
</details>
- Syntax - the form or structure of the expressions, statements, and program units
- Semantics - the meaning of the expressions, statnements, and program units
- 이 두 가지는 뚜렷하게 구분 못 할 수 있다. 


<br>

 ---

<br>

<details>
  <summary><h5>Why and How</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_06.jpg" alt="PL/Lecture02/Module2 TPL 06" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_06.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 06" width="400" style="margin-top:40px;">
  </div>
</details>
- Syntax와 Semnatics가 필요한 이유 
	- PL의 명세가 다양한 communities에서 필요한 이유:
		- 언어를 쓰는 여러 집단이 다 같이 참고할 수 있는 "공통 설명서"가 필요하기 때문
	- 다른 언어 설계자 - 해당 언어는 이런 규칙과 의미로 동작한다. 정확한 정의 필요
	- 구현자들 - 언어 명세가 없으면 각 구현마다 동작이 달라짐
	- 기계 (하드웨어?) - 컴파일러가 언어의 의미를 정확히 기계어로 번역 (간접적으로 필요)
	- 프로그래머(사용자) - 코드를 쓰고,  코드가 어떤 동작을 할지 이해해야 하기 때문에 명세가 필요 

어떻게 여러 커뮤니티를 위한 명세를 제공할 수 있을까? 
- 한 가지 방법 : 자연어로 설명하는 것 (user's manuals, textbooks)
-  <span style="background-color: #DAFFF7;">하지만, syntax와 semantics를 구체적으로 하는 더 형식적인 기법들이 여럿 있다.</span>
<br>

---- 

<br>

<details>
  <summary><h5> Source to program </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_07.jpg" alt="PL/Lecture02/Module2 TPL 07" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_07.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 07" width="400" style="margin-top:40px;">
  </div>
</details>

- parser 파트는 parser + recognizer
<br>

 ---

<br>


<details>
  <summary><h5> Preliminaries</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_09.jpg" alt="PL/Lecture02/Module2 TPL 09" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_09.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 09" width="400" style="margin-top:40px;">
  </div>
</details>
- sentence - strings of characters over some alphabet
- language - set of sentences
- lexeme - lowest level syntactic unit of a language
- token - category of lexemes 
	- ex) int a = 0;
	- lexem : "int", "a", "=", "0", ";"
	- token : KEYWORD, IDENTIFIER, ASSIGNMENT_OPERATOR, SEMICOLON

- lexeme을 표현하는 형식적인 방법들
	- recognizers - 어떤 문자열을 입력 받아서, 그 문자열이 해당 언어에 속하는지 판별
	- generators - 언어에 속하는 문장을 만들어 낼 수 있는 장치.
		- 문장이 syntactically 맞는지 확인하려면, generator의 구조와 비교해야 된다.
<br>

 ---

<br>

<details>
  <summary><h5> Lexical Structure of Programming Languages </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_10.jpg" alt="PL/Lecture02/Module2 TPL 10" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_10.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 10" width="400" style="margin-top:40px;">
  </div>
</details>
- Syntatic analyser : syntatic analyser + generator 
	- mistake가 있으면 error 
- Result of parsing - 구조적 표현 (e.g., Parse Tree, AST....)

ex) "int a = 0;"
- Stream of characters : int a = 0;
- tokens and value : \[KEYWORD(int), IDENTIFIER(a), ASSIGN_OP(=), INT_LITERAL(0), SEMICOLON(;)]
- Result of parsing : 
		VarDecl
		  ├── Type: int
		  ├── Identifier: a
		  └── InitialValue: 0
<br>

 ---

<br>

<details>
  <summary><h5> Formal Grammar </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_11.jpg" alt="PL/Lecture02/Module2 TPL 11" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_11.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 11" width="400" style="margin-top:40px;">
  </div>
</details>
- (Formal) Grammar : a set of rules for strings in a formal language 
- Grammar rule - 언어의 알파벳을 조합해 만든 문자열이 그 언어의 문법(syntax)을 맞게 따르는지.
- 문법은 문자열의 의미나 무엇을 할 수 있는지를 설명하지 않고, 오직 그 형태만을 설명한다. - 이건 semantics 관련 

<br>

 ---

<br>

<details>
  <summary><h5> Grammars </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/PL/Lecture02/Module2-TPL_12.jpg" alt="PL/Lecture02/Module2 TPL 12" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/PL/Lecture02/Module2-TPL_12.jpg' | relative_url | uri_escape }}" alt="PL/Lecture02/Module2 TPL 12" width="400" style="margin-top:40px;">
  </div>
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 13 </h5></summary>
  img(PL/Lecture02/Module2-TPL_13.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 14 </h5></summary>
  img(PL/Lecture02/Module2-TPL_14.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 15 </h5></summary>
  img(PL/Lecture02/Module2-TPL_15.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 16 </h5></summary>
  img(PL/Lecture02/Module2-TPL_16.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 17 </h5></summary>
  img(PL/Lecture02/Module2-TPL_17.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 18 </h5></summary>
  img(PL/Lecture02/Module2-TPL_18.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 19 </h5></summary>
  img(PL/Lecture02/Module2-TPL_19.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 20 </h5></summary>
  img(PL/Lecture02/Module2-TPL_20.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 21 </h5></summary>
  img(PL/Lecture02/Module2-TPL_21.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 22 </h5></summary>
  img(PL/Lecture02/Module2-TPL_22.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 23 </h5></summary>
  img(PL/Lecture02/Module2-TPL_23.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 24 </h5></summary>
  img(PL/Lecture02/Module2-TPL_24.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 25 </h5></summary>
  img(PL/Lecture02/Module2-TPL_25.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 26 </h5></summary>
  img(PL/Lecture02/Module2-TPL_26.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 27 </h5></summary>
  img(PL/Lecture02/Module2-TPL_27.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 28 </h5></summary>
  img(PL/Lecture02/Module2-TPL_28.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 29 </h5></summary>
  img(PL/Lecture02/Module2-TPL_29.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 30 </h5></summary>
  img(PL/Lecture02/Module2-TPL_30.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 31 </h5></summary>
  img(PL/Lecture02/Module2-TPL_31.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 32 </h5></summary>
  img(PL/Lecture02/Module2-TPL_32.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 33 </h5></summary>
  img(PL/Lecture02/Module2-TPL_33.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 34 </h5></summary>
  img(PL/Lecture02/Module2-TPL_34.jpg)
</details>
<br>

 ---

<br>