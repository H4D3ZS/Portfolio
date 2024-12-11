import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Rolando H Ferrer Jr</span>
              </p>
              <h2 className="about__heading">Sr. Software Engineer</h2>
              <div className="about__info">
                <PText>I'm From Philipines. Coding is my Passion</PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem
                title="FrontEnd"
                items={['ReactJS', 'Angular', 'VueJS']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Laravel', 'Firebase', 'PHP', 'NodeJS']}
              />
              <AboutInfoItem
                title="Mobile Dev"
                items={['React-Native', 'Flutter-Framework', 'IONIC']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <AboutInfoItem
                title="2024"
                items={['iOS Mobile Developer at Titan Technologies']}
              />
              <AboutInfoItem
                title="2021-2024"
                items={[
                  'WEB3 Full-Stack Software Engineer at Success Academy Learning Solutions LLC',
                ]}
              />
              <AboutInfoItem title="2023" items={['Intern at Avodah']} />
              <AboutInfoItem
                title="2021-2022"
                items={[
                  'Sr. Software Engineer at Guava Outsourcing Solutions Inc.',
                ]}
              />
              <AboutInfoItem
                title="2020-2021"
                items={['Pentester at 8Layer Technologies']}
              />
              <AboutInfoItem
                title="2020-2021"
                items={[
                  'Sr. Software Engineer at URCLASSROOM COMMUNITY CORPORATION',
                ]}
              />
              <AboutInfoItem
                title="2020"
                items={['Ethical hacker at BOXTYPD TECHNOLOGIES']}
              />
              <AboutInfoItem title="2019-2020" items={['CTO at Paytrixx']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
