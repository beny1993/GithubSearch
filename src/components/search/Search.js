import React, { useState } from "react";
import Pagination from "../pagination/Pagination";
import Axios from "axios";

export default function Search() {
  const [owner, setOwner] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  const onChangeHandler2 = (e) => {
    setOwner(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();

    if (!owner) {
      alert("write repo");
    } else {
      setLoading(true);
      Axios.get(`https://api.github.com/repos/${owner}/commits`)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          setData(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex justify-center items-center w-auto mb-5 bg-gray-300 inline-block">
        <input
          className="rounded bg-gray-400 mr-3 w-64  shadow p-2"
          type="text"
          value={owner}
          onChange={onChangeHandler2}
          placeholder="facebook/react"
        />
        <button
          type="submit"
          onClick={onClickHandler}
          className="bg-green-300 rounded-md  border-2 shadow hover:bg-green-500 p-2"
        >
          search
        </button>
      </div>
      {loading ? (
        <p>loading...</p>
      ) : (
        currentPosts.map((item, index) => {
          return (
            <div key={index} className="border-4  py-2 px-4 mx-4 border-black ">
              <div className="flex items-center py-2">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={item.author.avatar_url}
                  alt="no avatar"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">
                    {item.commit.author.name}
                  </p>
                  <p className="text-gray-600">{item.commit.message}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </>
  );
}
