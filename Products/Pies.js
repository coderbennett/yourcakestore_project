class Pies {

    render() {
        let htmlPies = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (type === 'pie') {
                
                htmlPies += `
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
                ${htmlPies}
            <ul>
        `;

        ROOT_PIES.innerHTML = html;
    }
}

const piesPage = new Pies();
piesPage.render();