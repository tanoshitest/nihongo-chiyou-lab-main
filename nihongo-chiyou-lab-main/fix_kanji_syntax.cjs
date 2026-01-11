
const fs = require('fs');
const path = require('path');

const filePath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // The pattern we want to remove is the unintended interface definition and the extra export line
    // It occurs around the "目" (Eye) entry, id: 16.

    // We look for the specific garbage string
    const startsWith = `id: number;`;
    if (!content.includes(startsWith)) {
        console.log("Could not find the 'id: number;' pattern. maybe already fixed?");
    } else {
        console.log("Found the garbage pattern.");
    }

    // We will use a more robust replacement strategy.
    // Find the end of ID 16 examples.
    // japanese: "目がいいです", ... vietnamese: "Mắt tốt"

    const targetAnchor = `vietnamese: "Mắt tốt"`;
    const nextValidEntry = `id: 17,`; // Start of ID 17

    const anchorIndex = content.indexOf(targetAnchor);
    const nextEntryIndex = content.indexOf(nextValidEntry, anchorIndex);

    if (anchorIndex !== -1 && nextEntryIndex !== -1) {
        console.log(`Anchor found at ${anchorIndex}, Next Entry at ${nextEntryIndex}`);

        // Extract the text between
        const textBetween = content.substring(anchorIndex + targetAnchor.length, nextEntryIndex);
        console.log("Text between (preview):", textBetween.substring(0, 100) + "...");

        // We want to replace "Text Between" with proper closing of ID 16 structure.
        // ID 16 structure: object -> examples array -> object
        // "Mắt tốt" is inside the last example object.
        // So we need to close:
        // 1. The example object: `}`
        // 2. The examples array: `]`
        // 3. The ID 16 object: `}`
        // 4. A comma to separate from ID 17: `,`
        // 5. Open ID 17: `{` (Wait, ID 17 line starts with `id: 17,` so the brace `{` must be before it)

        // Let's check if `nextValidEntry` included the `{`. The search was for `id: 17,`.
        // The brace is likely `{\n    id: 17,`.

        // Let's redefine nextValidEntry to including the brace if possible, or just insert the brace.

        // Revised replacement:
        const cleanBetween = `
    },
  ],
  },
  {
    `;

        // We replace everything from (anchor + length) to (nextEntryIndex).
        // But we need to make sure we don't eat the `{` of ID 17 if it wasn't in the range.
        // Let's check `content[nextEntryIndex-1]`.

        // Simpler approach: Regex replace the specific garbage block if we can match it.
        // The garbage block contains `id: number;` and `export const ...`

        // Let's try to construct a regex that matches from "Mắt tốt" ending quote until "id: 17,"
        // and replace it with clean closing.

        const regex = /(vietnamese:\s*"Mắt tốt"\s*\}\s*,)\s*\{[\s\S]*?export const kanjiData: KanjiCard\[\] = \[\s*\{/

        if (regex.test(content)) {
            console.log("Regex matched!");
            const newContent = content.replace(regex, `$1
      ],
  },
  {`);
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log("File patched successfully via Regex.");
        } else {
            console.log("Regex did not match. dumping context:");
            console.log(content.substring(anchorIndex, anchorIndex + 500));

            // Fallback: Splice string manually
            // Find `export const kanjiData: KanjiCard[] = [` position
            const garbageStart = content.indexOf(`{`, anchorIndex + targetAnchor.length + 10); // Find the `{` of the interface
            const garbageEnd = content.indexOf(`export const kanjiData: KanjiCard[] = [`, garbageStart);

            if (garbageStart !== -1 && garbageEnd !== -1) {
                // Actually the garbage continues after `export...` line? No, `export...` IS the garbage line in this context (it shouldn't be there).
                // And the `[` opens the new array.
                // The ID 17 starts after `[`.
                // But we want to KEEP one single array.

                // Let's just hard replace the exact bad sequence if we find it.
                // Pattern:
                // },
                // {
                //    id: number;
                //    ...
                // }
                // export const kanjiData: KanjiCard[] = [
                // {

                // We want to turn that into:
                // },
                // ],
                // },
                // {

                // Let's try to find the start of the garabge interface
                const interfaceStart = content.indexOf("id: number;", anchorIndex);
                if (interfaceStart !== -1) {
                    // Back up to the opening brace
                    const braceStart = content.lastIndexOf("{", interfaceStart);
                    // Find the line with `export const...`
                    const exportLine = content.indexOf("export const kanjiData:", interfaceStart);
                    // Find the `[` after export
                    const openBracket = content.indexOf("[", exportLine);
                    // Find the `{` after that (start of ID 17)
                    const id17Brace = content.indexOf("{", openBracket);

                    if (braceStart !== -1 && id17Brace !== -1) {
                        console.log(`Splicing from ${braceStart} to ${id17Brace}`);
                        const before = content.substring(0, braceStart);
                        const after = content.substring(id17Brace); // This starts with `{` of ID 17

                        // We need to close ID 16 properly.
                        // The `before` ends right before the `{` of the interface. 
                        // Preceding that should be `},` of the last example.
                        // So we need to add `], },` then comma for next item.

                        const patch = `
      ],
  },
  `;
                        const final = before.trimEnd() + patch + after; // `after` starts with `{`
                        fs.writeFileSync(filePath, final, 'utf8');
                        console.log("File patched manually.");
                    }
                }
            }
        }
    } else {
        console.log("Could not find anchor points.");
    }

} catch (err) {
    console.error(err);
}
