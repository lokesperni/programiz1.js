import React from 'react';
import './Programming.css';

const technologies = [
  {name: 'Python', type: 'Programming Language', description: 'High-level language for web, data science, automation, AI/ML, and more'},
  {name: 'MySQL', type: 'Database', description: 'Storing structured data, backend databases'},
  {name: 'C++', type: 'Programming Language', description: 'System software, game development, high-performance apps'},
  {name: 'JavaScript', type: 'Programming Language', description: 'Frontend development, web apps, Node.js backend'},
  {name: 'Kotlin', type: 'Programming Language', description: 'Android apps, backend services, multiplatform apps'},
  {name: 'NumPy', type: 'Python Library', description: 'Numerical computing, arrays, matrix operations'},
  {name: 'OpenJDK', type: 'Java Development Kit', description: 'Compile and run Java applications'},
  {name: 'Pandas', type: 'Python Library', description: 'Data manipulation and analysis, DataFrames'},
  {name: 'R', type: 'Programming Language', description: 'Statistical analysis, Data Science, Machine Learning'},
  {name: 'Ruby', type: 'Programming Language', description: 'Web development (Rails), scripting'},
  {name: 'Rust', type: 'Programming Language', description: 'Systems programming, safe concurrency, WebAssembly'},
  {name: 'TypeScript', type: 'Programming Language', description: 'Large-scale frontend apps, safer JS with types'},
  {name: 'CSS3', type: 'Styling Language', description: 'Web styling, layouts, animations'},
  {name: 'Go', type: 'Programming Language', description: 'Backend, Microservices, Cloud, High concurrency apps'},
  {name: 'Swift', type: 'Programming Language', description: 'iOS/macOS app development'},
  {name: 'PyCharm', type: 'IDE', description: 'Python development, debugging, testing'},
  {name: 'C', type: 'Programming Language', description: 'System programming, embedded systems, OS development'},
  {name: 'HTML5', type: 'Markup Language', description: 'Webpage structure, multimedia integration'},
  {name: 'FA Code', type: 'Icon Library', description: 'Add vector icons and social logos in web apps'}
];

const Programming = () => {
  return (
    <div className='programming-container'>
      <h1>Programming Technologies</h1>
      <div className='tech-grid'>
        {technologies.map((tech, index) => (
          <div key={index} className='tech-card'>
            <h2>{tech.name}</h2>
            <p><strong>Type:</strong> {tech.type}</p>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programming;