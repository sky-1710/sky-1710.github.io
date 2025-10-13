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
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_08.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 08" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_08.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 08" width="400" style="margin-top:40px;">
  </div>
</details>

- executeUpdate로 application을 다 짜도 되는데, fixed가 되어서 사용자들이 던지는 동적인 쿼리를 만들지 못함. 
- 위의 예시 쿼리에는 보안 문제가 있음.
	- 다른 쿼리가 들어올 수 있어서... (SQL injection 문제)

<br>

 ---

<br>

<details>
  <summary><h5> SQL Injection </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_09.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 09" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_09.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 09" width="400" style="margin-top:40px;">
  </div>
</details>

- website의 textbox 부분에 쿼리를 넣으면, DBMS 내부를 어지럽힐 수 있어서(ex> DROP TABLE) 보안 문제가 발생됨.


<br>

 ---

<br>

<details>
  <summary><h5> Prepared Statement </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_10.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 10" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_10.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 10" width="400" style="margin-top:40px;">
  </div>
</details>

- SQL injection의 Solution : Prepared Statement 클래스 
	- Prepared statment에 수행할 쿼리를 다 입력한 후, 아직 내가 모르는 값의 경우 ?로 대체.
		- ? : 나중에 유저가 넣을 값으로 교체를 할 것이다. 
	- 나중에 유저가 입력하면, application은 set method를 불러 와줌. (.setString, .setInt)
	- 이후, void type(쿼리를 다 알려줬기 때문에)의 executeUpdate가 들어감. 
	- ?로 세팅하면, executeUpdate();를 다시 해도, 같은 쿼리가 또 날라감.
	- ?에 들어갈 값 하나 만이라도 바뀌면 set method를 다시 부르고 다시 executeUpdate();를 해줘야 됨. 
	- 이게 어떻게 SQL injection을 방지해 주지?
		- single quote가 있으면 전부 자동으로 escape 해줌.  
		- 원래 입력이 string을 읽은 뒤에 single quote가 오면, 그 뒤에 오는 것들은 SQL statement의 keyword라고 인식했는데,
		- single quote를 escape해주면, 입력받은 것들을 다 사용자의 string으로 인지하게 되면서 해결됨.   

- Query의 Output 파싱은 executeQuery한 후, ResultSet 타입으로 get method 해주면 됨.
<br>

 ---

<br>

<details>
  <summary><h5> Metadata Features </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_11.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 11" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_11.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 11" width="400" style="margin-top:40px;">
  </div>
</details>

- Select \* 쿼리를 던짐 -> output table의 스키마를 잘 모르면, 이를 쿼리하는 기능이 필요 
- Select 쿼리를 한후, result set (rset)에서 getMetaData() 함수를 부르면 -> ResultSetMetaData가 나옴.
- 그 오브젝트로부터 getColumnCount()하면 attrbiute의 개수가 나옴.
- getColumnName(i)는 i번째 column의 attribute이 string으로 출력 
- getColumnTypeName(i)는 i번째 column의 attribute type이 string으로 출력 


- Output 테이블의 스키마 얻는 방법

<br>
 ---

<br>

<details>
  <summary><h5> Metadata (Cont) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_12.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 12" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_12.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 12" width="400" style="margin-top:40px;">
  </div>
</details>

- 현재 DB의 스키마, 어떠한 table이 있는지를 알아내기 위해
- conn : DB의 채널 알아내기, conn.getMetaData() : 어떤 table이 있는지 Metadata를 얻음. 
- 대신, table 이름을 이미 알고 있고, table의 column들을 뽑아내는 함수 

- **그냥 이런 것도 있다~**

<br>

 ---

<br>

<details>
  <summary><h5> Transaction Control in JDBC</h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_13.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 13" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_13.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 13" width="400" style="margin-top:40px;">
  </div>
</details>

- Transaction statement : 여러 개의 insert를 하나의 statement로 사용하는 것 
	- JDBC에서 executeUpdate, executeQuery등 method 하나가 1 Transaction(TXN)으로 처리 
		- method안에  다수의 statement를 넣을 수 있음. 그 대신, prepared statement로는 불가능하고 일반적인 statement로는 가능. 그리고, 저 기능은 DBMS마다 되는 곳이 있고, 안되는 곳이 있음.
		- 우선 그냥 statement 실행은 SQL injection 위험 때문에, prepared statment 사용이 좋음. 
		- 추가로 알아본 것, 왜 prepared statement 사용이 좋은지 SQL Injection 방지, 성능(반복 실행 시)면에서 유리, 가독성과 유지보수성, 타입 안정성, 캐시 및 Statement 재사용성 이라는 장점을 지님.
	- conn.setAutoCommit(false); : 여러 개의 statement를 atomic하게 수행하고 싶으면 이 코드를 넣어야됨. 이거 넣으면 method가 끝나고 바로 commit하지 않음.
	- conn.commit(); : AutoCommit false한 후 여러 개의 statement를 모아서 commit할 때 씀.
	- 한꺼번의 commit하는 이유 : 에러가 발생했을 때 시스템 전체의 데이터 일관성을 유지하고 복구
		- 데이터베이스와 관련된 모든 작업이 완벽하게 실행되거나, 아니면 아예 실행되지 않은 것처럼 **원래의 상태를 보존**하는 것으로 절대로 중간에 어쩡쩡한 상태로 남지 않도록 보장 
	- conn.rollback(); : 수행 중에 어떤 조건이 안 맞으면 rollback 
	- conn.setAutoCommit(true); : 다시 하나씩 auto로 commit하고 싶으면 이 코드 사용.
<br>

 ---

<br>

<details>
  <summary><h5> Other JDBC Features </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_14.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 14" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_14.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 14" width="400" style="margin-top:40px;">
  </div>
</details>

- PL/SQL의 extension이 declarative형(제약이 심해서) procedure형으로 포장
	- 대부분 Application이랑 DBMS는 서로 다른 머신에서 돌리고, 네트워크로 접근함. 그래서 round trip 상황이 많이 생김.
	- 이 상황을 해결하기 위해, 한번에 묶어서 보내면, DBMS에서 결과를 보내주니, round trip 한번만 발생 
	- 그래서, Oracled에서 SQL 확장으로 function 기능 추가하고, 그 안에 if-else, for문 등을 지원함.

- CallableStatement(클래스) : PL/SQL로 작성한 함수(+ argument)(user-defined여도 먹힘)를 넘겨주면, 결과 값(scalar)이 튀어나옴.
- getBlob(), getClob() : getString()과 동작이 비슷한데, 그저 return 타입이 Blob 또는 Clob이라는 차이만 있음.
	- JDBC에서 읽는 방법은 Stream. -> Stream에서 부터 getBytes() 함수를 통해, 얻어냄.



<br>

 ---

<br>

<details>
  <summary><h5> ODBC </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_15.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 15" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_15.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 15" width="400" style="margin-top:40px;">
  </div>
</details>

- JDBC랑 같은데 언어가 JAVA가 아닐 뿐이다. 
- C 와 C++ 지원

<br>

 ---

<br>

<details>
  <summary><h5> ODBC (Cont.) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_16.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 16" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_16.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 16" width="400" style="margin-top:40px;">
  </div>
</details>

- 원래는 ODBC가 먼저 나옴. (JAVA전부터 있었음)
<br>

 ---

<br>

<details>
  <summary><h5> ODBC Code </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_17.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 17" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_17.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 17" width="400" style="margin-top:40px;">
  </div>
</details>

- SQLAllocConnect(env(환경), &conn); : 여기서부터 main시작 (C code). Connection 변수의 준비가 된다. 이때는 DBMS의 정보가 없음. 
- SQLConnect(conn, "localhost"(host_id, domain_name), SQL_NTS, "bnam"(id), SQL_NTS, "changethis"(pwd), SQL_NTS); 
	- DBMS 정보를 지정하는 단계. 
	- SQL_NTS : SQL에서 사용하는 NULL terminate string이다. 
	
- 해제하는 단계에서는 connection도 해제하고 그와 관련된 environment도 해제를 해줘야 됨.


<br>

 ---

<br>

<details>
  <summary><h5> ODBC Code (Cont.) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_18.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 18" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_18.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 18" width="400" style="margin-top:40px;">
  </div>
  
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_19.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 19" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_19.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 19" width="400" style="margin-top:40px;">
  </div>
</details>

- 쿼리는 아예 C string으로 되어있음. 
- HSTMT : 쿼리를 담기 위해 필요한 타입. 메모리만 잡고, 초기화가 안되어있는 상태. Connection도 안되어있어서...
	- SQLAllocStmt로 connect 해줘야 됨.
- ret = SQLExecDirect(stmt, sqlquery, SQL_NTS);
	- 여기서 stmt랑 sqlquery 연결. 
	- 그리고, statement 수행 
	- query reject등 excpetion을 위해, if (ret == SQL_SUCCESS) 필요
- if (ret == SQL_SUCCESS) : return값을 받았는지 check하는 코드 

- SQLBindCol(stmt, 1(쿼리의 몇번째 attribute의 결과인지), SQL_C_CHAR(타입), deptname(변수에 저장), 80(메모리 크기), &lenOut1);
- SQLBindCol(stmt, 2, SQL_C_FLOAT, &salary, 0(array가 아니라서 0) , &lenOut2);
	- statement output를 table로 파싱하는 코드.
	- ODBC에서는 excute할 때 넘겨줬던, statment의 output table이 같이 포함해서 return이 됨. 
	- statement에서 결과를 하나하나씩 fetch해야 됨. 
	- output attribute를 저장할 공간을 미리 확보.


- while (SQLFetch(stmt) == SQL_SUCCESS) { printf (" %s %g\n", deptname, salary); }
	- SQL Fetching 과정 
	- 1,2,... record 출력 되는 방식으로 계속 갱신이 된다. 

<br>

 ---

<br>

<details>
  <summary><h5> ODBC Prepared Statements </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_20.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 20" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_20.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 20" width="400" style="margin-top:40px;">
  </div>
</details>

- ODBC에서도 prepared statement 사용. 
	- JDBC와 마찬가지로 보안 위험 때문에
	- SQLPrepare(stmt, \<SQL String>);
	- ? 인자들을 replace하기 위해서는 SQLBindParameter 사용

- DB Application을 C로 작성 하지마. (바보 같은 짓...)
<br>

 ---

<br>

<details>
  <summary><h5> Autocommit in ODBC </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_21.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 21" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_21.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 21" width="400" style="margin-top:40px;">
  </div>
</details>

- JDBC와 원리는 같음, 표현만 다를 뿐
<br>

 ---

<br>

<details>
  <summary><h5> Procedural Extensions and Stored Procedures </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_22.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 22" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_22.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 22" width="400" style="margin-top:40px;">
  </div>
</details>
<br>

 ---

<br>

<details>
  <summary><h5> Function (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_23.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 23" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_23.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 23" width="400" style="margin-top:40px;">
  </div>
</details>

- CREATE \[OR REPLACE] FUNCTION function_name (arguments (여기서 argument들은 comma seperation으로 들어감))
	- CREATE \[OR REPLACE] FUNCTION : 기존의 같은 이름의 Function이 있었으면, 교체를 해줌. 
- RETURNS return_datatype AS \$$ 
	- AS : 뒤에 나오는 코드들이 함수 본체라고 알려줌.
	- \$$ : 원래 semi-colon을 통해, terminate하여 거기서 끝나고 다음으로 넘어가는데, 이를 방지하기 위해서, \$$ 심볼 사이에 있는 semi-colon은 바로 terminate하지 않게 막는 역할. 다른 관점에서는 semi-colon의 역할을 \$$이 갖고 갔다고 볼 수 있음.
- Function Body 2가지 : DECLARE, BEGIN-END
	- DECLARE
		- 변수 정의 부분 
	- BEGIN - END
		- 실제 function 부분 
		- 여기서 반환 명령어는 RETURN(명령형) 앞선 Head 부분 RETURNS(서술형)으로 다르다. (유의)

- LANGUAGE plpgsql; 
	- Oracle는 필요 없는데, postgres는 어떤 extension을 사용했다는 정보를 줘야 됨. 
<br>

 ---

<br>

<details>
  <summary><h5> Fucntion (PL/pgSQL) - Ex </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_24.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 24" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_24.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 24" width="400" style="margin-top:40px;">
  </div>
</details>
- SELECT count(\*) into total 
	- SELECT count(\*)의 정보를 total로 저장 
	
- Function을 정의하면, 그 뒤에 임의의 total_students()라는 함수를 사용할 수 있음. 
- 결국 predefined 함수처럼 쓸 수 있게 됨. 
<br>

 ---

<br>

<details>
  <summary><h5> Table Function (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_25.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 25" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_25.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 25" width="400" style="margin-top:40px;">
  </div>
</details>

 - Table로 return하는 예시 
 
 - RETURNS TABLE ( ID varchar(5), name varchar(20), dept_name varchar(20), salary numeric(8,2) ) 
	 - 앞의 예시랑 다르게 TABLE 명시하고, attribute name, type, 길이 명시함.
	 
- RETURN QUERY : 뒤에 따라오는 쿼리 문을 수행한 output table를 table 형태로 return하라는 뜻.
	- SELECT문과 RETURNS문의 attribute가 안 맞으면, error 발생 

- WHERE INS.dept_name = instructors_of.dname (이 부분이 교체되는 부분);

- 이렇게 만든 table는 나중에 쿼리에서 사용할 때, from table (instructors_of (‘Finance’)) 이렇게 (table) 명시해줘야 됨. 아니면 scalar로 착각해. 

<br>

 ---

<br>

<details>
  <summary><h5> IF-Else Statement (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_26.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 26" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_26.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 26" width="400" style="margin-top:40px;">
  </div>
</details>
 - ELSEIF 는 스페이스 없는데, END IF는 스페이스 있음. 
<br>

 ---

<br>

<details>
  <summary><h5> If-Else Statement (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_27.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 27" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_27.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 27" width="400" style="margin-top:40px;">
  </div>
</details>

- DO \$$ : anonymous fuction으로 psql prompt에서 script 짜듯이 한번 실행하고 끝나는 함수.

- DECLARE std_age INT:= 20;
	- 변수 선언. int인 std_age가 20을 할당 받음.

- RAISE NOTICE : DBMS에서 SQL Prompt를 보는 사용자한테 만 보여주는 메세지 출력문. (디버깅 용도, strerr 느낌)

<br>

 ---

<br>

<details>
  <summary><h5> Case Statement (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_28.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 28" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_28.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 28" width="400" style="margin-top:40px;">
  </div>
</details>

- expression이 있는 case 
	- expression을 확인하고, when 다음에 오는 value랑 매칭되는지 확인함.
- expression이 없는 case 
	- when 다음에 boolean condition이 와서, 만족하는지 

- Case 시작하면 끝날 때, END CASE; 써줘야 됨.


<br>

 ---

<br>

<details>
  <summary><h5> Case Statement (PL/pgSQL) - Ex </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_29.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 29" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_29.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 29" width="400" style="margin-top:40px;">
  </div>
</details>

- 동작 원리 : letter 라는 변수를 읽고, case에서 맞는 scalar 값을 찾으면, assignment에 의해 grade_value에 넣게 됨.  

- RAISE NOTICE 'Grade: %, Value: %', letter, grade_value;
	- % : 뒤에 따라오는 값에 의해 대체됨.

- For문 설명
	-  SELECT 된 grade 값 하나하나씩 letter에 대입 
<br>

 ---

<br>

<details>
  <summary><h5> Simple Loop and While Loop (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_30.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 30" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_30.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 30" width="400" style="margin-top:40px;">
  </div>
</details>

- LOOP - END LOOP : 무한 루프 코드
- EXIT;  : 루프에서 나오는 코드 
- -- : 주석 처리 

- 특정 조건을 만족할 때마다 돌리는 코드는 WHILE 사용 
	- WHILE은 LOOP 앞에 사용.
	- 조건은 boolean state여야 됨 

<br>

 ---

<br>

<details>
  <summary><h5> For Loop (PL/SQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_31.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 31" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_31.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 31" width="400" style="margin-top:40px;">
  </div>
</details>


- FOR i IN 1..10 LOOP : i는 1부터 10까지 루프 돎
-  FOR s IN SELECT id, name FROM student
	- attribute가 여러 개라서 scalar값 한 개만 s에 전해지는게 아니라, record 형태(여러 개의 attribute를 가진)로 전해짐 
	- 나중에 RAISE NOTICE 'id= %, name = %', s.id, s.name;
		- 이렇게 개별 scalar 값을 뽑아내야 됨. 
<br>

 ---

<br>

<details>
  <summary><h5> Foreach Loop (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_32.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 32" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_32.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 32" width="400" style="margin-top:40px;">
  </div>
</details>
- FOREACH는 array로 사용됨.
- x int[]; : x가 여러 개의 element를 갖는 array라고 선언하는 것. 
- CREATE FUNCTION scan_rows(int[]) : 이렇게 함수의 argument로 array type 지정할 수 있음.
- FOREACH x SLICE 1 IN ARRAY $1
	- Array element 하나씩 fetch해서 loop 도는 코드
	- $1 : 함수의 argument를 의미. 이 경우 1번째 argument 의미 
	- SLICE 1 : array를 몇 개씩 끊어서 사용할지 쓰는 코드 

<br>

 ---

<br>

<details>
  <summary><h5> Triggers (PL/SQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_33.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 33" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_33.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 33" width="400" style="margin-top:40px;">
  </div>
</details>

- Trigger : table에 데이터를 insert를 할때 callback하는 함수
	- a.k.a 이벤트 핸들러
	- trigger-time trigger-event ON table-name
		- 언제 trigger 함수를 호출할지와 어떤 함수를 호출할지 지정함. 
		-  ON table-name : 어떤 table에서 되는지 지정함.
		- 이걸로 조합함. 
			- trigger-time = {BEFORE, AFTER}  
			- trigger-event = {INSERT,DELETE,UPDATE}
<br>

 ---

<br>

<details>
  <summary><h5> Triggers (PL/SQL) - Ex  </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_34.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 34" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_34.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 34" width="400" style="margin-top:40px;">
  </div>
</details>

- RETURNS TRIGGER AS \$$ : Trigger라는 함수로 지정 
	- Trigger 함수는 몇 개의 predefined keyword를 쓸 수 있음.
- IF NEW.dept_name IS NOT NULL THEN
	- NEW : Trigger를 호출한 새롭게 insert한 record를 reference하는 변수 
	- NEW를 쓰면 RETURN NEW; 해줘야 됨 

- CREATE TRIGGER update_budget AFTER INSERT ON instructor
	- Trigger를 생성한 후, instructor라는 table이 삽입되된 후에 시작된다.

<br>

 ---

<br>

<details>
  <summary><h5> Trigger Example (PL/pgSQL) </h5></summary>
     <div style="text-align:center;">
    <img class="obsidian-only" src="assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_35.jpg" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 35" width="400" style="margin-top:40px;">
    <img class="site-only" src="{{ '/assets/posts/img/DB/Lecture06/DBLecture06-Ch5.JDBC_PLSQL_35.jpg' | relative_url | uri_escape }}" alt="DB/Lecture06/DBLecture06 Ch5.JDBC PLSQL 35" width="400" style="margin-top:40px;">
  </div>
</details>

- instructor에 넣은 값이 department table에 영향을 끼친 이유
	- 앞에 update_budget()이라는 trigger가 instructor라는 table에 record를 집어넣고, record의 dept_name이 NULL이 아니라서,   Comp. Sci. dept.의 budget에 salary를 그냥 더해버린 거임. 
	- 그래서 insert해도 department에서 자동으로 업데이트가 되어버린 거임.



ER-diagram : 36:57



<br>

 ---

<br>
