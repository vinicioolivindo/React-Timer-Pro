# React Timer Pro  

**React Timer Pro** é uma aplicação web com duas funcionalidades principais: **Cronômetro** e **Temporizador**, desenvolvida em React com uma abordagem modular e design leve usando Tailwind CSS.

---

## 🌟 **Funcionalidades**  

### ⏱ **Cronômetro**  
- Permite iniciar e pausar a contagem ilimitadamente.  
- Exibe o tempo decorrido de forma clara.  
- Função de reset para reiniciar o tempo sempre que necessário.

### ⏳ **Temporizador**  
- Permite definir um tempo inicial (minutos e segundos).  
- Ao finalizar a contagem, exibe um alerta.  
- O tempo pode ser editado diretamente ao clicar nos números.  
- O temporizador se redefine automaticamente após o término da contagem.

---

## 🛠 **Tecnologias Utilizadas**  
- **React**: Biblioteca para construção de interfaces.  
- **Vite**: Ferramenta rápida para desenvolvimento front-end.  
- **Tailwind CSS**: Framework para estilização rápida e responsiva.  
- **localStorage**: Utilizado para persistir o estado das contagens.

---

## 📂 **Estrutura do Projeto**  

```
React-Timer-Pro/
│
├── public/                 # Arquivos públicos (HTML e assets)
├── src/                    # Código-fonte principal
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Timer.jsx       # Componente do Temporizador
│   │   ├── Stopwatch.jsx   # Componente do Cronômetro
│   │   ├── Controls.jsx    # Botões de controle (início, pausa, reset)
│   │   └── ContainerPage.jsx # Layout da página principal
│   ├── App.jsx             # Componente raiz da aplicação
│   └── main.jsx            # Ponto de entrada do React
│
└── package.json            # Configuração e dependências do projeto
```


## **📋 Licença**
Este projeto é distribuído sob a licença MIT.
