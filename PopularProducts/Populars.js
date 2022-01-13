class Populars {

    render() {
        let htmlPopulars = '';

        CATALOG.forEach(({ id, type, name, img, price }) => {
            if (id === 'el3' || id === 'el6' || id === 'el9' || id === 'el12' || id === 'el15' || id === 'el18') {

                htmlPopulars += `
                    <div class="products-element slide">
                        <img class="products-element__img" src="../Products/${img}" />
                        <span class="products-element__name">${name}</span>
                        <span class="products-element__price">${price}</span>
                    </div>
                `;
            }
        });

        const html = `
            <div class="products-container populars_slider">
                ${htmlPopulars}
            </div>
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