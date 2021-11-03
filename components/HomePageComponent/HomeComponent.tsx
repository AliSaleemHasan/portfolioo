//home component is the container for all component in / page

import AboutCard from "../AboutCard/AboutCard";
import ArtBlock from "../ArtBlock/ArtBlock";
import Grid from "../Grid/Grid";
import Info from "../Info/Info";
import Main from "../Main/Main";

import classes from "./HomeComponent.module.css";
const HomeComponent: React.FC = () => {
  return (
    <div className={classes.home}>
      <Main
        LeftSection={
          <Info
            index={0}
            hasButton={true}
            buttonText="See my Work"
            textInfo={[
              { class: "title", text: "test fear test bear" },
              { class: "subTitle", text: "test test" },
              { class: "paragraph", text: "testtttttttttttttt" },
            ]}
            hasImage={false}
          />
        }
        RightSection={<ArtBlock />}
      />

      <Main
        LeftSection={
          <Info
            index={1}
            hasButton={true}
            buttonText="See my Work"
            textInfo={[
              {
                class: "subTitle",
                text: "Are you still wasting time finding good web developers!",
              },
              {
                class: "paragraph",
                text: "A good web developer is someone who is thirsty for new knowladge,seeker for improvments and has willingness to fix errors whethers with team or by himself",
              },
              { class: "subTitle", text: "if yes .. Here comes my turn." },
              {
                class: "paragraph",
                text: "With more than 2 years of expreince in web development,Passionate about making websites ,Interacting with it and decover new web hacks ",
              },
            ]}
            hasImage={false}
          />
        }
        RightSection={
          <Grid
            direction="column-reverse"
            quadContainer
            Child={<AboutCard />}
          />
        }
      />
    </div>
  );
};

export default HomeComponent;
