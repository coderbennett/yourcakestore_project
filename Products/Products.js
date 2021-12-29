class Products {


    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {

            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${img}" >
                    
                </li>
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();