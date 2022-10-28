import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loading";
import UsersBox from "../components/UsersBox";
import { getAllUsers } from "../Redux/getAllUsersAction";

export default function AllUsers() {
  const [page, setPage] = useState(1);
  const pages = 5;

  const allUsers = useSelector((state) => state.allUsers);
  const allUsersData =
    allUsers && allUsers.response ? allUsers.response.results : [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers(page));
  }, [dispatch, page]);

  return (
    <div>
      <h2>Female and Male</h2>
      {allUsers.loading ? (
        <Loader />
      ) : (
        <div className="flex-cards">
          {allUsersData &&
            allUsersData.map((users, id) => {
              return <UsersBox data={users} key={id} />;
            })}
        </div>
      )}
      {allUsersData && !allUsers.loading && (
        <div>
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="pag-btn"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {Array.from({ length: pages }, (value, index) => index + 1).map(
            (each) => (
              <button
                onClick={() => setPage(each)}
                className={`pag-btn ${each === page ? "pag-active" : ""}`}
              >
                {each}
              </button>
            )
          )}

          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
            className="pag-btn"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <p className="pagination">
            Pages: {page} of {pages}
          </p>
        </div>
      )}
    </div>
  );
}
