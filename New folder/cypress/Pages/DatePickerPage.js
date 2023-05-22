class DatePickerPage {
  getFirstDate() {
    return cy.get("#range-date-calendar");
  }

  getSecondDate() {
    return cy.get("#calendar");
  }

  getApplyBtn() {
    return cy.get("#applybtn");
  }
}

export default new DatePickerPage();
