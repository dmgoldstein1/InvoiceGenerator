const fs = require('fs');
const yaml = require('js-yaml');

const templatePath = '../templates/invoiceTemplate.js';
const stylesPath = '../styles/invoiceStyles.js';

let template;
let styles;

try {
  template = require(templatePath);
  styles = require(stylesPath);
} catch (e) {
  console.error(e);
}

function generatePDF(yamlData) {
  const documentDefinition = { ...template, content: [] };

  // Parse YAML data
  try {
    const data = yaml.load(yamlData);

    // Populate the document definition with data
    // This is a placeholder for actual population logic

    return template;
  } catch (e) {
    console.error('Error parsing YAML:', e);
    return null;
  }
}

const yamlInput = fs.readFileSync('./test/testData.yaml', 'utf8');
const pdf = generatePDF(yamlInput);

console.log(pdf);
