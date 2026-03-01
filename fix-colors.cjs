const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const dirs = ['pages', 'sections', 'components'].map(d => path.join(srcDir, d));

let files = [];
dirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        files.push(...fs.readdirSync(dir).map(f => path.join(dir, f)).filter(f => f.endsWith('.jsx')));
    }
});

const replacements = [
    // Ensure all main gradients use EXACTLY the requested #03142A to #071C36
    { from: /linear-gradient\([^)]+#03142A[^)]+#04172F[^)]+\)/g, to: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' },
    { from: /linear-gradient\(180deg,\s*#03142A,\s*#04172F,\s*#03142A\)/g, to: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' },
    { from: /linear-gradient\(180deg,\s*#03142A,\s*#04172F\)/g, to: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' },
    { from: /linear-gradient\(to\s*bottom,\s*#03142A,\s*#04172F\)/g, to: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' },
    { from: /background:\s*'#03142A'/g, to: "background: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)'" },
    { from: /linear-gradient\(160deg,\s*#0B0B0F\s*0%,\s*#0D0718\s*50%,\s*#0B0B0F\s*100%\)/g, to: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' },

    // Ensure all Cards use EXACTLY #0D2A4D (Muted enterprise blue)
    { from: /rgba\(8,\s*30,\s*58,\s*0\.9\)/g, to: '#0D2A4D' },
    { from: /rgba\(13,\s*42,\s*77,\s*0\.95\)/g, to: '#0D2A4D' },
    { from: /rgba\(13,\s*42,\s*77,\s*0\.9\)/g, to: '#0D2A4D' },
    { from: /rgba\(13,\s*42,\s*77,\s*0\.8\)/g, to: '#0D2A4D' },
    { from: /rgba\(8,\s*30,\s*58,\s*0\.95\)/g, to: '#0D2A4D' },
    { from: /rgba\(4,\s*23,\s*47,\s*0\.8\)/g, to: '#0D2A4D' },
    { from: /rgba\(4,\s*23,\s*47,\s*0\.9\)/g, to: '#0D2A4D' },
    { from: /'rgba\(14,14,20,0\.95\)'/g, to: "'#0D2A4D'" },
    { from: /'rgba\(20,20,30,0\.9\)'/g, to: "'#081E3A'" },

    // Navbar
    { from: /rgba\(8,\s*30,\s*58,\s*0\.75\)/g, to: 'rgba(8, 30, 58, 0.98)' },
    { from: /rgba\(8,\s*30,\s*58,\s*0\.90\)/g, to: '#081E3A' },
];

let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replacements.forEach(r => {
        content = content.replace(r.from, r.to);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated:', path.basename(file));
        changedCount++;
    }
});

console.log('Total files updated:', changedCount);
