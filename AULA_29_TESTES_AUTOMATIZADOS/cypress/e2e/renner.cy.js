function adicionarProduto() {
  cy.visit('https://dripstore.arthurrocha.dev/')
  cy.get('.swiper-slide-active > ._firstContent_j57wv_12 > ._hero_j57wv_24 > a > button').click()
  cy.wait(1000)
  cy.get('[href="/produtos/1"] > ._CardProduct_51z58_1 > ._CardProductImgContainer_51z58_28 > ._CardProductImg_51z58_23').click()
  cy.wait(1000)
  cy.contains('34').click()
  cy.wait(1000)
  cy.get('._ShopButton_lo4wv_3').click()
  cy.wait(3000)
  cy.get('._ShoppingCarIcon_12ecu_1').click()
  cy.wait(3000)
  cy.contains('Esvaziar').click()
}

describe('Digital Store', () => {
  it('Adicionar Produto ao Carrinho', () => {
    adicionarProduto();
  })

  it('Limpar o Carrinho', () => {
    adicionarProduto();
    cy.contains('Esvaziar').click()
  })
})