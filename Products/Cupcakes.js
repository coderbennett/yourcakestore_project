class Cupcakes {

    render() {
        let htmlCupcakes = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (type === 'cupcake') {
                
                htmlCupcakes += `
                    <li class="products-element">
                        <img class="products-element__img" src="${img}" />
                        <span class="products-element__name">${name}</span>
                        <span class="products-element__price">${price}</span>
                    </li>
                `;
            }
        });

        const html = `
            <ul class="products-container">
                ${htmlCupcakes}
            <ul>
        `;

        ROOT_CUPCAKES.innerHTML = html;
    }
}

const cupcakesPage = new Cupcakes();
cupcakesPage.render();