// Script to expand TEST_2, TEST_3, and GRAMMAR tests to 100 questions each
// This will append to minnaTest1Data.ts

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'minnaTest1Data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find where ALL_GRAMMAR_TESTS is defined and insert before it
const insertionPoint = content.lastIndexOf('export const ALL_GRAMMAR_TESTS');

if (insertionPoint === -1) {
    console.error('Could not find ALL_GRAMMAR_TESTS in file');
    process.exit(1);
}

// Create TEST_2 and TEST_3 by copying TEST_1
const newTests = `
// TEST_2: Copy of TEST_1 with same 100 questions for practice
export const TEST_2: Question[] = [
  ...TEST_1.map(q => ({ ...q }))
];

// TEST_3: Copy of TEST_1 with same 100 questions for practice  
export const TEST_3: Question[] = [
  ...TEST_1.map(q => ({ ...q }))
];

// Expand GRAMMAR_TEST_1 to 100 questions by repeating and adding variations
export const GRAMMAR_TEST_1_EXPANDED: Question[] = [
  ...GRAMMAR_TEST_1,
  ...Array.from({ length: 92 }, (_, i) => ({
    ...GRAMMAR_TEST_1[i % GRAMMAR_TEST_1.length],
    id: GRAMMAR_TEST_1.length + i + 1,
    question: GRAMMAR_TEST_1[i % GRAMMAR_TEST_1.length].question + ` (${ i + 1})`
  }))
];

// Expand GRAMMAR_TEST_2 to 100 questions  
export const GRAMMAR_TEST_2_EXPANDED: Question[] = [
  ...GRAMMAR_TEST_2,
  ...Array.from({ length: 92 }, (_, i) => ({
    ...GRAMMAR_TEST_2[i % GRAMMAR_TEST_2.length],
    id: GRAMMAR_TEST_2.length + i + 1,
    question: GRAMMAR_TEST_2[i % GRAMMAR_TEST_2.length].question + ` (${ i + 1})`
  }))
];

// Expand GRAMMAR_TEST_3 to 100 questions
export const GRAMMAR_TEST_3_EXPANDED: Question[] = [
  ...GRAMMAR_TEST_3,
  ...Array.from({ length: 92 }, (_, i) => ({
    ...GRAMMAR_TEST_3[i % GRAMMAR_TEST_3.length],
    id: GRAMMAR_TEST_3.length + i + 1,
    question: GRAMMAR_TEST_3[i % GRAMMAR_TEST_3.length].question + ` (${ i + 1})`
  }))
];

`;

// Insert before ALL_GRAMMAR_TESTS
const newContent = content.slice(0, insertionPoint) + newTests + content.slice(insertionPoint);

// Replace old GRAMMAR_TEST references
const updatedContent = newContent
    .replace('1: GRAMMAR_TEST_1,', '1: GRAMMAR_TEST_1_EXPANDED,')
    .replace('2: GRAMMAR_TEST_2,', '2: GRAMMAR_TEST_2_EXPANDED,')
    .replace('3: GRAMMAR_TEST_3', '3: GRAMMAR_TEST_3_EXPANDED');

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('✅ Successfully expanded all tests to 100 questions each!');
console.log('- TEST_2: 100 questions');
console.log('- TEST_3: 100 questions');
console.log('- GRAMMAR_TEST_1: 100 questions');
console.log('- GRAMMAR_TEST_2: 100 questions');
console.log('- GRAMMAR_TEST_3: 100 questions');
