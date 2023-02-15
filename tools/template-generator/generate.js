const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: '[Code Academy] Component',
    defaultCase: '(kebabCase)',
    entry: {
      folderPath: './tools/template-generator/templates/code-academy/component-challenge-__challenge__.js',
    },
    stringReplacers: [{ question: 'Challenge number', slot: '__challenge__' }],
    output: {
      path: './src/code-academy/challenge-__challenge__.js',
    },
    onComplete: results => {
      console.log(results);
    },
  },
  {
    option: '[Code Academy] Page',
    defaultCase: '(kebabCase)',
    entry: {
      folderPath: './tools/template-generator/templates/code-academy/page-challenge-__challenge__.js',
    },
    stringReplacers: [{ question: 'Challenge number', slot: '__challenge__' }],
    output: {
      path: './src/pages/code-academy/challenge-__challenge__.js',
    },
    onComplete: results => {
      console.log(results);
    },
  },
  {
    option: '[Edabit] Component',
    defaultCase: '(kebabCase)',
    entry: {
      folderPath: './tools/template-generator/templates/edabit/component-challenge-__challenge__.js',
    },
    stringReplacers: [{ question: 'Challenge number', slot: '__challenge__' }],
    output: {
      path: './src/edabit/challenge-__challenge__.js',
    },
    onComplete: results => {
      console.log(results);
    },
  },
  {
    option: '[Edabit] Page',
    defaultCase: '(kebabCase)',
    entry: {
      folderPath: './tools/template-generator/templates/edabit/page-challenge-__challenge__.js',
    },
    stringReplacers: [{ question: 'Challenge number', slot: '__challenge__' }],
    output: {
      path: './src/pages/edabit/challenge-__challenge__.js',
    },
    onComplete: results => {
      console.log(results);
    },
  },
]);
