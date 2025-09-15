E-food — Catálogo de Restaurantes com Carrinho e Checkout

Stack: React + TypeScript • React Router • Redux Toolkit • Styled-Components
API: ebac-fake-api.vercel.app (REST)
Estado Global: carrinho, fluxo do checkout (cart → delivery → payment → confirm)

🎯 Sobre o projeto

Aplicação front-end que lista restaurantes e permite visualizar cardápio, adicionar/remover itens ao carrinho, preencher entrega, pagamento e confirmar pedido. A arquitetura prioriza componentização, estado previsível (Redux Toolkit) e UX de compra com um drawer lateral para o fluxo de checkout.

UX: carrinho “drawer” com etapas (Entrega/Payment/Confirm) e transições.

Imagens responsivas com object-fit (sem distorção).

Rotas:

/ — Home com grid de restaurantes

/restaurante/:id — Página de detalhes com cardápio

Demo: https://efood-inky-ten.vercel.app/

✨ Destaques para recrutadores

Arquitetura limpa de estado: slices cart e ui com selectors (selectCartCount, selectCartTotal) e ações idempotentes.

Fluxo de checkout robusto: etapas controladas por FSM simples (stage: 'CART' | 'DELIVERY' | 'PAYMENT' | 'CONFIRM') com validações mínimas.

Integração de API: fetch com tratamento de erro + postCheckout tipado.

Atenção a UI: cards com altura fixa de imagens, tags sobrepostas, truncamento de texto e alinhamento consistente de CTAs.

Código em TypeScript: tipagem de payloads, entidades e estado global.

🧭 Navegação & Páginas

Home (/)
Lista de restaurantes (imagem, tags, rating, descrição truncada e CTA).

Restaurante (/restaurante/:id)
Banner, cardápio e action para abrir modal / adicionar item ao carrinho (quando aplicável).

Carrinho (Drawer)
Itens com +/-, remoção, total e fluxo Entrega → Pagamento → Confirmação.

🧱 Arquitetura de Estado (Redux Toolkit)

cartSlice.ts

items: CartItem[]

Ações: addItem, decreaseItem, removeItem, clearCart

Selectors: selectCartCount, selectCartTotal

uiSlice.ts

isCartOpen: boolean, stage, orderId

Ações: openCart, closeCart, goToDelivery, goToPayment, backToCart, backToDelivery, showConfirm

🔌 Integração com API

Restaurantes

GET /api/efood/restaurantes — lista

GET /api/efood/restaurantes/:id — detalhe

Checkout

POST /api/efood/checkout — { products, delivery, payment } → { orderId }

🛠️ Como rodar localmente
# 1) Clonar
git clone <URL_DO_REPO>
cd <PASTA>

# 2) Instalar dependências
npm install

# 3) Rodar em desenvolvimento
npm run dev

# 4) Build de produção
npm run build
npm run preview


Requisitos: Node 18+ e npm.

🧩 Principais componentes

RestaurantCard: imagem com wrapper e tags fixas no topo, título + rating, descrição truncada e CTA “Saiba mais”.

CartDrawer: overlay + painel com animação, etapas do checkout, validação mínima e submissão para postCheckout.

Header/Footer: navegação simples + identidade visual consistente.

💅 Estilo & UI

Styled-Components em todos os componentes (sem CSS global pesado).

Imagens sem deformar: altura travada e object-fit: cover.

Acessibilidade básica: botões com title/aria-label quando necessário e alt em imagens.

Tipografia com vibe de IDE (fonte “mono-like” onde fizer sentido para reforçar identidade dev).

🔒 Qualidade & Boas práticas

TypeScript first (tipos para dados da API, slices e formulários).

Separação de responsabilidades (services/, store/, pages/, components/).

Utilitários reutilizáveis (ex.: formatCurrency).

Tratamento de erros de rede com mensagens amigáveis.

🧪 Ideias de testes (próximos passos)

Unit: reducers de cartSlice e uiSlice (Jest + @reduxjs/toolkit).

Componentes: RestaurantCard e CartDrawer (React Testing Library).

E2E: fluxo completo de compra (Playwright/Cypress).

🚀 Roadmap

 Máscaras e validação mais robusta de pagamento/endereço

 Testes unitários e e2e

 Toasts de feedback (ex.: item adicionado)

 Loading skeletons

 A11y: foco gerenciado no drawer e Esc para fechar

🧑‍💻 Autor

José Valdir Calixto — Desenvolvedor Front-End / em transição para Full-Stack Java

Portfólio: https://techcalixto.com.br/

LinkedIn: https://linkedin.com/in/josevaldircalixto

Email: josevaldirdev@gmail.com
