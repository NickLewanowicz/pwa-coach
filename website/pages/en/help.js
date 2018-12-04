/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Help extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more using the [documentation on this site.](${docUrl(
          'getting-started-1.html',
          language,
        )})`,
        title: 'Browse Guides',
      },
      {
        content: 'Report issues with outdated documentation and submit changes [here](http://github.com/nicklewanowicz/pwa-coach).',
        title: 'Join the community',
      },
      {
        content: "Find out what's new with this project",
        title: 'Stay up to date',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Want to help?</h1>
            </header>
            <p>This project is maintained by a dedicated group of people.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
