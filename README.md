<img src="./public/logoLambe.png" alt="Logo do projeto" width="600" height="400">

# LAMBE.AR: Arte Urbana, Realidade Aumentada e a Desconstrução de Masculinidades Tóxicas

O **LAMBE.AR** é um projeto de intervenção artística e tecnológica que utiliza a força da **arte urbana (lambe-lambe)** e a imersão da **Realidade Aumentada (RA)** para provocar reflexões profundas sobre **masculinidades tóxicas**, discursos de ódio online e a necessidade de acolhimento emocional.

A iniciativa propõe uma desconstrução do modelo de masculinidade hegemônica, que oprime tanto mulheres quanto os próprios homens, oferecendo alternativas afetivas e não-violentas ao ciclo de isolamento e raiva frequentemente observado em ambientes digitais.

## Conceito e Propósito

O projeto nasceu da observação da escalada da misoginia e dos discursos radicais em plataformas online (como movimentos *red pill* e *incels*). Em resposta, o LAMBE.AR transforma o espaço público em uma galeria interativa de debate:

*   **Arte Urbana como Intervenção:** Ilustrações originais são impressas em lambes-lambes e espalhadas em muros autorizados, invadindo o cotidiano com mensagens de denúncia e acolhimento.
*   **Tecnologia Acessível:** Cada lambe contém um QR Code que, ao ser escaneado, direciona o usuário para uma aplicação web leve. Sem a necessidade de baixar aplicativos, a câmera do celular é ativada e a ilustração estática ganha vida com **animações em Realidade Aumentada**.

O LAMBE.AR busca popularizar o debate sobre gênero e saúde mental, transformando a tecnologia em uma ferramenta de engajamento e comunhão, seguindo a máxima de Paulo Freire: "Ninguém liberta ninguém, os homens se libertam em comunhão."

## Objetivos Principais

1.  **Transformar** espaços urbanos em galerias de debate sobre gênero e saúde mental.
2.  **Provocar** reflexão crítica sobre masculinidade tóxica e misoginia digital através da arte pública.
3.  **Oferecer** acolhimento visual para jovens vulneráveis a discursos radicais, mostrando caminhos não-violentos.
4.  **Popularizar** debates sobre gênero usando a Realidade Aumentada como ferramenta de engajamento.

## Tecnologia

O protótipo do LAMBE.AR é uma aplicação web desenvolvida com foco em acessibilidade e leveza, garantindo que qualquer celular possa rodá-la:

*   **Framework:** React (Vite)
*   **Realidade Aumentada:** AR.js
*   **Animações:** Criadas em After Effects e exportadas no formato **Lottie** para garantir leveza e alta performance na aplicação.

*   **Reconhecimento de Imagem:** O modelo de reconhecimento de imagem, essencial para o funcionamento da Realidade Aumentada (AR.js), foi treinado utilizando o **Teachable Machine** do Google.

## Equipe

O projeto é uma colaboração entre arte e código:

| Função | Profissional | Contribuição Principal |
| :--- | :--- | :--- |
| **Idealização, Ilustração e Desenvolvimento Web** | Anna Caroline Miranda Martins da Silva | Criação das ilustrações digitais e desenvolvimento da aplicação web em AR.js e React. |
| **Ilustração e Animação** | Ricardo Reis | Animação das ilustrações no After Effects para a experiência de Realidade Aumentada. |

## Estrutura do Repositório

Este repositório contém o código-fonte da aplicação web de Realidade Aumentada:

![Estrutura de pastas](../assets/estururaPastas.png)

```

## Como Rodar o Projeto (Desenvolvimento)

O projeto utiliza o **Vite** como *bundler* e o **React** para a interface.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/AnnaMirand4/LAMBE.AR.git
    cd LAMBE.AR
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    pnpm run dev
    ```

O projeto estará acessível em `http://localhost:5173` (ou outra porta, conforme o Vite). Para testar a Realidade Aumentada, você precisará de um marcador (disponível na pasta `public/`) e de um dispositivo móvel.

```
Desenvolvido por Anna Caroline Miranda :cherry_blossom:

### :speech_balloon: Entre em contato :dizzy:

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:annacarolinemm@gmail.com)
[![LindIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/anna-caroline-miranda-martins)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/diamond.anna_/) 

