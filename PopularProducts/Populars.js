class Populars {

    render() {
        let htmlPopulars = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (id === 'el3' || id === 'el6' || id === 'el9' || id === 'el12' || id === 'el15' || id === 'el18' || id === 'el21' || id === 'el25' || id === 'el30') {

                htmlPopulars += `
                    <li class="products-element slide">
                        <img class="products-element__img" src="../Products/${img}" />
                        <div class="products-element__name">${name}</div>
                        <div class="products-element__price">${price}</div>
                    </li>
                `;
            }
        });

        const html = `
            <ul class="products-container populars_slider">
                ${htmlPopulars}
            </ul>
        `;
          
        ROOT_POPULARS.innerHTML = html;
    }
}

const popularsPage = new Populars();
popularsPage.render();


$(function() {

    $('.populars_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      })

})