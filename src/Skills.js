var React = require('react');

class Skills extends React.Component {
  render() {
    return (
      <div className='resume_section'>
        <h2 className='resume_title'>Skills</h2>
        <h3 className='skills_title'>Languages and Frameworks</h3>
          <ul className='skills_section'>
            <li className='skills_item'>JavaScript</li>
            <li className='skills_item'>Java</li>
            <li className='skills_item'>HTML 5</li>
            <li className='skills_item'>CSS 3</li>
            <li className='skills_item'>SASS</li>
            <li className='skills_item'>Python</li>
            <li className='skills_item'>React</li>
            <li className='skills_item'>AngularJS</li>
            <li className='skills_item'>NodeJS</li>
            <li className='skills_item'>Webpack</li>
            <li className='skills_item'>Lodash</li>
          </ul>
        <h3 className='skills_title'>Tools and Platforms</h3>
        <ul className='skills_section'>
          <li className='skills_item'>Jenkins</li>
          <li className='skills_item'>New Relic</li>
          <li className='skills_item'>Cypress</li>
          <li className='skills_item'>Jest</li>
          <li className='skills_item'>Storybook</li>
          <li className='skills_item'>Grafana</li>
          <li className='skills_item'>Kubernetes</li>
        </ul>
      </div>
    )
  }
}

module.exports = Skills;
