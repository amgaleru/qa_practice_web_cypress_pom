class PaginationPage {
  getPaginator() {
    return cy.get("ul.pagination");
  }

  getPages() {
    const x = cy.get("ul.pagination").filter("li.page-item > a.page-link").each(element => {
        console.log(JSON.stringify(element));
    });
    debugger;
    return x;
  }
}

export default new PaginationPage ();
