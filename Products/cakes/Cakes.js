class Cakes {

    render() {
        let htmlCakes = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (type === 'cake') {
                
                htmlCakes += `
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
                ${htmlCakes}
            <ul>
        `;

        ROOT_CAKES.innerHTML = html;
    }
}

const cakesPage = new Cakes();
cakesPage.render();