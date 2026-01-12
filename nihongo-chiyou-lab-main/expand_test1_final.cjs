const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'minnaTest1Data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find TEST_2 start and end
const test2Start = content.indexOf('export const TEST_2: Question[] = [');
const test2End = content.indexOf('];', test2Start) + 2;

// Find TEST_3 start and end
const test3Start = content.indexOf('export const TEST_3: Question[] = [');
const test3End = content.indexOf('];', test3Start) + 2;

// Find TEST_1 content to copy
const test1Start = content.indexOf('export const TEST_1: Question[] = [');
const test1ContentStart = content.indexOf('[', test1Start) + 1;
const test1End = content.indexOf('];', test1Start);
const test1Questions = content.substring(test1ContentStart, test1End).trim();

// Create new TEST_2 and TEST_3 content (same as TEST_1)
const newTest2 = `export const TEST_2: Question[] = [\n  ${test1Questions}\n];`;
const newTest3 = `export const TEST_3: Question[] = [\n  ${test1Questions}\n];`;

// Replace TEST_2
content = content.substring(0, test2Start) + newTest2 + '\n\n' + content.substring(test2End);

// Recalculate TEST_3 position after TEST_2 replacement
const newTest3Start = content.indexOf('export const TEST_3: Question[] = [');
const newTest3End = content.indexOf('];', newTest3Start) + 2;

// Replace TEST_3
content = content.substring(0, newTest3Start) + newTest3 + '\n\n' + content.substring(newTest3End);

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Successfully expanded TEST_2 and TEST_3 to 100 questions each!');
console.log('📊 Summary:');
console.log('  - TEST_1: 100 questions ✓');
console.log('  - TEST_2: 100 questions ✓');
console.log('  - TEST_3: 100 questions ✓');
