import { useState } from "react";

const Search = () => {
  const urlImages = "https://source.unsplash.com/448x600/?";

  const [items, setItems] = useState("");
  const [btnValue, setBtnValue] = useState("");

  const handleChange = (event) => {
    setItems(event.target.value);
    const input = event.target.value;
    var img = document.querySelectorAll("#gambar");
    for (var i = 0; i < img.length; i++) {
      img[i].src = urlImages + input + "&sig=" + i;
    }
  };

  const showCategory = document.getElementById("showCategory");

  const handleBtn = (e) => {
    setBtnValue(e.target.value);
    const input = e.target.value;
    console.log(input);

    showCategory.textContent = "";
    for (var i = 0; i < 3; i++) {
      const card = document.createElement("div");
      card.setAttribute("class", "card w-auto mx-1");

      const imageContainer = document.createElement("div");
      imageContainer.setAttribute("class", "image-container overflow-hidden");

      const image = document.createElement("img");
      image.setAttribute("class", "rounded-3xl");
      image.setAttribute("src", urlImages + input + "&sig=" + i);

      imageContainer.appendChild(image);
      card.appendChild(imageContainer);
      showCategory.appendChild(card);
    }
  };

  return (
    <>
      <div>
        <div class="parallaxHeader">
          <div class="titleParallaxHeader">
            <h1 className="text-center text-3xl font-semibold">Search Here</h1>
          </div>
          <div class="searchParallaxHeader">
            <div class="max-w-md mx-auto">
              <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="searchInput"
                  onChange={handleChange}
                  value={items}
                  placeholder="Search something.."
                />
              </div>
            </div>
          </div>
          <div className="px-4 mt-2">
            <button
              class="rounded-lg px-4 py-2 bg-gray-900 text-gray-100 mx-1"
              onClick={handleBtn}
              value="nature"
            >
              Nature
            </button>
            <button
              class="rounded-lg px-4 py-2 bg-gray-900 text-gray-100 mx-1"
              onClick={handleBtn}
              value="tech"
            >
              Tech
            </button>
            <button
              class="rounded-lg px-4 py-2 bg-gray-900 text-gray-100 mx-1"
              onClick={handleBtn}
              value="animal"
            >
              Animal
            </button>
            <button
              class="rounded-lg px-4 py-2 bg-gray-900 text-gray-100 mx-1"
              onClick={handleBtn}
              value="people"
            >
              People
            </button>
            <button
              class="rounded-lg px-4 py-2 bg-gray-900 text-gray-100 mx-1"
              onClick={handleBtn}
              value="vehicle"
            >
              Vehicle
            </button>
          </div>
          <div className="resultSearch"></div>
        </div>

        <div className="resultSearch">
          <div class="container-fluid justify-content-center text-center mt-4">
            <h1 className="text-3xl font-semibold pb-4">Your Category</h1>
            <div
              class="card-group flex flex-wrap justify-center"
              id="showCategory"
            ></div>
          </div>

          <section id="popularImages" class="m-2">
            <div class="container-fluid text-center m-3">
              <h1 class="text-3xl font-semibold my-8">Your pict of the day!</h1>
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
      </div>
    </>
  );
};

export default Search;
