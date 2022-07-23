let header = () => {

    return `<img src="https://www.gymwolf.com/img/exercises.jpg" alt="error" />
    <h1>Exercises</h1>`
}


let list = () => {

    return `<div id="first">
    <ul>
      <li><a href="main.html">Exercise List</a></li>
      <li><a href="myexercise.html">My Exercise</a></li>
      <li id="third"><a href="workout.html">Workout Plan</a></li>
    </ul>
  </div>
  <div>
    <a
      ><button>
        <h1>+</h1>
        New workout plan
      </button></a
    >
  </div>`
}

export {header,list};