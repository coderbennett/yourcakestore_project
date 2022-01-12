class Desserts {

    render() {
        let htmlDesserts = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (type === 'dessert') {
                
                htmlDesserts += `
                    <li class="products-element">
                        <img class="products-element__img" src="../${img}" />
                        <span class="products-element__name">${name}</span>
                        <span class="products-element__price">${price}</span>
                    </li>
                `;
            }
        });

        const html = `
            <ul class="products-container">
                ${htmlDesserts}
            <ul>
        `;

        ROOT_DESSERTS.innerHTML = html;
    }
}

const dessertsPage = new Desserts();
dessertsPage.render();