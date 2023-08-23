import Card from "./Card";
import "./Showcase.css";
import dataCard from "./dataCard";

export default function Showcase() {
  const userData = dataCard;
  return (
    <div className="showcase">
      <Card
        img={userData.admin.img}
        name={userData.admin.name}
        technology={userData.admin.technology}
      />
      <Card
        img={userData.dochadzka.img}
        name={userData.dochadzka.name}
        technology={userData.dochadzka.technology}
      />
      <Card
        img={userData.shooters.img}
        name={userData.shooters.name}
        technology={userData.shooters.technology}
      />
      <Card
        img={userData.codepen.img}
        name={userData.codepen.name}
        technology={userData.codepen.technology}
        info={userData.codepen.info}
      />
    </div>
  );
}
