const lista = [
  {
    nome: "Marcio",
    cpf: "15469584965",
    email: "marcio@gmail.com",
    telefone: "027589511515"
  },
  {
    nome: "Arthur",
    cpf: "15469584965",
    email: "arthur@gmail.com",
    telefone: "027589511515"
  },
  {
    nome: "Alice",
    cpf: "15469584965",
    email: "alice@gmail.com",
    telefone: "027589511515"
  }
]

describe('template spec', () => {
  it('passes', () => {

    lista.map(item => {

      cy.visit('https://dripstore.arthurrocha.dev/register')
      cy.get("#user-name").type(item.nome)
      cy.wait(500)
      cy.get("#user-cpf").type(item.cpf)
      cy.wait(500)
      cy.get("#user-email").type(item.email)
      cy.wait(500)
  
      cy.get("#user-phone-number").type(item.telefone)
      cy.wait(500)
      
      cy.get("#address-cep").type("60763600")
      cy.wait(500)

      cy.get("#address-square").type("60763600")
      cy.wait(500)
  
      cy.get("#address-neighborhood").type("60763600")
      cy.wait(500)
  
      cy.get("#address-city").type("Fortaleza")
      cy.wait(500)
  
      cy.get("#new-letter").click()
      cy.wait(500)
     
      cy.contains('Cadastrar').click();
      cy.wait(2000);
    })
  })
})
