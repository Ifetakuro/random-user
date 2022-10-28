import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "15rem auto 0",
  borderColor: "#333"
  // height: "150px"
};

export default function Loader() {
  return <ClipLoader cssOverride={override} aria-label="Loading Spinner" />;
}
