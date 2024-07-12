import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import iconleft1 from "../../assets/image/kiri.png";

const ArtikelEdu = () => {
  const [mainArticle, setMainArticle] = useState({});
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [showHeader1, setShowHeader1] = useState(true); // State to determine whether to show header 1 or not
  const [showHeader2, setShowHeader2] = useState(true); // State to determine whether to show header 2 or not
  const [showHeader3, setShowHeader3] = useState(true); // State to determine whether to show header 3 or not

  let { id } = useParams();

  useEffect(() => {
    const fetchArticleById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/articles/${id}`
        );
        console.log("Main Article Data:", response.data);

        // Check if header1, header2, or header3 is "null" (as a string), replace them with an empty string
        const articleData = {
          ...response.data,
          header1:
            response.data.header1 === "null" ? "" : response.data.header1,
          header2:
            response.data.header2 === "null" ? "" : response.data.header2,
          header3:
            response.data.header3 === "null" ? "" : response.data.header3,
        };

        setMainArticle(articleData);
        setShowHeader1(articleData.header1 !== ""); // Set showHeader1 based on the presence of header1
        setShowHeader2(articleData.header2 !== ""); // Set showHeader2 based on the presence of header2
        setShowHeader3(articleData.header3 !== ""); // Set showHeader3 based on the presence of header3
      } catch (error) {
        console.error("Error fetching main article:", error);
      }
    };

    const fetchRelatedArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        const filteredArticles = response.data
          .filter((article) => article.uuid !== id)
          .slice(0, 3);
        setRelatedArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching related articles:", error);
      }
    };

    fetchArticleById();
    fetchRelatedArticles();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="bg-[#F9FAF9] min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-Montserrat">
        <div className="w-[900px] flex flex-col lg:flex-row">
          <div className="flex-1 lg:mr-8">
            <Link to="/Calmy-Edu">
              <button
                type="button"
                className="flex items-center text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form mb-5"
              >
                <img src={iconleft1} alt="IconLeft" className="mr-2" />
                Kembali
              </button>
            </Link>
            <article className="bg-[#F9FAF9] p-6 rounded-lg shadow-md mb-8 lg:mb-0">
              <h1 className="text-2xl font-bold mb-4 text-center text-[#04364A]">
                {mainArticle.title}
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                {mainArticle.author} &#8226;{" "}
                {new Date(mainArticle.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={mainArticle.url}
                  alt={mainArticle.title}
                  className="rounded-lg mx-auto w-full h-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col lg:flex-row mb-6 text-[#04364A]">
                <div className="hidden lg:block w-[190px] mb-4 lg:mb-0 ml-2">
                  <h1 className="font-bold mb-2 text-xl">Table of content</h1>
                  <ul className="list-disc  font-bold">
                    {showHeader1 && mainArticle.header1 && (
                      <li>{mainArticle.header1}</li>
                    )}
                    {showHeader2 && mainArticle.header2 && (
                      <li>{mainArticle.header2}</li>
                    )}
                    {showHeader3 && mainArticle.header3 && (
                      <li>{mainArticle.header3}</li>
                    )}
                  </ul>
                </div>
                <div className=" text-justify w-[700px] flex-row">
                  <p className="text-xs lg:text-base">{mainArticle.content}</p>
                  <div>
                    {showHeader1 && mainArticle.header1 && (
                      <h1 className="font-bold text-base lg:text-xl ">
                        {mainArticle.header1}
                      </h1>
                    )}
                    <p className="text-xs lg:text-base">
                      {mainArticle.content1}
                    </p>
                  </div>
                  <div>
                    {showHeader2 && mainArticle.header2 && (
                      <h1 className="font-bold text-base lg:text-xl">
                        {mainArticle.header2}
                      </h1>
                    )}
                    <p className="text-xs lg:text-base">
                      {mainArticle.content2}
                    </p>
                  </div>
                  <div>
                    {showHeader3 && mainArticle.header3 && (
                      <h1 className="font-bold text-base lg:text-xl">
                        {mainArticle.header3}
                      </h1>
                    )}
                    <p className="text-xs lg:text-base">
                      {mainArticle.content3}
                    </p>
                  </div>
                  {mainArticle.content4 && (
                    <p className="text-xs lg:text-base">
                      {mainArticle.content4}
                    </p>
                  )}
                </div>
              </div>
            </article>
          </div>
          <aside className="lg:w-[250px] flex-shrink-0 mt-8 lg:mt-0">
            <div className="space-y-4 p-4 bg-[#F9FAF9] shadow-md rounded-lg">
              <h3 className="font-bold mb-4 text-[#04364A]">
                Artikel Pilihan Lainnya
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link to={`/Artikeledu/${article.uuid}`} key={article.uuid}>
                    <div
                      className="bg-white shadow-md rounded-lg overflow-hidden"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <img
                        src={article.url}
                        alt={article.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="text-sm text-[#04364A] mb-2 font-bold">
                            {article.author}
                          </p>
                          <h4 className="font-bold text-[#04364A] flex items-center justify-between">
                            <span>{article.title}</span>
                          </h4>
                          <p className="text-sm text-[#04364A]">
                            {new Date(article.date).toLocaleDateString(
                              "id-ID",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelEdu;
