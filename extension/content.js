var html = document.body.innerHTML;

var chunks = [];

var inCap = false;
var inTag = false;

var start = 0;
var i = 0;

var glassories = {};

glassories['FCI'] = 'Founders & Coders International';
glassories['ES'] = 'ECMAScript ';
glassories['UI'] = 'User interface';
glassories['UX'] = 'User experience';
glassories['URL'] = 'A Uniform Resource Locator';
glassories['MVC'] = 'Model–view–controller';
glassories['SM'] = 'Scrum Master';
glassories['QA'] = 'Quality Asurance';
glassories['HTML'] = 'HyperText Markup Language';
glassories['CSS'] = 'Cascading Style Sheets';
glassories['PR'] = 'Pull Request';
glassories['SGC'] = 'Stop Go Continue';
glassories['DOM'] = 'Document Object Model';
glassories['TDD'] = 'Test-driven development';
glassories['CMS'] = 'Content Management System';
glassories['FACN'] = 'Founders and Coders Cohorts in Nasrath';
glassories['FACG'] = 'Founders and Coders Cohorts in Gaza';
glassories['FAC'] = 'Founders and Coders';
glassories['SGCs'] = 'Stop Go Continue';

for (i = 0; i < html.length; ++i) {
  if (html[i] >= 'A' && html[i] <= 'Z') {
    if (!inCap) {
      chunks.push(html.substring(start, i));
      start = i;
    }
    inCap = true;
  } else {
    if (inCap) {
      var code = html.substring(start, i);
      chunks.push(code);
      if (!inTag && code in glassories) {
        var name = glassories[code];
        chunks.push('<span style=" color:grey;" title="' + name + '">📝</span>');
      }
      start = i;
    }
    inCap = false;
  }

  if (html[i] == '<') {
    inTag = true;
  }
  if (html[i] == '>') {
    inTag = false;
  }
}

document.body.innerHTML = chunks.join('');
