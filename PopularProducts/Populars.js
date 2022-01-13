class Populars {

    render() {
        let htmlPopulars = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (id === 'el3' || id === 'el6' || id === 'el9' || id === 'el12' || id === 'el15' || id === 'el18') {

                htmlPopulars += `
                    <div class="products-element">
                        <img class="products-element__img" src="../Products/${img}" />
                        <span class="products-element__name">${name}</span>
                        <span class="products-element__price">${price}</span>
                    </div>
                `;
            }
        });

        const html = `
            <div class="products-container">
                ${htmlPopulars}
            </div>
        `;
          
        ROOT_POPULARS.innerHTML = html;
    }
}

const popularsPage = new Populars();
popularsPage.render();