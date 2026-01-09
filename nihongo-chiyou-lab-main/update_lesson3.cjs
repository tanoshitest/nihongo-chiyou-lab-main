
const fs = require('fs');
const path = require('path');

const minnaDataPath = path.join('src', 'data', 'minnaData.ts');
const lesson3ComponentPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\72b1202d-2042-46ae-a122-cf0e258a5aa3\\lesson3_vocab_components.ts';

const minnaData = fs.readFileSync(minnaDataPath, 'utf8');
const lesson3NewData = fs.readFileSync(lesson3ComponentPath, 'utf8');

// Extract the array from lesson3NewData
// It starts with "export const lesson3Vocabulary = [" and ends with "];"
const startIndexNew = lesson3NewData.indexOf('[');
const endIndexNew = lesson3NewData.lastIndexOf('];');
const newVocabularyArray = lesson3NewData.substring(startIndexNew, endIndexNew + 1);

// Find the location in minnaData
// We look for "export const lesson3Data: LessonDetail = {"
// Then inside that we look for "vocabulary: ["
// And the end is before "grammar: ["

const lesson3StartMarker = 'export const lesson3Data: LessonDetail = {';
const vocabularyMarker = 'vocabulary: [';
const grammarMarker = 'grammar: [';

const lesson3StartIndex = minnaData.indexOf(lesson3StartMarker);
if (lesson3StartIndex === -1) {
    console.error('Could not find lesson3Data start');
    process.exit(1);
}

const vocabStartIndex = minnaData.indexOf(vocabularyMarker, lesson3StartIndex);
if (vocabStartIndex === -1) {
    console.error('Could not find vocabulary start in lesson3Data');
    process.exit(1);
}

// Find the end of the vocabulary array. It is the closing bracket before "grammar: ["
const grammarStartIndex = minnaData.indexOf(grammarMarker, vocabStartIndex);
if (grammarStartIndex === -1) {
    console.error('Could not find grammar start in lesson3Data');
    process.exit(1);
}

// The vocabulary array ends before the grammar section.
// We need to find the last '],' before grammarStartIndex.
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
console.log('Successfully updated Lesson 3 vocabulary');
