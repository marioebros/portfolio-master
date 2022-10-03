import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A disciplined creative of 14-years, who is actively seeking to leverage
        a history of proven entrepreneurial & research expertise to pursue a
        career in Software Development. Driven by providing the best product
        possible and learning to do things the right way, coupled with a passion
        for learning & a stellar sense of integrity.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Let's Work
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
