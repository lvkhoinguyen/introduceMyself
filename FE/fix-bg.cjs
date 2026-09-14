const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  content = content.replace(/<section([^>]*)className="([^"]*)bg-slate-950([^"]*)"/g, '<section$1className="$2bg-transparent$3"');
  content = content.replace(/<section([^>]*)className="([^"]*)bg-slate-900([^"]*)"/g, '<section$1className="$2bg-transparent$3"');
  content = content.replace(/<section([^>]*)className="([^"]*)bg-radial from-slate-900 via-slate-950 to-black([^"]*)"/g, '<section$1className="$2bg-transparent$3"');
  fs.writeFileSync(fp, content);
}
console.log('Replaced section backgrounds!');
