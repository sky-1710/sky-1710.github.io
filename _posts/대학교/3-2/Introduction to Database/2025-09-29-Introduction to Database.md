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



<br>


<details>
  <summary><h5> Join with On </h5></summary>
  <ul>
   <li> "on" specifies a  <font color ="blue">predicated</font> as a join condition</li>
	   <ul>
	   <li> It allows join using columns that have different names </li>
	   </ul>
<li> Query example </li>
      select *
      <br>
      from student join project on ID = student_ID
<li>
  </ul>
</details>


