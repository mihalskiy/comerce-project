import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressiveImage from '../components/ProgressiveImage';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading, ProjectSectionText, ProjectBackground, ProjectPriceTable, ProjectHeader
} from '../components/Project';
import { Media } from '../utils/StyleUtils';
import backgroundSpr from '../assets/spr-background.jpg';
import backgroundSprLarge from '../assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '../assets/spr-background-placeholder.jpg';
import imageSprBuilder from '../assets/spr-builder.png';
import imageSprBuilderLarge from '../assets/spr-builder-large.png';
import imageSprBuilderPlaceholder from '../assets/spr-builder-placeholder.png';
import './price.css';

const prerender = window.location.port === '45678';

const title = 'АКТУАЛЬНЫЕ ЦЕНЫ';
const description = 'Наши цены — адекватные и умеренные. Все оплаты мы разбиваем на 3 этапа, это удобно и доступно. Вы можете получить очень качественный сайт на основе готового решения, с уникальным дизайном по цене от 13000 грн.';
const roles = [
  'Простой',
  'Стандарт',
  'Лучший',
];

const ProjectSPR = ({ status }) => (
  <React.Fragment>
    <ScrollToTop status={status} />
    <Helmet>
      <title>{`Projects | ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
    <ProjectContainer>
      <ProjectBackground
        srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
        placeholder={backgroundSprPlaceholder}
        entered={!prerender}
      />
      <ProjectHeader
        title={title}
        description={description}
        url="/contact"
        roles={roles}
      />
      <ProjectSection>
        <ProjectSectionContent>
           <ProjectPriceTable
               name={'asdfad'}
               currency={'$'}
               price={'29'}
               cent={'99'}
               title={'sdgfsdg'}
               fields={roles}
           />
        </ProjectSectionContent>
      </ProjectSection>
      <ProjectSection>
        {/*<ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>*/}
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </React.Fragment>
);

export default ProjectSPR;