import React from "react";
import "../styles.css";
import CountUp from "react-countup";

const ENGINE = `
{
  launchesPast(limit: 1) {
    rocket {
      rocket {
        engines {
          type
          thrust_vacuum {
            kN
          }
          thrust_to_weight
          thrust_sea_level {
            kN
          }
          propellant_2
          propellant_1
        }
      }
    }
  }
}
`;

function Engine(props) {
  const [engine, setEngine] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ENGINE })
    })
      .then((response) => response.json())
      .then((data) => setEngine(data.data.launchesPast));
  }, []);

  return (
    <>
      <div>
        <h1 className="title">Engine</h1>
        {engine.map((engine) => (
          <div className="engine engineImage">
            <table
              id="engine__table"
              class="engine__table bigger__font__table "
            >
              <tr>
                <th>Engine Type: </th>
                <th>Thrust Vacuum (kN): </th>
                <th>Thrust to weight: </th>
                <th>Thrust to Sealevel:(kN) </th>
                <th> Engine propellant 1: </th>
                <th>Engine propellant 2: </th>

                <tr>
                  <td>{engine.rocket.rocket.engines.type}</td>
                  <td>
                    <CountUp
                      end={engine.rocket.rocket.engines.thrust_vacuum.kN}
                      duration={25}
                    />
                  </td>

                  <td>
                    <CountUp
                      end={engine.rocket.rocket.engines.thrust_to_weight}
                      duration={25}
                    />
                  </td>
                  <td>
                    <CountUp
                      end={engine.rocket.rocket.engines.thrust_sea_level.kN}
                      duration={25}
                    />
                  </td>
                  <td>{engine.rocket.rocket.engines.propellant_1}</td>
                  <td>{engine.rocket.rocket.engines.propellant_2}</td>
                </tr>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}

export default Engine;
