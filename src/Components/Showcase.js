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
      <Card />
      <Card />
      <Card />
    </div>
  );
}
