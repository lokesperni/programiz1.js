import React from "react";
import "./python.css";

export default function PythonRoadmap() {
  return (
    <div className="roadmap-container">
      <h1 className="main-title">🐍 FULL PYTHON ROADMAP</h1>

      <section>
        <h2>Prerequisites</h2>
        <p>You do not need prior programming experience.</p>
        <ul>
          <li>Using a computer</li>
          <li>Installing software</li>
          <li>Basic math/logic</li>
          <li>Problem-solving mindset</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Python Basics (FOUNDATION LEVEL)</h2>
        <h3>Installing & Setup</h3>
        <p>You must install Python, an IDE, pip, and virtual environments.</p>

        <pre>{`python -m venv env
source env/bin/activate  (Mac/Linux)
env\\Scripts\\activate     (Windows)`}</pre>
      </section>

      <hr />

      <section>
        <h3>Python Syntax & Basic Concepts</h3>
        <ul>
          <li>Printing output</li>
        </ul>

        <pre>{`print("Hello Python")`}</pre>
      </section>

      <hr />

      <section>
        <h3>Operators</h3>
        <ul>
          <li>Arithmetic</li>
          <li>Comparison</li>
          <li>Logical</li>
          <li>Assignment</li>
          <li>Membership</li>
        </ul>
      </section>

      <hr />

      <section>
        <h3>Control Flow</h3>
        <ul>
          <li>If / Elif / Else</li>
          <li>For & While Loops</li>
          <li>Break / Continue / Pass</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Data Structures</h2>
        <ul>
          <li>Lists</li>
          <li>Tuples</li>
          <li>Dictionaries</li>
          <li>Sets</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Functions</h2>

        <pre>{`def greet(name):
    return "Hello " + name`}</pre>
      </section>

      <hr />

      <section>
        <h2>File Handling</h2>

        <pre>{`with open("data.txt", "r") as f:
    content = f.read()`}</pre>
      </section>

      <hr />

      <section>
        <h2>Error Handling</h2>
        <p>Learn try-except, finally, and raising exceptions.</p>
      </section>

      <hr />

      <section>
        <h2>Modules & Packages</h2>
        <ul>
          <li>Creating modules</li>
          <li>Importing</li>
          <li>Using standard libraries</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Object-Oriented Programming</h2>
        <ul>
          <li>Classes & Objects</li>
          <li>OOP Pillars</li>
          <li>Special Methods</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Intermediate Python</h2>
        <ul>
          <li>Iterators</li>
          <li>Generators</li>
          <li>Decorators</li>
          <li>Comprehensions</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Databases</h2>

        <pre>{`import sqlite3
conn = sqlite3.connect("db.sqlite")`}</pre>
      </section>

      <hr />

      <section>
        <h2>Python for Web Development</h2>
        <ul>
          <li>Flask</li>
          <li>FastAPI</li>
          <li>Django</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Python for Automation</h2>
        <ul>
          <li>OS Automation</li>
          <li>Web Scraping</li>
          <li>Scripting</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Python for Data Science</h2>
        <ul>
          <li>NumPy</li>
          <li>Pandas</li>
          <li>Matplotlib</li>
          <li>SciPy</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Python for Machine Learning</h2>
        <ul>
          <li>Scikit-Learn</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Python for Cybersecurity</h2>
        <p>Learn networking, automation, and cryptography.</p>
      </section>

      <hr />

      <section>
        <h2>Python for Game Development</h2>
        <p>Using Pygame or Godot.</p>
      </section>

      <hr />

      <section>
        <h2>Advanced Python</h2>
        <ul>
          <li>Multithreading</li>
          <li>AsyncIO</li>
          <li>Design Patterns</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Tools Every Python Developer Should Know</h2>
        <ul>
          <li>Git & GitHub</li>
          <li>Docker</li>
          <li>pipenv / Poetry</li>
          <li>pytest</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Beginner: Calculator, To-do app</li>
          <li>Intermediate: Blog API, Weather app</li>
          <li>Advanced: ML system, Full-stack app</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Career Paths</h2>
        <ul>
          <li>Backend Developer</li>
          <li>Data Scientist</li>
          <li>ML Engineer</li>
          <li>Automation Engineer</li>
        </ul>
      </section>
    </div>
  );
}