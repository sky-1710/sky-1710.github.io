---
title: 첫 포스트
date: 2025-09-25 10:20:00 +09:00
categories:
  - S-W
tags:
  - 만들기
pin: true
---

### 준비중
1. 글은 _post 파일에 yyyy-mm-dd-title.md 파일로 작성

    1. 아래의 양식으로 작성
    ```
    ---
    title : First Post
    date : 2024-01-10 00:00:00 +09:00
    categories : [Post]
    tags : [테스트]
    pin : True
    ---
    ```
    ```
    # Test용 포스트 올리기

    ## 1

    ### 1-1

    ### 1-2

    ## 2
    ```
    

2. sky-1710.github.io 파일로 들어가서 
    ```
    bundle install 
    bundle exec jekyll serve
    ```
    를 실행해서 블로그랑 연결하라.

3. 완성이 되었다면 git bash에 가서
    ```
    git status 
    git add .
    git commit -m ""
    git push origin master
    ```
    로 올리면 끝!

    1. commit은 conventional commit 규칙 준수
    
    ```
    feat: add new blog post
    fix: correct typo in homepage
    docs: update README
    style: change CSS color
    refactor: clean up code
    ```




