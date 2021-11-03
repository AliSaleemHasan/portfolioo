//home component is the container for all component in / page

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
              { class: "title1", text: "test1 fear test1 bear" },
              { class: "subTitle1", text: "test1 test1" },
              { class: "paragraph", text: "testtttttttttttttt11111111111111" },
            ]}
            hasImage={false}
          />
        }
        RightSection={<Grid direction="column-reverse" quadContainer />}
      />
    </div>
  );
};

export default HomeComponent;
