---
title: Introduction to Relational Model
date: 2025-10-05 10:24:00 +09:00
categories:
  - university
  - 2025s
  - 3-2
  - Intro. to Database
tags:
  - IntrotoDatabase
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
</detail>

<br>

----

<br>


<details>
  <summary><h5> Relation </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_02.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 02" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_02.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 02" width="400" style="margin-top:40px;">
  </div>
</details>

- Relation(2 dimension layout) = Table =  여러 개의 record(data)로 이루어진
- Attributes = coloumns = 어떤 entity의 특정 속성 
- Tuples = rows = records (attribute 여러 개로 이루어진)


<br>

 ---

<br>

<details>
  <summary><h5> Domain: Attribute Types </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_03.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 03" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_03.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 03" width="400" style="margin-top:40px;">
  </div>
</details>

- Domain : the set of allowed values for each attribute
	- Domain = data type + constraints(제약, valid key range) 
		- constraints (e.g., score domain : 0 ~ 100 )

- Attribute values need to be atomic (기본적인 attribute로 혼합되면 X)
	- (e.g., ) Name_N_ID (atomic X) -> Name | ID (atomic O)

- NULL : 모든 domian에서 사용 가능, 프로그래밍에서 공 집합과 다르게 <span style="background-color: #FFFFCC;">UNKNOWN value</span>
 
<br>

 ---

<br>

<details>
  <summary><h5> Relation Schema and Instance </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_04.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 04" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_04.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 04" width="400" style="margin-top:40px;">
  </div>
</details>

- Relation Schema : a set of attribute (data type schema로 구조만)
- Relation : 하나의 instance(객체), set of tuples(데이터를 가지고 있는 상태)


<br>

 ---

<br>

<details>
  <summary><h5> Relations are Unordered</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_05.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 05" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_05.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 05" width="400" style="margin-top:40px;">
  </div>
</details>

- relation은 집합 이론, 그래서 tuple들의 순서가 정해져 있지 않음. (임의의 순서로 tuple 저장)
- relation은 redundancy(불필요한 중복)를 허용하지 않음 )
	- 같은 tuple의 insert는 무시 (DBMS에 따라 다름) 
		- 근데 DBMS (SQL)은 이론 상의 "집합(set)" 대신 "다중집합(bag)" 모델을 채택하여, 기본적으로 중복을 허용하는 형태인데, 이는 DBMS에 따라 다름. 
	- 관계(relation)은 수학적으로 "튜플의 집합"이기에 중복이 존재할 수 없다(이론적으로).
<br>

 ---

<br>

<details>
  <summary><h5> Database </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_06.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 06" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_06.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 06" width="400" style="margin-top:40px;">
  </div>
</details>

- database : 여러 relation(table)의 집합 
<br>

 ---

<br>

<details>
  <summary><h5> Key  </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_07.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 07" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_07.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 07" width="400" style="margin-top:40px;">
  </div>
</details>

- Key attribute : uniquely identify a record in a table (특정 tuple를 identify 가능, 모든 tuple이 다 unique한지 보장하면 key)
<br>

 ---

<br>

<details>
  <summary><h5> Definition of Keys </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_08.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 08" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_08.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 08" width="400" style="margin-top:40px;">
  </div>
</details>

- superkey : key의 superset(상위 집합)(unique tuple in relation R)
	- tuple을 유일하게 식별할 수 있는 속성(들의) 집합. (2가지 이상의 attribute를 묶어서 superkey라고 부를 수 있음. 그래서, 불필요한 attribute가 와도 superkey로 부를 수 있음)


- candidate key : Minimal superkey (여러 개의 attribute를 묶어서만 유일하게 식별할 수 있다면, 그 묶음)(불필요한 속성이 없는 최소 superkey)

- primary key : one of the candidate key is selected (여러 candidate key 중 대표로 선택된 하나)(여러 개의 attribute를 묶어서만 유일하게 식별할 수 있다면, 그 묶음)


- **Primary Key⊆Key (Candidate Key)⊆Superkey**
- 서로 다른 attribute가 묶어서 unique해지면 그건 primary key도 혀용함.
<br>

 ---

<br>

<details>
  <summary><h5> Relational Query Languages </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_09.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 09" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_09.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 09" width="400" style="margin-top:40px;">
  </div>
</details>

- 두 가지의 서로 표현 방법은 다르지만, 의미 및 내부적으로 동일한 expression
	- Relational algebra 
		- query를 수식으로 표현
	- Relational calculus 
		- 완전 수학적 느낌
		- 이론적 query 느낌
		- ex ) {t | t ∈ STUDENT ∩ t\[ssn] =123}

<br>

 ---

<br>

<details>
  <summary><h5> Relational Query Languages </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_10.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 10" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_10.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 10" width="400" style="margin-top:40px;">
  </div>
</details>

- 모든 관계 대수 연산은 기존 릴레이션을 변경하지 않고, "새로운 릴레이션을 생성하는 연산"
<br>

 ---

<br>

<details>
  <summary><h5> Union ( ∪ ) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_11.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 11" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_11.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 11" width="400" style="margin-top:40px;">
  </div>
</details>

-  Union은 binary operator
- 조건 : relation끼리 서로의 attribute 개수, 순서와 종류도 같아야 된다(결론 schema가 같아야 된다).
- Union의 원리 : 중복 튜플은 하나만 남기고 relation을 합친다. 
	-  집합의 합집합과 동일한 원리다. 

<br>

 ---

<br>

<details>
  <summary><h5> Set difference ( - ) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_12.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 12" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_12.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 12" width="400" style="margin-top:40px;">
  </div>
</details>

- Set difference는 binary operator
- 조건 : relation끼리 서로의 attribute 개수, 순서와 종류도 같아야 된다(결론 schema가 같아야 된다).
- Set difference의 원리 : R-S이면, R에만 있는 튜플들만 남기는 연산. 
	-  중복도 제거해줌.
	-  집합의 차집합과 동일한 원리다. 
<br>

 ---

<br>

<details>
  <summary><h5> Selection ( σ ) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_13.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 13" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_13.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 13" width="400" style="margin-top:40px;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_14.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 14" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_14.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 14" width="400" style="margin-top:40px;">
  </div>
</details>

- Selection는 특정 조건만 만족하는 operator 
- Selection의 원리 : 하나의 relation을 선택하여, 특정 조건에 부합한 tuple만 넣은 relation 생성 
<br>

 ---

<br>

<details>
  <summary><h5> Projection ( Π ) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_15.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 15" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_15.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 15" width="400" style="margin-top:40px;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_16.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 16" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_16.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 16" width="400" style="margin-top:40px;">



  </div>
</details>

- Projection은 해당 relation에서 원하는 특정 attribute만 뽑아낼 수 있다.  
	- 관계 연산자는 연속적으로 (cascade) 적용할 수 있다. 
		- 하나의 연산 결과(relation)를 다음 연산의 입력으로 사용할 수 있다.

<br>

 ---

<br>

<details>
  <summary><h5> Cartesian Product ( x ) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_17.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 17" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_17.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 17" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_18.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 18" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_18.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 18" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_19.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 19" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_19.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 19" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_20.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 20" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_20.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 20" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_21.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 21" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_21.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 21" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_22.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 22" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_22.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 22" width="400" style="margin-top:40px;">
  </div>

</details>

- Cartesian Product는 binary operator
- Cartesian Product 는 가능한 모든 짝을 만든다.
	- 그렇기에 attribute의 개수, 종류와 순서가 상관없다. 
	- nested for문을 돌린 형태와 비슷
	

<br>

 ---
<br>

<details>
  <summary><h5> Other operators (convergence of fundamnetal relational operators)</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_23.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 23" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_23.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 23" width="400" style="margin-top:40px;">
  </div>
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Set Intersection of two relations ( ∩ ) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_24.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 24" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_24.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 24" width="400" style="margin-top:40px;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_25.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 25" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_25.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 25" width="400" style="margin-top:40px;">
  </div>
</details>

-  Set Instersection of two relations는 binary operator
- 조건 : relation끼리 서로의 attribute 개수, 순서와 종류도 같아야 된다(결론 schema가 같아야 된다).
- Set Instersection of two relations의 원리 : 서로 다른 relation끼리 중복된 tuple만 모아서 relation을 만듦
	-  집합의 교집합과 동일한 원리다. 
<br>



 ---

<br>

<details>
  <summary><h5> Natural Join ( ⨝ )  </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_26.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 26" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_26.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 26" width="400" style="margin-top:40px;">
  </div>

    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_27.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 27" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_27.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 27" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_28.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 28" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_28.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 28" width="400" style="margin-top:40px;">
  </div>
</details>

- Natural Join은 가장 많이 사용되는 relational operator중 하나 
- Natural Join은 서로 다른 relation을 공통 속성(attribute)를 기준으로 결합하는 연산이다. 
	- Cartesian Product와 같은 연산을 한 후, 같은 이름 attribute는 하나만 남기고 나머지는 삭제한다. 중복 tuple도 하나만 남기는 연산을 한다.


<font color = "blue">  궁금한 점
<li> 같은 이름의 attribute여도 data type이 다르면, type mismatch로 생성 불가능 </li></font>


<br>

 ---

<br>

<details>
  <summary><h5> Rename </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_29.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 29" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_29.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 29" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_30.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 30" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_30.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 30" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_31.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 31" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_31.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 31" width="400" style="margin-top:40px;">
  </div>
</details>

- rename 연산은 같은 relation을 여러 번 사용할 때 필요하다. 
	- 관련 예시는 위의 사진에 게시


<font color = "blue">  궁금한 점
<li> rename으로 attribute의 이름을 바꿀 수 있지 않을까? </li>
<li> 관계대수 (relational algebra)에서는 이론적으로 가능</li>
<div style="text-align:center;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20251009155935.png" alt="Pasted image 20251009155935" width="400" style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251009155935.png' | relative_url | uri_escape }}" alt="Pasted image 20251009155935" width="400" style="margin-top:40px;">
</div>
<li> 실제 SQL에서는 다르게 적용</li>
<div style="text-align:center;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20251009160016.png" alt="Pasted image 20251009160016" width="400" style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251009160016.png' | relative_url | uri_escape }}" alt="Pasted image 20251009160016" width="400" style="margin-top:40px;">
</div>
</font>

<br>

 ---

<br>

<details>
  <summary><h5> Division </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_32.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 32" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_32.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 32" width="400" style="margin-top:40px;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_33.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 33" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_33.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 33" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_34.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 34" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_34.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 34" width="400" style="margin-top:40px;">
  </div>
  <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_35.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 35" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_35.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 35" width="400" style="margin-top:40px;">
  </div>
</details>

- 조건 : query에 "모든"이라는 조건이 있을 때 사용한다.
	- 이유가 R÷S일 경우, S에 있는 모든 value들에 해당하는 R의 tuple만 뽑기 때문에   
	- ex) R = Friend(x,y), S = 10명의 학생 집합(y)이라고 하면, R÷S는 10명의 모든 학생과 친구인 x들의 집합을 반환

- Cartesian product의 반대로 작용
- <div style="text-align:center;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20251009160942.png" alt="Pasted image 20251009160942" width="400" style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20251009160942.png' | relative_url | uri_escape }}" alt="Pasted image 20251009160942" width="400" style="margin-top:40px;">
</div>



<br>

 ---


<br>

<details>
  <summary><h5> Practice Problems  </h5></summary>
       <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_36.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 36" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_36.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 36" width="400" style="margin-top:40px;">
  </div>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_37.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 37" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_37.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 37" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_38.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 38" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_38.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 38" width="400" style="margin-top:40px;">
  </div>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_39.jpg" alt="DB/Lecture02/DBLecture02 RelationalModel 39" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture02/DBLecture02-RelationalModel_39.jpg' | relative_url | uri_escape }}" alt="DB/Lecture02/DBLecture02 RelationalModel 39" width="400" style="margin-top:40px;">
  </div>

</details>
<br>