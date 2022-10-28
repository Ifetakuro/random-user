import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loading";
import UsersBox from "../components/UsersBox";
import { getFemaleUsers } from "../Redux/female/action";

export default function FemaleUsers() {
  const femaleUsers = useSelector((state) => state.femaleUsers);
  const femaleUsersData =
    femaleUsers && femaleUsers.response ? femaleUsers.response.results : [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFemaleUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Female friends</h2>
      {femaleUsers.loading ? (
        <Loader />
      ) : (
        <div className="flex-cards">
          {femaleUsersData &&
            femaleUsersData.map((users, id) => {
              return <UsersBox data={users} key={id} />;
            })}
        </div>
      )}
    </div>
  );
}
