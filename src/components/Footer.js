import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Rolando H Ferrer Jr</h1>
          <PText>
            A software developer to create website and mobile application.
            {/* I always make websites that have unique designs and also has a good
            performance rate. */}
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+63 9601016801',
                path: 'tel:+63 9601016801',
              },
              {
                title: 'cyberifritdev@gmail.com',
                path: 'mailto:cyberifritdev@gmail.com',
              },
              {
                title: 'General, Santos, City',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/arjayferrer02/',
              },
              {
                title: 'Github',
                path: 'https://github.com/H4D3ZS/',
              },
              {
                title: 'Upwork Freelancer Profile',
                path: 'https://www.upwork.com/freelancers/~01ee7ac2b089e48327',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2023 - Rolando H Ferrer Jr |
            <a target="_blank" rel="noreferrer" href="https://cyber-ifrit.com">
              CYBER-IFRIT
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
