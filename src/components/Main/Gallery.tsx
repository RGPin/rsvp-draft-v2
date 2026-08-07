export const Gallery = () => {
  return (
    <section class="gallery" id="gallery">
      <div class="gallery-container">
        <h2 class="gallery-heading">Behold, A Carousel!</h2>
        <hr class="divider" />
        <div class="carousel">
          <button class="carousel-btn prev" data-carousel-btn="prev">
            {"<"}
          </button>
          <button class="carousel-btn next" data-carousel-btn="next">
            {">"}
          </button>
          <ul class="slides-list">
            <li class="slide" data-active>
              <img src="/images/1.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/2.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/3.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/4.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/5.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/6.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/7.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/8.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/9.webp" alt="wedding image" loading="lazy" />
            </li>
            <li class="slide">
              <img src="/images/10.webp" alt="wedding image" loading="lazy" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
