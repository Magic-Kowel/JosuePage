import React from "react";
import AboutMe from "./components/AboutMe";
import CardWork from "./components/CardWork";
import Acknowledgement from "./components/Acknowledgement";
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
import HerroPerfil from "./components/HerroPerfil";
function App() {
  return (
    <>
          <Seo />
          <NavBar />
          <Container maxWidth="md">
            <section>
              <HerroPerfil />
            </section>
            <section>
              <hr id="ABOUT ME" />
              <Title title="ABOUT ME"  />
              <AboutMe />
            </section>
            <main>
              <hr id="PROJECTS" />
              <Title title="PROJECTS"  />
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={3}  justify="center">
                    {works.map((work, index) => (
                      <CardWork
                        work={work}
                        key={index}
                      />
                    ))}
                  </Grid>
                </Box>
            </main>
            <section>
              <hr id="RECOGNITION" />
              <Title title="RECOGNITION"  />
              <Acknowledgement />
            </section>
            <section>
              <hr id="EXPERIENCE" />
              <Title title="EXPERIENCE"/>
              <TabledExperience
                experiences={experiences}
              />
            </section>
            <section>
              <hr  id="CONTACT" />
              <Title title="CONTACT"/>
              <InformationContact />
            </section>
            <section>
              <hr id="My Courses" />
              <Title title="My Courses"/>
              <MyCourses />
            </section>
            <section>
              <hr id="SKILLS" />
              <Title title="SKILLS"/>
              <Skills />
            </section>
          </Container>
          <Footer />
        </>
  );
 
}

export default App;
