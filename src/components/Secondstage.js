import React from "react";
import CountUp from "react-countup";

const SECOND = `
{
  launchesPast(limit: 5) {
    rocket {
      second_stage {
        payloads {
          manufacturer
          nationality
          payload_mass_kg
          payload_mass_lbs
          payload_type
        }
      }
    }
    launch_site {
      site_name
    }
    mission_name
    launch_year
  }
}
`;

function Secondstage(props) {
  const [sec, setSec] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: SECOND })
    })
      .then((response) => response.json())
      .then((data) => setSec(data.data.launchesPast));
  }, []);

  return (
    <>
      <div>
        <h1 className="title ">Second stage</h1>
        {sec.map((sec) => (
          <table id="info">
            <tr data-aos="flip-left">
              <th>Manufacturer: </th>
              <th>Nationality: </th>
              <th> Mass(KG):</th>
              <th> Mass(pounds): </th>
              <th>Type: </th>
              <tr />
              <tr>
                <td>{sec.rocket.second_stage.payloads[0].manufacturer} </td>
                <td> {sec.rocket.second_stage.payloads[0].nationality} </td>
                <td>
                  {" "}
                  <CountUp
                    end={sec.rocket.second_stage.payloads[0].payload_mass_kg}
                    duration={25}
                  />
                </td>
                <td>
                  <CountUp
                    end={sec.rocket.second_stage.payloads[0].payload_mass_lbs}
                    duration={25}
                  />
                </td>
                <td>{sec.rocket.second_stage.payloads[0].payload_type} </td>
              </tr>
            </tr>
          </table>
        ))}
      </div>
    </>
  );
}

export default Secondstage;
