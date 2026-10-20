# 🇧🇷 Tradutor Fx Excel PT-BR/ING 🇬

Extensão para Chrome/Edge que traduz fórmulas do Excel Web automaticamente entre Português e Inglês.

## ✨ Funcionalidades
- **Tradução Bidirecional Automática**: Detecta sozinho se a fórmula está em PT ou EN e traduz para o outro idioma.
- **Interface Intuitiva**: Botão com bandeiras 🇧🇷🇬🇧 e cópia rápida do resultado.
- **Dicionário Aberto**: Mais de 40 funções mapeadas e prontas para contribuições da comunidade.
- **100% Gratuito e Open Source**: Sem anúncios, sem rastreamento, focado em produtividade.

##  Como Instalar (Side Loading)
Como ainda não está na Chrome Web Store, siga estes passos simples:

1.  Baixe este repositório clicando em **Code > Download ZIP**.
2.  Extraia a pasta em qualquer lugar do seu computador.
3.  No Chrome, acesse `chrome://extensions`.
4.  Ative o **"Modo Desenvolvedor"** no canto superior direito.
5.  Clique em **"Carregar sem compactação"** e selecione a pasta extraída.
6.  Pronto! O ícone aparecerá na barra de extensões.

## 🤝 Como Contribuir
Quer adicionar uma função que falta? É super fácil!

1.  Abra o arquivo [`formulas.json`](./excel_web_pt_br/formulas.json).
2.  Adicione a nova função seguindo o padrão: `"FUNCAO_PT": "FUNCTION_EN"`.
3.  Faça um Pull Request!

Exemplo:
```json
"ARREDONDAR.PARA.BAIXO": "ROUNDDOWN"
