/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('getting-started-1.html', language)}>Getting Started</Button>
            <Button href='https://github.com/nicklewanowicz/pwa-coach'>Github</Button>
            <Button href={docUrl('doc2.html', language)}>Documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Available on anything with a modern web browser... so basically everything',
        image: imgUrl('PWA_crossplatform.svg'),
        imageAlign: 'top',
        title: 'Cross-platform',
      },
      {
        content: 'Providing a near-native experience in a fraction of the size',
        image: imgUrl('PWA_fast.svg'),
        imageAlign: 'top',
        title: 'Fast',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>PWA tl;dr</h2>
    <MarkdownBlock>Native-like experiences on desktop or mobile which lead to a higher chance of recurring visits from a client.</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'With adoption from companies like Google, Facebook, Uber, Starbucks, and many more! There is no better time then the present to begin looking into PWAs. This can be tremendously difficult so our getting started section is meant to catalogue the best and most current resources to get a grasp on the big picture surounding this new technlogy. Checkout the "Getting Started" section for more...',
        image: imgUrl('getting_started.svg'),
        imageAlign: 'right',
        title: 'The Best Guides',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="docs">
    {[
      {
        content: 'Already familiar with PWAs? We also have spent time building a collection of innovative and robust libraries to empower you to build the best experience for your user in a timely manner. Checkout the "docs" section for more...',
        image: imgUrl('documentation.svg'),
        imageAlign: 'left',
        title: 'The Best Documentation',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="light">
    {[
      {
        content: 'PWA Coach would be nothing without a community of people with a common goal to permiate an understanding of progressive web experiences! We are a small community but would be stoked to have you coome along with us and contribute any resources you have made or know of to out knowledge base. Chek out the "contribute" section for more... ',
        image: imgUrl('contribute.svg'),
        imageAlign: 'right',
        title: 'The Best Community (soon)',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={imgUrl('showcase.svg')} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('blog')}>
          PWA Showcase
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
