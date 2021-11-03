//home component is the container for all component in / page

import ArtBlock from "../ArtBlock/ArtBlock";
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
        RightSection={<ArtBlock />}
      />

      <Main
        LeftSection={
          <Info
            index={2}
            hasButton={true}
            buttonText="See my Work"
            textInfo={[
              { class: "title2", text: "test2 fear2 test 2bear2" },
              { class: "subTitle", text: "tes2t2 test2" },
              { class: "paragrap22h", text: "testtt2222222222tttttttttttt" },
            ]}
            hasImage={false}
          />
        }
        RightSection={<ArtBlock />}
      />

      <Main
        LeftSection={
          <Info
            index={3}
            hasButton={true}
            buttonText="See my Work"
            textInfo={[
              { class: "title3333", text: "test3 fea3r test33 bear3" },
              { class: "subTitle", text: "test test" },
              { class: "paragraph", text: "testtttttttttttttt3333333333333" },
            ]}
            hasImage={false}
          />
        }
        RightSection={<ArtBlock />}
      />
    </div>
  );
};

export default HomeComponent;
