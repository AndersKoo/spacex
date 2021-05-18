import React from "react";
import "../styles.css";
import CountUp from "react-countup";

const LAUNCHES_QUERY = `
{
  launchesPast(limit: 5) {
    rocket {
      first_stage {
        cores {
          flight
          reused
          landing_vehicle
        }
      }
    }
  }
}
`;

function Firststage(props) {
  const [info, setInfo] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LAUNCHES_QUERY })
    })
      .then((response) => response.json())
      .then((data) => setInfo(data.data.launchesPast));
  }, []);

  return (
    <>
      <div>
        <h2 className="title">First Stage </h2>
        {info.map((info) => (
          <div className="firststage__details">
            <div class="firststage__detail__1" data-aos="flip-right">
              <p>Flights:</p>{" "}
              <CountUp
                end={info.rocket.first_stage.cores[0].flight}
                duration={15}
              />
            </div>
            <div class="firststage__detail__2 " data-aos="flip-left">
              <p>Landing Vehicle: </p>{" "}
              <h3>{info.rocket.first_stage.cores[0].landing_vehicle}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Firststage;
