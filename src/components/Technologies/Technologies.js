import React from "react";
import {
  DiDigitalOcean,
  DiFirebase,
  DiGulp,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a variety of Technologies in the Web Development world,
      thus far. From Back-End to Blockchain!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js <br />
            JavaScript <br />
            HTML5 <br />
            CSS <br />
            NPM <br />
            Flutter <br />
            CSS Tailwind <br />
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases <br />
            PHP <br />
            Java <br />
            SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGulp size="3rem" />
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity <br />
            Stellar <br />
            Ethereum <br />
            Smart Contracts <br />
            Cryptography
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
