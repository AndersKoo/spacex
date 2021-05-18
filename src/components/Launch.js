import React from "react";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import NumberFormat from "react-number-format";

const DESCRIPTION = `
{
  launchesPast(limit: 1) {
    rocket {
      rocket_name
      rocket {
        cost_per_launch
        diameter {
          meters
        }
        name
        description
        country
      }
    }
  }
}
`;

function Description(props) {
  const [info, setInfo] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: DESCRIPTION })
    })
      .then((response) => response.json())
      .then((data) => setInfo(data.data.launchesPast));
  }, []);

  return (
    <>
      {info.map((info) => (
        <div className="main backgroundImage">
          <p className="rocket_name">
            <GlitchClip>{info.rocket.rocket_name} </GlitchClip>
          </p>

          <p className="description">{info.rocket.rocket.description}</p>
          <div class="description__info">
            Cost pr launch {""}
            <div class="description__launch">
              <NumberFormat
                value={info.rocket.rocket.cost_per_launch}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Description;
