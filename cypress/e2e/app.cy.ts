describe('проверяем основные функции приложения', function() {
  it('сервис должен быть доступен по адресу localhost:8080', function() {
      cy.visit('http://localhost:8080'); 
  });

  it('должен отображаться начальный список задач', function() {
    cy.visit('http://localhost:8080'); 
    cy.contains('Todo List');
    cy.contains('Todo 1');
    cy.contains('Todo 2');
  })

  it('новая задача добавляется в список', function() {
    cy.visit('http://localhost:8080'); 
    cy.get('form').type('Todo 3').submit();
    cy.contains('Todo 3');
  })

  it('задача помечается как выполненная и изменяется счетчик невыполненных задач', function() {
    cy.visit('http://localhost:8080'); 
    const item1checkbox = cy.contains('Todo 1')
      .find('input[type="checkbox"]');
    item1checkbox.should('not.be.checked');
    const counter = cy.contains('items left');
    counter.should('have.text', '2 items left');

    item1checkbox.click();
    item1checkbox.should('be.checked');
    cy.wait(500);
    counter.should('have.text', '1 items left');
  })

  it('отображаемые списки задач переключаются при нажатии кнопок all, active, completed', function() {
    cy.visit('http://localhost:8080'); 
    const item1checkbox = cy.contains('Todo 1')
      .find('input[type="checkbox"]');
    item1checkbox.click();
    cy.contains('Active').click();
    cy.contains('Todo 1').should('not.exist');
    cy.contains('Todo 2').should('exist');

    cy.contains('Completed').click();
    cy.contains('Todo 1').should('exist');
    cy.contains('Todo 2').should('not.exist');

    cy.contains('All').click();
    cy.contains('Todo 1').should('exist');
    cy.contains('Todo 2').should('exist');
  })

  it('выполненные задачи удаляются из списка', function() {
    cy.visit('http://localhost:8080'); 
    const item1checkbox = cy.contains('Todo 1')
      .find('input[type="checkbox"]');
    item1checkbox.click();
    const deleteBtn = cy.contains('Clear completed');
    deleteBtn.click();
    cy.contains('Todo 1').should('not.exist');
  })

});