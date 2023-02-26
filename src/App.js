import React from "react";
import AboutMe from "./components/AboutMe";
import CardWork from "./components/CardWork";
import NavBar from "./components/NavBar";
import TabledExperience from "./components/TabledExperience";
import Title from "./components/Title";
import InformationContact from "./components/InformationContact";
import MyCourses from "./components/MyCourses";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import Seo from "./components/Seo";

import { 
  Box,
  Grid,
  Container,
} from '@mui/material';

import works from "./data/portafolio.json";
import experiences from "./data/experience.json";
function App() {
  return (
    <>
      <Seo />
      <NavBar />
      <Container maxWidth="lg"> 
      <hr id="ABOUT ME" />
      <Title title="ABOUT ME"  />
      <AboutMe />
      <hr id="PROJECTS" />
      <Title title="PROJECTS"  />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} justify="center">
            {works.map((work, index) => (
              <CardWork
                work={work}
                key={index}
              />
            ))}
          </Grid>
        </Box>
        <hr id="EXPERIENCE" />
        <Title title="EXPERIENCE"/>

        <TabledExperience
          experiences={experiences}
        />
        <hr  id="CONTACT" />
        <Title title="CONTACT"/>
        <InformationContact />

        <hr id="My Courses" />
        <Title title="My Courses"/>
        <MyCourses />
        <hr id="SKILLS" />
        <Title title="SKILLS"/>
        <Skills />
      </Container>
      <Footer />
    </>
     
  );
}

export default App;
