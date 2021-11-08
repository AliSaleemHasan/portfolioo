import Grid from "components/Grid/Grid";
import ContactForm from "components/utils/ContactForm";
import ArtBlock from "components/ArtBlock/ArtBlock";
import AboutCard from "components/Grid/AboutCard";
import ProjectButtons from "components/Grid/ProjectButtons";

const childrenHelper = (
  name: string,
  properties: any,
  childName: React.ReactChild,
  childProperties?: any
): React.ReactNode => {
  if (name === "grid")
    return (
      <Grid properties={properties}>
        {childName === "card" ? (
          <AboutCard />
        ) : (
          <ProjectButtons properties={childProperties} />
        )}
      </Grid>
    );
  else if (name === "art") return <ArtBlock />;
  else return <ContactForm />;
};

export default childrenHelper;
