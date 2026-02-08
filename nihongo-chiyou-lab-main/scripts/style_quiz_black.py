
import os
import re

def replace_styles(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define replacements (Order matters for overlapping patterns)
    replacements = [
        # Text colors
        (r'text-\[#008001\]', 'text-black'),
        (r'hover:text-\[#008001\]', 'hover:text-black'),
        (r'data-\[state=checked\]:text-\[#008001\]', 'data-[state=checked]:text-black'),
        
        # Backgrounds
        (r'bg-\[#008001\]', 'bg-black'),
        (r'hover:bg-\[#006801\]', 'hover:bg-neutral-800'),
        (r'bg-\[#008001\]/10', 'bg-black/10'),
        (r'bg-\[#008001\]/5', 'bg-black/5'),
        (r'bg-\[#008001\]/20', 'bg-black/20'), # Just in case
        
        # Borders
        (r'border-\[#008001\]', 'border-black'),
        (r'hover:border-\[#008001\]', 'hover:border-black'),
        (r'border-\[#008001\]/50', 'border-black/50'),
        (r'border-\[#008001\]/20', 'border-black/20'),
        (r'border-\[#008001\]/30', 'border-black/30'),
        (r'data-\[state=checked\]:border-\[#008001\]', 'data-[state=checked]:border-black'),
    ]

    new_content = content
    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes in {file_path}")

def main():
    directory = r'c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\pages'
    
    # Process MinnaTest1.tsx to MinnaTest12.tsx and MinnaTestN4.tsx
    files = [f for f in os.listdir(directory) if f.startswith('MinnaTest') and f.endswith('.tsx')]
    
    for filename in files:
        file_path = os.path.join(directory, filename)
        replace_styles(file_path)

if __name__ == '__main__':
    main()
