import React from "react";

function Commit(props) {
  const { loading, currentPosts } = props;
  // Get commits and show them
  return (
    <div>
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
    </div>
  );
}

export default Commit;
