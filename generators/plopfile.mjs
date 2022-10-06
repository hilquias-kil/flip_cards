export default (plop) => {
  plop.setHelper('capitalize', (text) => {
    return text.replace(/ /g, '');
  });

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      {
        type: 'list',
        choices: ['atoms', 'molecules', 'organisms', 'layout'],
        name: 'folder',
        message: 'Folder',
      },
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'component/**',
        destination: `../src/components/{{folder}}/{{capitalize componentName}}`,
        base: 'component/',
        abortOnFail: true,
      },
    ],
  });
};
