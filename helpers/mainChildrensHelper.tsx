import Grid from "../components/Grid";
import ContactForm from "../components/ContactForm";
import ArtBlock from "../components/ArtBlock/ArtBlock";
import AboutCard from "../components/AboutCard";
import ProjectButtons from "../components/ProjectButtons";

const childrenHelper = (
  name: string,
  properties: any,
  childName: React.ReactChild,
  childProperties?: any
): React.ReactNode => {
  if (name === "grid")
    return (
      <Grid properties={properties}>
        {childName === "card" ? <AboutCard /> : <ProjectButtons />}
      </Grid>
    );
  else if (name === "art") return <ArtBlock />;
  else return <ContactForm />;
};

export default childrenHelper;
