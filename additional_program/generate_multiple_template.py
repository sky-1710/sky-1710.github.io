#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
입력: PDF 이름, 시작 번호, 끝 번호
출력: 각 페이지마다 <details> ... img(...) ... </details>
Usage:
    python generate_img_tags_details.py Lecture05 30 34
"""

import sys

def main():
    if len(sys.argv) < 4:
        print("Usage: python generate_img_tags_details.py <pdf_name> <start> <end>")
        sys.exit(1)

    pdf_name = sys.argv[1]   # PDF 이름
    start = int(sys.argv[2]) # 시작 번호
    end = int(sys.argv[3])   # 끝 번호

    # 템플릿
    TEMPLATE = f'img({pdf_name}{{}}.jpg)'

    for i in range(start, end + 1):
        print("<details>")
        print(f"  <summary><h5> Title {i} </h5></summary>")
        print(f"  {TEMPLATE.format(i)}")
        print("</details>\n<br>\n \n --- \n \n<br>\n")

if __name__ == "__main__":
    main()
