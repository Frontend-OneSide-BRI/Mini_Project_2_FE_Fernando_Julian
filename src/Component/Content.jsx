import { useState, useEffect } from "react";
import { categoryData, imgData } from "../data/data.js";

const Content = () => {
  const urlImages = "https://source.unsplash.com/600x600/?";
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setImages(imgData);
    setCategory(categoryData);
  }, []);

  return (
    <>
      <div className="mt-8">
        {/* <section id="popularImages" class="m-2">
          <div class="container-fluid text-center m-3">
            <h1 class="text-4xl font-semibold my-8">Your pict of the day!</h1>
            <div
              id="wrapperCard"
              class="card-group flex flex-wrap justify-center"
            >
              <div class="card w-auto mx-1">
                <div id="searchImage" class="image-container overflow-hidden">
                  <img
                    src={urlImages + images[0].name + "&sig=" + images[0].id}
                    class="rounded-3xl"
                    alt="..."
                    id="gambar"
                  />
                </div>
              </div>
              <div class="card w-auto mx-1">
                <div id="searchImage" class="image-container overflow-hidden">
                  <img
                    src={urlImages + images[1].name + "&sig=" + images[1].id}
                    class="rounded-3xl"
                    alt="..."
                    id="gambar"
                  />
                </div>
              </div>
              <div class="card w-auto mx-1">
                <div id="searchImage" class="image-container overflow-hidden">
                  <img
                    src={urlImages + images[2].name + "&sig=" + images[2].id}
                    class="rounded-3xl"
                    alt="..."
                    id="gambar"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};
export default Content;
