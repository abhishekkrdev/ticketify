import buildClient from "../api/built-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return currentUser ? <h1>You are signed in </h1> : <h1>You are signed out</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
