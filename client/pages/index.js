import Axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  const response = await Axios.get("/api/users/currentuser");
  return response.data;
};

export default LandingPage;
