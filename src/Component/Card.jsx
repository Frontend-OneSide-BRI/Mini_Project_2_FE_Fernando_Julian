const Card = () => {
  return (
    <>
      <div className="mt-8">
        <section id="popularImages" class="m-2">
          <div class="container-fluid text-center m-3">
            <h1 class="text-4xl font-semibold my-8">Your pict of the day!</h1>
            <div
              id="wrapperCard"
              class="card-group flex flex-wrap justify-center"
            >
              <div class="card w-auto mx-1">
                <div id="searchImage" class="image-container overflow-hidden">
                  <img
                    src="https://source.unsplash.com/448x600/?robot&sig=1"
                    class="rounded-3xl"
                    alt="..."
                    id="gambar"
                  />
                </div>
              </div>
              <div class="card w-auto mx-1">
                <div id="searchImage" class="image-container overflow-hidden">
                  <img
                    src="https://source.unsplash.com/448x600/?robot&sig=2"
                    class="rounded-3xl"
                    alt="..."
                    id="gambar"
                  />
                </div>
              </div>
              <div class="card w-auto mx-1">
                <div id="searchImage" class="image-container overflow-hidden">
                  <img
                    src="https://source.unsplash.com/448x600/?robot&sig=3"
                    class="rounded-3xl"
                    alt="..."
                    id="gambar"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
