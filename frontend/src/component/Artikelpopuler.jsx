import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Artikelpopuler() {
  const [populer, setPopuler] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        setPopuler(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = populer
    .filter((data) =>
      data.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 3);

  const getFirst10Words = (text) => {
    return text.split(" ").slice(0, 10).join(" ") + "...";
  };

  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      {/* Artikel populer */}
      <div className="py-5">
        <h1 className="text-base font-medium my-2 lg:text-3xl">
          Artikel Populer
        </h1>
        <div>
          <div className="flex flex-col gap-5 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4">
            {filteredArticles.map((data, index) => (
              <Link
                key={data.uuid}
                to={`/Artikeledu/${data.uuid}`}
                className={`rounded-lg bg-fifth cursor-pointer ${
                  index === 0 ? "lg:row-span-2 lg:flex-col" : "flex-row"
                } flex flex-row lg:flex lg:flex-row h-[125px] lg:h-auto`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={data.url}
                    className={`object-cover ${
                      index === 0
                        ? "w-[150px] h-[125px] lg:w-full lg:h-[348px] rounded-l-lg lg:rounded-t-lg lg:rounded-b-none"
                        : "w-[150px] h-[125px] lg:w-[200px] lg:h-full rounded-l-lg"
                    }`}
                    alt={data.title}
                  />
                </div>
                <div className="flex flex-col justify-center p-2 lg:justify-start lg:p-4">
                  <h1 className="text-lg lg:text-xl font-semibold line-clamp-3 order-1 lg:order-2">
                    {data.title}
                  </h1>
                  <p className="text-xs lg:text-sm lg:font-semibold order-2 lg:order-1">
                    {data.author}
                  </p>
                  <p className="hidden lg:block text-sm lg:text-base mt-2 order-3 line-clamp-2">
                    {getFirst10Words(data.content)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
