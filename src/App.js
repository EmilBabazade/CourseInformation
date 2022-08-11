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
    {content.map((c,i ) => <Part key={i} part={c.name} exercise={c.exercises}/>)}
  </div>
);

const Total = ({totalExercises}) => (
  <p>
    Number of exercises {totalExercises}
  </p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts}/>
      <Total totalExercises={course.parts.map(p => p.exercises ).reduce((p, c) => p + c, 0)} />
    </div>
  )
}

export default App
