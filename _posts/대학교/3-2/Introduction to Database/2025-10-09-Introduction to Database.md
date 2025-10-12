---
title: JDBC and PL/SQL
date: 2025-10-09 16:12:00 +09:00
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
  <summary><h5> Using SQL in Other Programming Languages </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_02.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 02" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_02.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 02" width="400" style="margin-top:40px;">
  </div>
</details>

- SQL을 다른 application인 programming language를 같이 써야지 더 강력한 시너지가 발휘된다. 
- 데이터 사이언티스트는 SQL을 주로 사용

- SQL만을 해결하지 못할 action들
	- priniting a report
	- interacting with a user
	- sending the results of a query to a GUI
- 그렇기에 high-level programming language가 필요 


<br>

---

<br>

<details>
  <summary><h5> JDBC and ODBC </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_03.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 03" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_03.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 03" width="400" style="margin-top:40px;">
  </div>
</details>

- high - level programming language 안에 SQL 사용방법
- API를 사용해서 DB 서버랑 상호작용한다.
	-  DB 서버랑 연결
	- SQL 쿼리를 DB서버에 보내기 
	- 결과 튜플들을 하나씩 ( program 안의 변수로 ) 가져온다.
		- SELECT문으로 만들어진 결과 relation의 tuple들을 하나씩 가져온다 

- ODBC : C,C++,C# 과 visual basic을 사용하는 API
	- 분산 시스템을 만들기 쉽기 않지만, 고성능 
- JDBC : JAVA를 사용하는 API
	- JDBC로 대부분 사용하는 이유는 JAVA의 garbage collection으로 인한 안정성. 또 이로 인해 large-scale system에서 많이 쓰임. 
	- 분산 시스템을 만들기 쉬운 언어가 JAVA이며, reliability가 높아서 사용하기 좋음.

<br>

 ---

<br>

<details>
  <summary><h5> JDBC </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_04.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 04" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_04.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 04" width="400" style="margin-top:40px;">
  </div>
</details>

- DBMS system software가 제공해주는 기능
	1.  connection을 열어줌
	2. 사용자가 만든 sql statement를 statement object로 변환해줌
	3. statement object를 사용해서 쿼리를 보내주고 결과를 fetch
		1. 이게 relational algebra로 바꾸고 개별 operator에 해당하는 algorithm들로 돌림
	4.  reject된 query exception handling해줌
<br>

 ---

<br>

<details>
  <summary><h5> JDBC code </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_05.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 05" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_05.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 05" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_06.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 06" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_06.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 06" width="400" style="margin-top:40px;">
  </div>
  
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_07.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 07" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_07.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 07" width="400" style="margin-top:40px;">
  </div>
</details>

- ....




<br>

 ---

<br>


<details>
  <summary><h5> Title 8 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_08.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 9 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_09.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 10 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_10.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 11 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_11.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 12 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_12.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 13 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_13.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 14 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_14.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 15 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_15.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 16 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_16.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 17 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_17.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 18 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_18.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 19 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_19.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 20 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_20.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 21 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_21.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 22 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_22.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 23 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_23.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 24 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_24.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 25 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_25.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 26 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_26.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 27 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_27.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 28 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_28.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 29 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_29.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 30 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_30.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 31 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_31.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 32 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_32.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 33 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_33.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 34 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_34.jpg)
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Title 35 </h5></summary>
  img(DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_35.jpg)
</details>
<br>

 ---

<br>
