import React from "react";

const ROCKET = `
{
  launchesPast(limit: 1) {
    launch_site {
      site_name_long
    }
    launch_year
    mission_name
  }
}
`;

function Rocket(props) {
  const [falcon, setFalcon] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ROCKET })
    })
      .then((response) => response.json())
      .then((data) => setFalcon(data.data.launchesPast));
  }, []);

  return (
    <>
      <div>
        <h1 className="title ">Falcon 9</h1>
        {falcon.map((falcon) => (
          <div className="falconImage">
            <div class="falcon__description bigger__font__table">
              <p>Launch Site: </p>
              <p>{falcon.launch_site.site_name_long}</p>
              <p>Mission name:</p>
              <p>{falcon.mission_name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rocket;
