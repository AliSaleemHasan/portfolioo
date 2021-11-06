import type { NextPage } from "next";
import Head from "next/head";
import AboutCard from "../components/AboutCard/AboutCard";
import ArtBlock from "../components/ArtBlock/ArtBlock";
import ContactForm from "../components/contactForm/ContactForm";
import Grid from "../components/Grid/Grid";
import Info from "../components/Info/Info";
import Main from "../components/Main/Main";
import ProjectButtons from "../components/projectButtons/ProjectButtons";

const Work: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main
        LeftSection={
          <Info
            index={0}
            hasButton={false}
            buttonText="See my Work"
            textInfo={[
              {
                class: "title",
                text: "Dreams Don’t work unless you do.",
              },
              {
                class: "paragraph gray",
                text: "Bellow you can find  A selection of projects I've worked on, during my career as a software developer.",
              },
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
            hasButton={false}
            textInfo={[
              {
                class: "subTitle gray",
                text: "Lettalk is full stack real time chat application . I made this app in order to learn more about how server work and how sockets work. It provides real time communication between two user and much more...",
              },
            ]}
            hasImage={true}
            imageInfo={{ name: "lettalk", source: "/images/lettalklogo.png" }}
          />
        }
        RightSection={<Grid direction="row" Child={<ProjectButtons />} />}
      />

      <Main
        reverseLayout
        LeftSection={
          <Info
            background="var(--pink)"
            isContact={true}
            index={1}
            hasButton={false}
            textInfo={[
              {
                class: "subTitle white",
                text: "Drop me a line",
              },
              {
                class: "paragraph white",
                text: "  i would love to hear from you. would you like to discuss a potential project? mybe you just want to stop and say hi?",
              },
              {
                class: "paragraph white",
                text: "  mybe you just want to stop and say hi? you can send me a message using my contact form or by information",
              },
              {
                class: "paragraph white",
                text: "  you can send me a message using my contact form ",
              },
            ]}
            hasImage={false}
          />
        }
        RightSection={<ContactForm color="#fff" background="var(--pink)" />}
      />
    </div>
  );
};

export default Work;
