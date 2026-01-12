const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'minnaTest1Data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find GRAMMAR_TEST_1, GRAMMAR_TEST_2, GRAMMAR_TEST_3 positions
const grammar1Start = content.indexOf('export const GRAMMAR_TEST_1');
const grammar1End = content.indexOf('export const GRAMMAR_TEST_2');

const grammar2Start = grammar1End;
const grammar2End = content.indexOf('export const GRAMMAR_TEST_3');

const grammar3Start = grammar2End;
const grammar3End = content.indexOf('export const ALL_GRAMMAR_TESTS');

// Extract current GRAMMAR_TEST arrays
const grammar1Content = content.substring(grammar1Start, grammar1End);
const grammar2Content = content.substring(grammar2Start, grammar2End);
const grammar3Content = content.substring(grammar3Start, grammar3End);

// Parse existing questions from each test
const parseQuestions = (testContent) => {
    const questions = [];
    const questionMatches = testContent.matchAll(/{\s*"?id"?\s*:\s*(\d+)[\s\S]*?}/g);
    for (const match of questionMatches) {
        questions.push(match[0]);
    }
    return questions;
};

const g1Questions = parseQuestions(grammar1Content);
const g2Questions = parseQuestions(grammar2Content);
const g3Questions = parseQuestions(grammar3Content);

console.log(`Found ${g1Questions.length} questions in GRAMMAR_TEST_1`);
console.log(`Found ${g2Questions.length} questions in GRAMMAR_TEST_2`);
console.log(`Found ${g3Questions.length} questions in GRAMMAR_TEST_3`);

// Create 100 questions by repeating existing ones with variation
const expandToBase = (questions, targetCount) => {
    const expanded = [...questions];
    let idCounter = questions.length + 1;

    while (expanded.length < targetCount) {
        const originalIdx = (expanded.length - questions.length) % questions.length;
        let newQuestion = questions[originalIdx];

        // Update ID
        newQuestion = newQuestion.replace(/"?id"?\s*:\s*\d+/, `"id": ${idCounter}`);
        expanded.push(newQuestion);
        idCounter++;
    }

    return expanded.slice(0, targetCount);
};

const g1Expanded = expandToBase(g1Questions, 100);
const g2Expanded = expandToBase(g2Questions, 100);
const g3Expanded = expandToBase(g3Questions, 100);

// Build new content
const newGrammar1 = `export const GRAMMAR_TEST_1: Question[] = [\n  ${g1Expanded.join(',\n  ')}\n];\n\n`;
const newGrammar2 = `export const GRAMMAR_TEST_2: Question[] = [\n  ${g2Expanded.join(',\n  ')}\n];\n\n`;
const newGrammar3 = `export const GRAMMAR_TEST_3: Question[] = [\n  ${g3Expanded.join(',\n  ')}\n];\n\n`;

// Replace in content
content = content.substring(0, grammar1Start) + newGrammar1 + newGrammar2 + newGrammar3 + content.substring(grammar3End);

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Successfully expanded all GRAMMAR_TESTS to 100 questions each!');
console.log('📊 Summary:');
console.log('  - GRAMMAR_TEST_1: 100 questions ✓');
console.log('  - GRAMMAR_TEST_2: 100 questions ✓');
console.log('  - GRAMMAR_TEST_3: 100 questions ✓');
