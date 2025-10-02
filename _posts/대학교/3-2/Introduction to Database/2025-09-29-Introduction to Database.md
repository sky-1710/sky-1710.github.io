---
title: Intermediate SQL
date: 2025-09-29 02:46:00 +09:00
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
  <summary><h5>Join Relations</h5></summary>
	<ul>
	<li> Join Operations</li>
		<ul> 
		<li> take two operations </li>
		<li> combine rows from two tables, using related columns </li>
		<li> return another relation </li>
		</ul>
	<li> Three types of joins: </li>
		<ul>
		<li> Natural join </li>
		<li> Inner join </li>
		<li> Outer join </li>
		</ul>
	</ul>
		
</details>

- Join operation
	- 2개의 relation (테이블)에 관련된 column으로 row을 통합하여 이루어지는 연산 
	- 다른 relation을 return
	- 종류 : Natural Join, Inner Join, Outer Join

- 궁금증 
	<font color = "blue">2개의 같은 relation으로 하면?</font> 



<details>
  <summary><h5> Natural Join in SQL </h5></summary>
  <ul>
   <li> Natural join</li>
	   <ul>
	   <li> matches tuples using all common attributes. </li>
	   <li> retains only one copy of each common column. </li>
	   </ul>
   <li>E.g. List the names of instructors along with the course ID of the courses that courses that they teaches </li>
   <img class="obsidian-only" src="assets/posts/img/Natural_Join.png" alt="Natural_Join" width="400">
   <img class="site-only" src="{{ '/assets/posts/img/Natural_Join.png' | relative_url }}" alt="Natural_Join" width="400">
   <img class="obsidian-only" src="assets/posts/img/Inner_Join_Natural.png" alt="Inner_Join_Natural" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Inner_Join_Natural.png' | relative_url }}" alt="Inner_Join_Natural" width="400">
  </ul>
</details>

- Natural Join이란 
	- 서로 같은 여러 attribute (row)를 통합해줌.   

<details>
  <summary><h5> Recall: Join with unrelated attributes with same name </h5></summary>
  <ul>
   <li> if two columns accidentally happen to have the same name, NATURAL JOIN will use the column as the join condition, </li>
   <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929154905.png" alt="Pasted image 20250929154905.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929154905.png' | relative_url }}" alt="Pasted image 20250929154905.png" width="400">
   <li> Example:</li>
	   <ul>
		select name, title
		<br>
	    from student natural join takes natural join course;
	   </ul>
  </ul>
</details>

- Natural Join의 문제점 
	- 3개의 relation을 natural join 했을 때 동일한 이름이지만 원치 않은 attribute와 합칠 수 있다.

<details>
  <summary><h5> Natural Join with Using </h5></summary>
  <ul>
   <li> Join condition can be explicitly specified by the "using" construct.</li>
		<ul>
		<li> To avoid the problem of unrelated attributes with same name</li>
		</ul>
   <li> Query Example</li>
	   <ul>
	   select name, title 
	   <br>
	   from (student natural join takes) join course using (course_id)
	   </ul>
	   <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929155728.png" alt="Pasted image 20250929155728.png" width="400">
	   <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929155728.png' | relative_url }}" alt="Pasted image 20250929155728.png" width="400">
  </ul>
</details>

- Natural Join의 Solution
	- Join은 using을 쓰면  명확하고 구체적으로 어떤 attribute을 합칠지 결정할 수 있다.
	- ex) select name, title 
		 from ((relation1) natural join (relation2)) join (relation3) using ((attribute1,...))



<details>
  <summary><h5> Join with On </h5></summary>
  <ul>
   <li> "on" specifies a  <font color ="blue">predicated</font> as a join condition</li>
	   <ul>
	   <li> It allows join using columns that have different names </li>
	   </ul>
<li> Query example </li>
		<ul>
		select *<br>
		from student join project on ID = student_ID
		</ul>
<li> Equivalent to :</li>
		<ul>
		select *<br>
		from student, project where ID = student_ID
		</ul>
		
		<img class="obsidian-only" src="assets/posts/img/Pasted image 20250929170845.png" alt="Pasted image 20250929170845.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929170845.png' | relative_url }}" alt="Pasted image 20250929170845.png" width="400">
  </ul>
</details>

- Join과 on
	- on을 쓰면, join의 상태를 단정할 수 있다. 
	- on을 사용하면 다른 이름끼리 매칭할 수 있다. 
	- ex) t1 JOIN t2 ON A=C
	- from + where 조합과 완전히 동일하게 사용할 수 있다.
	<li><font color = "blue">natural join과 달리 공통된 attribute가 둘 다 남아있다.</li>  </font>



<details>
  <summary><h5> Outer Join </h5></summary>
  <ul>
   <li> Compute the join and then adds tuples that do not match any tuple</li>
   <li> Use null (unknown) values for missing attributes</li>
   <li> Three forms of outer join:</li>
	   <ul>
	   <li>left outer join</li>
	   <li>right outer join</li>
	   <li>full outer join</li>
	   </ul>
  </ul>
</details>

- Outer join은 Join할 때 비교해서 matching 한 후, matching 안된 얘들을 없애지 않고, table 밑에 넣어 놓음. 
<ul>
	 <li><font color = "red">(밑인지 확인하삼) </li></font>
</ul>
<br>

<details>
  <summary><h5>Outer Join Example</h5></summary>
  <ul>
  
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929172241.png" alt="Pasted image 20250929172241.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929172241.png' | relative_url }}" alt="Pasted image 20250929172241.png" width="400">
 <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929172324.png" alt="Pasted image 20250929172324.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929172324.png' | relative_url }}" alt="Pasted image 20250929172324.png" width="400">
 <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929172348.png" alt="Pasted image 20250929172348.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929172348.png' | relative_url }}" alt="Pasted image 20250929172348.png" width="400">
 <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929172404.png" alt="Pasted image 20250929172404.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929172404.png' | relative_url }}" alt="Pasted image 20250929172404.png" width="400">
 <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929172422.png" alt="Pasted image 20250929172422.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929172422.png' | relative_url }}" alt="Pasted image 20250929172422.png" width="400">
 <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929172439.png" alt="Pasted image 20250929172439.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929172439.png' | relative_url }}" alt="Pasted image 20250929172439.png" width="400">
  </ul>
</details>

- left outer join은 왼쪽 relative를 기준으로 matching 되지 않은 record는 relative에 남김.
	- 종류 : left outer join on, natural left outer join
- right outer join은 left outer join과 동일하게 작동한다.
	- 종류 : right outer join on, natural right outer join
- full outer join은 left랑 right의 통합, 매칭되지 않은 record들을 다 넣은 relative.
	- 종류 : full outer join on, natural full outer join




<details>
  <summary><h5> Join Conditons and Types</h5></summary>
  <ul>
   <li> <font color ="blue">Join condition</font> - Natural vs. On vs. Using </li>
	   <ul>
	   <li>defines how to match tuples</li>
	   </ul>
   <li> <font color ="blue">Join type</font> - Inner Join vs. {Left/Right/Full} Outer Join </li>
	   <ul>
	   <li>defines how tuples that do not match any tuple in the other  
relation are treated.</li>
	   </ul><img class="obsidian-only" src="assets/posts/img/Pasted_image_20250929173147.png" alt="Pasted image 20250929173147.png" width="400">
<img class="site-only" src="{{ '/assets/posts/img/Pasted_image_20250929173147.png' | relative_url }}" alt="Pasted_image_20250929173147.png" width="400">
  </ul>
</details>

<br>

<details>
  <summary><h5> Join Conditions and Types - More Examples</h5></summary>
  <div style="text-align:center;">
  <img class="obsidian-only" src="assets/posts/img/Pasted_image_20250929173317.png" alt="Pasted image 20250929173317.png" width="400"style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929173317.png' | relative_url }}" alt="Pasted image 20250929173317.png" width="400"style="margin-top:40px;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929173336.png" alt="Pasted image 20250929173336.png" width="400"style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929173336.png' | relative_url }}" alt="Pasted image 20250929173336.png" width="400"style="margin-top:40px;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20250929173359.png" alt="Pasted image 20250929173359.png" width="400"style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250929173359.png' | relative_url }}" alt="Pasted image 20250929173359.png" width="400"style="margin-top:40px;">
  </div>
</details>


<details>
  <summary><h5> View </h5></summary>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20250930025052.png" alt="Pasted image 20250930025052" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250930025052.png' | relative_url | uri_escape }}" alt="Pasted image 20250930025052" width="400" style="margin-top:40px;">
  </div>
</details>

- with query와 상당히 유사 (매크로처럼  subquery 지정)
- 권한 문제로 많이 사용
- 특정 사용자에게 특정 attributes를 hidden 해서 보여줄 때 사용. 
- 일반적인 query에서 view는 table처럼 사용 가능 (사용법은 View Examples 참고)
- 문법 : create view (view_name : view 명명 ) as select ((attribute1),...) from ((table))


<br>
<details>
  <summary><h5> View Examples </h5></summary>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20250930025248.png" alt="Pasted image 20250930025248" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250930025248.png' | relative_url | uri_escape }}" alt="Pasted image 20250930025248" width="400" style="margin-top:40px;">
  </div>
</details>
- Note 1과 Note2의 차이, View로 만든 table은 개념상으로 존재하기에, Note2처럼 피지컬로 하는 경우가 있음.




<details>
  <summary><h5> Update of a View </h5></summary>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20250930025419.png" alt="Pasted image 20250930025419" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250930025419.png' | relative_url | uri_escape }}" alt="Pasted image 20250930025419" width="400" style="margin-top:40px;">
  </div>
</details>

- View에 새로운 record를 넣으면, 원본 테이블에도 넣어지게 되는데, 이때 넣지 못한 값은 NULL로 처리.  (이건 DBMS 따라 다름)


<details>
  <summary><h5> Some Updates Cannot be Translated Uniquely</h5></summary>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20250930025520.png" alt="Pasted image 20250930025520" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250930025520.png' | relative_url | uri_escape }}" alt="Pasted image 20250930025520" width="400" style="margin-top:40px;">
  </div>
</details>

- view에 natural join 해서 insert into 하면 어느 attribute 값인지 혼동이 온다.
- 그렇기에 대부분의 DBMS는 insert를 허용하지 않는다. 

- 궁금증 
	<font color = "blue">위의 사진처럼 갖지 않은 attrubute명을 select문에 넣으면?</font> 



<details>
  <summary><h5>And Some Updates Should Not Be Allowed at All</h5></summary>
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20250930025843.png" alt="Pasted image 20250930025843" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250930025843.png' | relative_url | uri_escape }}" alt="Pasted image 20250930025843" width="400" style="margin-top:40px;">
  </div>
</details>

- 대부분의 DBMS는 simple한 view에 insert를 허용한다. 


<br>
<details>
  <summary><h5> View Updates in SQL </h5></summary>
<div style="text-align:center;">
  <img class="obsidian-only" src="assets/posts/img/Pasted image 20250930025919.png" alt="Pasted image 20250930025919" width="400" style="margin-top:40px;">
  <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250930025919.png' | relative_url | uri_escape }}" alt="Pasted image 20250930025919" width="400" style="margin-top:40px;">
</div>
</details>

- view에 insert하거나 update는 안 좋다.
- simple view에는 simple한 select문 허용한다.
- from은 오직 하나의 table
- group by와 having도 허용하지 않는다.
- insert할 때 view에 나와있지 않은 attribute 값은 NULL로 들어간다.
- 그리고 원본 table에 not null 요소가 있고, view를 통한 insert에 값이 그 요소에 들어가지 않는다면, error 발생. (default 값을 주면 해결 가능)

<br>
<details>
  <summary><h5> Transactions </h5></summary>  
  <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/Pasted image 20250930030010.png" alt="Pasted image 20250930030010" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/Pasted image 20250930030010.png' | relative_url | uri_escape }}" alt="Pasted image 20250930030010" width="400" style="margin-top:40px;">
  </div>
</details>

- Transaction  - 여러 개의 operation들을 묶고, 하나의 원자성을 갖는 연산처럼 수행하는 것.
	- DBMS에서는 하나의 행동을 수행하기 위해 여러 SQL statements를 한번에 사용하는 것
	- ex)데이터베이스 수행하는 query들 
- 문법 : BEGIN; {실행할 statement} COMMIT; -- or ROLLBACK(연산을 하다 조건에 만나서 취소할 경우 사용, BEGIN 이후의 모든 statment를 취소해줌);
- Transaction도 git처럼 commit해야지 다른 클라이언트들이 볼 수 있음




<br>
<details>
  <summary><h5> Integrity Constraints </h5></summary>
  <div style="text-align:center;">
   <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_33.jpg" alt="DB/Lecture05/DBLecture05 Ch4" width="400" style="margin-top:40px;">
   <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_33.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4" width="400" style="margin-top:40px;">
   <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_34.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 34" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_34.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 34" width="400" style="margin-top:40px;">
 </div>
</details>

- not null - 
- primary key -
- unique - primary key는 아니지만 candidate key로 강제하는 방법. 
- check(P), where P is a predicate - p는 boolean으로 statement 실행 여부가 결정됨. 
<br>

<details>
  <summary><h5> Not Null Constraints</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_35.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 35" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_35.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 35" width="400" style="margin-top:40px;">
  </div>
</details>
<br>

<details>
  <summary><h5> Unique Constraints</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_36.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 36" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_36.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 36" width="400" style="margin-top:40px;">
  </div>
</details>

- unique는 attribute을 조합하여, candidate key 생성.

<br>

<details>
  <summary><h5> Check Constraints  </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_37.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 37" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_37.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 37" width="400" style="margin-top:40px;">
  </div>
</details>

- boolean 형태로 조건에 맞추지 않으면 해당 쿼리는 reject 된다. 
<br>

<details>
  <summary><h5> Referential Integrity a.k.a. foreign key constraint </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_38.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 38" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_38.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 38" width="400" style="margin-top:40px;">
    
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_39.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 39" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_39.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 39" width="400" style="margin-top:40px;">
  </div>
  </div>
</details>

 - a.k.a foreign key
 - 갖고 있는 attribute가 다른 테이블에서 primary key이면 현 테이블에게는 foreign key가 됨. 
 - 문법 : foreign key(cust_name, 원격) references customer(customer_name, 원본)(이름이 달랐을 때 사용, 생략해도 괜찮음.)
<br>

<details>
  <summary><h5> Cascading Actions in Referential Integrity </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_40.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 40" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_40.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 40" width="400" style="margin-top:40px;">

  </div>
</details>

 - on delete cascade - 원본 테이블에서 record를 지우면, 원격 테이블 invalid되지 않게 같이 그 record를 지워줌.
 - on update cascade - 원본 테이블에서 record를 업데이트하면, 원격 테이블에서도 같이 업데이트. 

<br>

<details>
  <summary><h5> Cascading Actions in Referential Integrity</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_41.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 41" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_41.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 41" width="400" style="margin-top:40px;">
    
    <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_42.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 42" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_42.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 42" width="400" style="margin-top:40px;">
      <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_43.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 43" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_43.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 43" width="400" style="margin-top:40px;">
  </div>
  </div>
</details>
- NULL 값 대신 default 값 지정 가능 (insert문 없어도 자동으로 설정)
- on delete set default - primary key를 삭제하면서 foreign key가 삭제 될려고 할 때, foreign키로 묶인 record를 남기고 싶을 때 사용. 그리고,foregin 키 대신 default 들어감.
- on delete set null - on delete set default와 작동 방식은 같은데, defautl 대신 NULL 사용.

<br>


<details>
  <summary><h5> Integrity Constraint Violation During Transactions </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_44.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 44" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_44.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 44" width="400" style="margin-top:40px;">
  </div>
</details>

- foreign key가 자기 자신을 reference하면, foreign key constraint가 깨진다.
- 위의 PPT를 보면, insert문에 ID를 넣는데, 이전의 ID가 없으니까 mother, father는 참조할게 없어지니 깨짐. 
- Problem) 아무것도 넣을 수 없게 됨.
- Solution) foreign key에 NULL 값을 넣으면 해결. 

<br>

<details>
  <summary><h5> Complex Check Conditions </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_45.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 45" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_45.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 45" width="400" style="margin-top:40px;">
  </div>
</details>


<br>

<details>
  <summary><h5> Assertion </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_46.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 46" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_46.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 46" width="400" style="margin-top:40px;">
  </div>
</details>

- SQL standard에 있는데 
<li><h6>무시</h6></li>
<br>

<details>
  <summary><h5> Built-in Data Types in SQL </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_48.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 48" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_48.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 48" width="400" style="margin-top:40px;">
  </div>
</details>
- data, time, timestamp, interval
- interval - data, time, timestamp 갖고 산술 연산한 값
<br>

<details>
  <summary><h5> Large-Object Types </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_49.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 49" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_49.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 49" width="400" style="margin-top:40px;">
  </div>
</details>
- blob : 멀티미디어 데이터로 저장할 때
- clob : 텍스트 데이터로 저장할 때
- 대부분 table 안에서 저장하지 않고, 별도의 디렉토리에 파일을 쌓아서 저장하고 그 파일의 path를 attribute에 저장하는 게 일반적이다. 
- oracle의 경우 파일 시스템을 안 씀. low disk?를 스스로 관리해서 blob 또는 clob 타입이라 써서 저장. 
<br>

<details>
  <summary><h5> User-Defined Types </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_50.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 50" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_50.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 50" width="400" style="margin-top:40px;">
  </div>
</details>

- 새로운 타입 지정
- primitive type 지정 가능. check나 not null은 안됨.  
- 문법 : create type (name) as  (type) final
	- final은 inherit 방지용. 그냥 (name) = (type)으로 끝내기 위해서. 

<br>

<details>
  <summary><h5> Domains </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_51.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 51" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_51.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 51" width="400" style="margin-top:40px;">
  </div>
</details>

- user defined types와 비슷한데, check constraint 와 not null constraint를 넣을 수 있다. 

<br>

<details>
  <summary><h5> Index Creation </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_53.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 53" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_53.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 53" width="400" style="margin-top:40px;"></div>
</details>

- DBMS는 내부에 B+tree 또는 Hash Table를 지니고 있고 판단함. 
- 근데, 애플리케이션 개발자가 성능을 빠르게 하기 위해서, index를 지정.
- 문법 : create index \<name> on \<relation-name>(attribute(index 생성할 attribute의 이름));
- 대부분 DBMS는 B+tree를 보조 index로 많이 씀
	- 순서 보장이기 때문에, Hash Table은 순서 보장하지 않기에, 지원하는 Query의 타입이 제한되어버림. 


<br>

<details>
  <summary><h5> Index Creation Example</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_54.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 54" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_54.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 54" width="400" style="margin-top:40px;">
  </div>
</details>
- Primary Key를 기준으로 원래 search. 
- Hash 명시 index는 지원 안 해주는 DBMS가 많다. 

<br>

<details>
  <summary><h5> Authorization </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_56.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 56" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_56.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 56" width="400" style="margin-top:40px;">
  </div>
</details>
- User에게 줄 수 있는 권한 : Read, Insert, Update, Delete
<br>

<details>
  <summary><h5> Authorization Specification in SQL</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_57.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 57" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_57.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 57" width="400" style="margin-top:40px;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_58.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 58" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_58.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 58" width="400" style="margin-top:40px;">
  </div>
</details>
- 문법 : grant \<privilege list> on \<relation or view> to \<user list>
	- 모든 권한 허용 : all privileges
	- 모든 유저 허용: public
<br>

<details>
  <summary><h5> Revoking Authorization </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_59.jpg" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 59" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture05/DBLecture05-Ch4.Intermediate_SQL_59.jpg' | relative_url | uri_escape }}" alt="DB/Lecture05/DBLecture05 Ch4.Intermediate SQL 59" width="400" style="margin-top:40px;">
  </div>
</details>
- revoke : 권한을 다시 뺏고 싶을 때 사용. 
- 문법 : revoke /<prilvilege list> on /<relation or view> from <user list>
<br>



