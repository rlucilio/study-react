import { useDispatch, useSelector } from 'react-redux';

export default function CourseList() {
  const courses = useSelector((state) => state);
  const dispatch = useDispatch();
  function addCourse() {
    dispatch({ type: 'ADD_COURSE', name: 'ts' });
  }

  return (
    <>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

      <button onClick={addCourse}>Adicionar curso</button>
    </>
  );
}
