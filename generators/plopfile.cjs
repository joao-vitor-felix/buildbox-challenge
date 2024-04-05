module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "path",
        message: "component path?"
      },
      {
        type: "input",
        name: "name",
        message: "component name?"
      }
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/component.test.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "templates/component.styles.ts.hbs"
      }
    ]
  });
};
