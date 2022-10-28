import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loading";
import UsersBox from "../components/UsersBox";
import { getMaleUsers } from "../Redux/male/action";

export default function MaleUsers() {
  const maleUsers = useSelector((state) => state.maleUsers);
  const maleUsersData =
    maleUsers && maleUsers.response ? maleUsers.response.results : [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMaleUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Male friends</h2>
      {maleUsers.loading ? (
        <Loader />
      ) : (
        <div className="flex-cards">
          {maleUsersData &&
            maleUsersData.map((users, id) => {
              return <UsersBox data={users} key={id} />;
            })}
        </div>
      )}
    </div>
  );
}
