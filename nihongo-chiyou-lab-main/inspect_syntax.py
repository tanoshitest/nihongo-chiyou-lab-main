
import os

file_path = r"c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\minnaData.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_line = 27290
end_line = 27305

for i in range(start_line - 1, end_line):
    line_num = i + 1
    content = lines[i]
    print(f"Line {line_num}: {repr(content)}")
