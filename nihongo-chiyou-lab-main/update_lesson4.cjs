
const fs = require('fs');
const path = require('path');

const minnaDataPath = path.join('src', 'data', 'minnaData.ts');
const lesson4ComponentPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\72b1202d-2042-46ae-a122-cf0e258a5aa3\\lesson4_vocab_components.ts';

const minnaData = fs.readFileSync(minnaDataPath, 'utf8');
const lesson4NewData = fs.readFileSync(lesson4ComponentPath, 'utf8');

// Extract the array from lesson4NewData
const startIndexNew = lesson4NewData.indexOf('[');
const endIndexNew = lesson4NewData.lastIndexOf('];');
const newVocabularyArray = lesson4NewData.substring(startIndexNew, endIndexNew + 1);

// Find the location in minnaData
const lesson4StartMarker = 'export const lesson4Data: LessonDetail = {';
const vocabularyMarker = 'vocabulary: [';
const grammarMarker = 'grammar: [';

const lesson4StartIndex = minnaData.indexOf(lesson4StartMarker);
if (lesson4StartIndex === -1) {
    console.error('Could not find lesson4Data start');
    process.exit(1);
}

const vocabStartIndex = minnaData.indexOf(vocabularyMarker, lesson4StartIndex);
if (vocabStartIndex === -1) {
    console.error('Could not find vocabulary start in lesson4Data');
    process.exit(1);
}

// Find the end of the vocabulary array. It is the closing bracket before "grammar: ["
const grammarStartIndex = minnaData.indexOf(grammarMarker, vocabStartIndex);
if (grammarStartIndex === -1) {
    console.error('Could not find grammar start in lesson4Data');
    process.exit(1);
}

const vocabEndIndex = minnaData.lastIndexOf('],', grammarStartIndex);
if (vocabEndIndex === -1) {
    console.error('Could not find vocabulary end');
    process.exit(1);
}

// Construct new content
const newMinnaData = minnaData.substring(0, vocabStartIndex + 'vocabulary: '.length) +
    newVocabularyArray +
    minnaData.substring(vocabEndIndex + 1);

fs.writeFileSync(minnaDataPath, newMinnaData, 'utf8');
console.log('Successfully updated Lesson 4 vocabulary');
