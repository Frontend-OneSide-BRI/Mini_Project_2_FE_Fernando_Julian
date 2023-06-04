import { useState } from "react";

const Search = () => {
  const [items, setItems] = useState("");

  const handleChange = (event) => {
    setItems(event.target.value);

    console.log(event.target.value);
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
        </div>
      </div>
    </>
  );
};

export default Search;
