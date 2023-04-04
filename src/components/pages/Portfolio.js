import React from 'react';
const portfolioItems = [
  {
    title: 'Tech Hub',
    imageLink: 'https://user-images.githubusercontent.com/115959478/228367988-969facac-c5e7-4476-ab7a-bfd474c8bc6c.png',
    appLink: 'https://warm-forest-21323.herokuapp.com/',
    repoLink: 'https://github.com/chrisbchickin/Tech-hub'
  }, {
    title: 'Employee Manager',
    imageLink: 'https://user-images.githubusercontent.com/115959478/227032998-fc24d4b0-f5b3-4c89-a646-2f00791f35ee.png',
    appLink: '',
    repoLink: 'https://github.com/chrisbchickin/employee-manager'
  }, {
    title: 'Weather Dashboard',
    imageLink: 'https://user-images.githubusercontent.com/115959478/205831305-84ca1d5f-9596-40ef-8d45-e9a8b215664e.png',
    appLink: 'https://chrisbchickin.github.io/Weather-Dashboard/',
    repoLink: 'https://github.com/chrisbchickin/Weather-Dashboard'
  }, {
    title: 'First App',
    imageLink: '',
    appLink: '',
    repoLink: ''
  }, {
    title: 'First App',
    imageLink: '',
    appLink: '',
    repoLink: ''
  }, {
    title: 'First App',
    imageLink: '',
    appLink: '',
    repoLink: ''
  }
]
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul>
        {portfolioItems.map(item => {
          return (
            <li>
              <p>{item.title}</p>
              <br /><img src={item.imageLink} alt={item.title} style={{width:'150px'}} /> 
              <br /><a href={item.appLink}>Deployed App</a>
              <br /><a href={item.repoLink}>Repository</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
