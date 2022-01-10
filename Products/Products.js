class Products {


    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img,}) => {

            htmlCatalog += `
                <li class="products-element">
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__name">${name}</span>
                    <span class="products-element__price">${price}</span>

                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();