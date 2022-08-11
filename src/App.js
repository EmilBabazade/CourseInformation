const Header = ({course}) => (
  <div>
    <h1>{course}</h1>
  </div>
);

const Part = ({part, exercise}) => (
  <p>
    {part} {exercise}
  </p>
);

const Content = ({content}) => (
  <div>
    {content.map(c => <Part key={c.id} part={c.name} exercise={c.exercises}/>)}
  </div>
);

const Total = ({totalExercises}) => (
  <h4>
    Total of {totalExercises} exercises
  </h4>
);

const Course = ({course}) => (
  <div>
    <Header course={course.name} />
    <Content content={course.parts}/>
    <Total totalExercises={course.parts.map(p => p.exercises ).reduce((p, c) => p + c, 0)} />
  </div>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(c => <Course key={c.id} course={c} />)}
    </div>
  )
}

export default App
