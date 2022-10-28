import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loading";
import { getSingleUser, resetSingleUser } from "../Redux/singleUser/action";

export default function User() {
  const { userId } = useParams();
  console.log(userId);
  const singleUser = useSelector((state) => state.singleUser);
  const singleUserData =
    singleUser && singleUser.response ? singleUser.response.results[0] : {};
  console.log(userId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(userId));

    return () => {
      dispatch(resetSingleUser());
    };
  }, [dispatch, userId]);
  return (
    <div>
      {singleUser.loading ? (
        <Loader />
      ) : (
        <div>
          {Object.keys(singleUserData).length === 0 ? (
            <div>No data </div>
          ) : (
            <div>
              <div>
                <img
                  src={singleUserData.picture.large}
                  alt={singleUserData.name.first}
                />
              </div>
              <div>
                <div>
                  <p>
                    <span>Name:</span> {singleUserData.name.title}{" "}
                    {singleUserData.name.first} {singleUserData.name.last}
                  </p>
                  <p>{singleUserData.gender}</p>
                  <p>{singleUserData.email}</p>
                  <p>{singleUserData.dob.age}</p>
                </div>
                <div>
                  <p>{singleUserData.phone}</p>
                  <p>{singleUserData.postcode}</p>
                  <p>
                    {singleUserData.location.street.number},{" "}
                    {singleUserData.location.street.name}{" "}
                    {singleUserData.location.city}
                  </p>
                  <p>
                    {singleUserData.location.state},{" "}
                    {singleUserData.location.country} {singleUserData.nat}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
