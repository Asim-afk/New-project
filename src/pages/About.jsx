import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { testData } from "../Apis/TestApi";
function About() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["testpost"],
    queryFn: testData,
  });

  if (isLoading) return <h1>Loading.....</h1>;
  if (error) return <h1>Error....</h1>;
  console.log(data);

  return (
    <div>
      <h1>
        <Link to="/login">asdasd</Link>
      </h1>
    </div>
  );
}

export default About;
