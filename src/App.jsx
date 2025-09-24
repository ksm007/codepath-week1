import "./App.css";
import Card from "./components/Card";

import GrandCanyon from "./assets/grand_canyon.png";
import coconino from "./assets/coconinio.png";
import flagstaff from "./assets/flagstaff.png";
import lake_powell from "./assets/lake_powell.png";
import monument_valley from "./assets/monument_valley.png";
import petrified from "./assets/petrified.png";
import prescott from "./assets/prescott.png";
import sedona from "./assets/sedona.png";
import vremillion_cliff from "./assets/vremilion_cliff.png";
import camp_verde from "./assets/camp_verde.png";
import { link } from "d3";

function App() {
  const PLACES = [
    {
      name: "Grand Canyon",
      description:
        "A magnificent natural wonder known for its stunning vistas and hiking trails.",
      image: GrandCanyon,
      link: "https://www.nps.gov/grca/index.htm",
    },
    {
      name: "Sedona",
      description:
        "A picturesque town famous for its red rock formations, art galleries, and spiritual retreats.",
      image: sedona,
      link: "https://visitsedona.com/",
    },
    {
      name: "Monument Valley",
      description:
        "Iconic sandstone buttes and mesas that have been featured in numerous films and photographs.",
      image: monument_valley,
      link: "https://www.nps.gov/monu/index.htm",
    },
    {
      name: "Flagstaff",
      description:
        "A charming city surrounded by the Coconino National Forest, known for its historic downtown and proximity to the San Francisco Peaks.",
      image: flagstaff,
      link: "https://www.flagstaffaz.gov/",
    },
    {
      name: "Vermillion Cliffs National Monument",
      description:
        "A stunning area featuring colorful cliffs, canyons, and unique rock formations.",
      image: vremillion_cliff,
      link: "https://www.blm.gov/Arizona/vermilion-cliffs-national-monument",
    },
    {
      name: "Petrified Forest National Park",
      description:
        "A unique park featuring colorful petrified wood, badlands, and ancient fossils.",
      image: petrified,
      link: "https://www.nps.gov/pefo/index.htm",
    },
    {
      name: "Coconino National Forest",
      description:
        "A diverse forested area offering a variety of recreational opportunities, including hiking, camping, and scenic drives.",
      image: coconino,
      link: "https://www.fs.usda.gov/main/coconino/home",
    },
    {
      name: "Camp Verde",
      description:
        "A charming town located in the heart of Arizona, known for its rich history and outdoor activities.",
      image: camp_verde,
      link: "https://www.campverde.az.gov/",
    },
    {
      name: "Prescott",
      description:
        "A historic town known for its charming downtown, outdoor activities, and proximity to the Prescott National Forest.",
      image: prescott,
      link: "https://www.prescott-az.gov/",
    },
    {
      name: "Lake Powell",
      description:
        "A stunning reservoir on the Colorado River, known for its clear blue waters and scenic boat tours.",
      image: lake_powell,
      link: "https://www.nps.gov/glca/index.htm",
    },
  ];
  return (
    <>
      <h1>Places to Visit in Arizona</h1>

      <div className="card-list">
        {PLACES.map((place) => (
          <Card
            key={place.name}
            name={place.name}
            description={place.description}
            image={place.image}
            link={place.link}
          />
        ))}
      </div>
    </>
  );
}

export default App;
