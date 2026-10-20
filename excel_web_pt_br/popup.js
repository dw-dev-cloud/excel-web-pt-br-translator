// IMPORTA O JSON AGORA QUE É MÓDULO
import formulas from './formulas.json' with { type: 'json' };

// GERA DICIONÁRIO INVERSO (EN -> PT)
const dictENtoPT = {};
for (const [pt, en] of Object.entries(formulas)) {
  dictENtoPT[en] = pt;
}

// FUNÇÃO DE TRADUÇÃO BIDIRECIONAL
function translate(input) {
  if (!input || !input.startsWith('=')) return input || '';
  
  // DETECTA AUTOMATICAMENTE SE É PT OU EN
  const hasPTFunction = Object.keys(formulas).some(key => 
    new RegExp(`\\b${key}\\b`, 'i').test(input)
  );
  
  const dict = hasPTFunction ? formulas : dictENtoPT;
  let result = input;
  
  // ORDENA POR TAMANHO PRA EVITAR ERROS (CONT.SES ANTES DE CONT.SE)
  const keys = Object.keys(dict).sort((a, b) => b.length - a.length);
  
  for (const key of keys) {
    const value = dict[key];
    const regex = new RegExp(`\\b${key.replace('.', '\\.')}\\b`, 'gi');
    result = result.replace(regex, value);
  }
  return result;
}

// ELEMENTOS DA UI
const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const translateBtn = document.getElementById('translateBtn');
const copyBtn = document.getElementById('copyBtn');

// BOTÃO TRADUZIR
translateBtn.addEventListener('click', () => {
  const val = inputEl.value.trim();
  if (!val) return;
  
  const translated = translate(val);
  outputEl.textContent = translated;
  outputEl.style.display = 'block';
  copyBtn.style.display = 'block';
});

// BOTÃO COPIAR
copyBtn.addEventListener('click', () => {
  const text = outputEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = '✅ Copiado!';
    setTimeout(() => copyBtn.textContent = original, 2000);
  });
});