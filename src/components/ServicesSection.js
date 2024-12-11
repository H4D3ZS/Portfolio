import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What can i do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Front-End Design"
            desc="Creating High-Quality Optimized Beautiful Clean Website Design."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Back-End Dev"
            desc="Creating High-Performance Quality Functional Logic To Front-End Code"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Mobile Development"
            desc="Creating Cross-Platform Application With Beautiful Clean Designs"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
