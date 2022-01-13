class Cookies {

    render() {
        let htmlCookies = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (type === 'cookie') {
                
                htmlCookies += `
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
                ${htmlCookies}
            </ul>
        `;

        ROOT_COOKIES.innerHTML = html;
    }
}

const cookiesPage = new Cookies();
cookiesPage.render();