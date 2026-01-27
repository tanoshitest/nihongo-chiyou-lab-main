
import re
import os

file_path = r"c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\jlptN5_Real2025.tsx"

if not os.path.exists(file_path):
    print(f"File not found: {file_path}")
    exit(1)

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix < tag
content = re.sub(r'<\s+([a-zA-Z])', r'<\1', content)

# Fix </ tag and < / tag
content = re.sub(r'<\s+/\s+([a-zA-Z])', r'</\1', content)
content = re.sub(r'<\s+/([a-zA-Z])', r'</\1', content)
content = re.sub(r'</\s+([a-zA-Z])', r'</\1', content)

# Fix tag > 
# Note: We want to match `>` preceded by space ONLY if it looks like a tag ending?
# Or just generally. `x > y` -> `x > y`.
# If I have `<span >`, it becomes `<span>`.
# If I have `<rt >`, matches `t >`.
# Be careful with `=>`. ` = >` is invalid JS anyway usually (arrow function has no space).
# But `a > b` ?? `a > b` -> `a > b`? No `\s+>` matches ` >`.
# `a > b` has ` >`. Replaced by `>`. `a>b`.
# This is safe for TS usually.

# However, let's be more specific to tags if possible.
# `<tag ... >`
# But the space might be after attributes.
# The user's corrupted file has `< rt >`.
# `rt` is alphanumeric.
content = re.sub(r'(<[a-zA-Z0-9]+[^>]*)\s+>', r'\1>', content)
# This handles `<rt >` -> `<rt>`.
# Also `<ruby >` -> `<ruby>`.
# AND `</rt >` -> `</rt>`.
content = re.sub(r'(</[a-zA-Z0-9]+)\s+>', r'\1>', content)

# Also fix `class Name` if that happened? No, `className` seems okay in view_file.
# But `className= "..."` has space. `className="..."` is fine.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed JSX tags.")
