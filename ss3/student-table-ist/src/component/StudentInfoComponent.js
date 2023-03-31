import { Component } from "react";

const studentList = [
  {
    id: 1,
    name: "Alfreds Futterkiste",
    age: "19",
    address: "Germany",
  },
  {
    id: 2,
    name: "Centro comercial Moctezuma",
    age: "20",
    address: "Mexico",
  },
  {
    id: 3,
    name: "Ernst Handel",
    age: "21",
    address: "Austria",
  },
  {
    id: 4,
    name: "Island Trading",
    age: "22",
    address: "UK",
  },
  {
    id: 5,
    name: "Laughing Bacchus Winecellars",
    age: "12",
    address: "Canada",
  },
  {
    id: 6,
    name: "Magazzini Alimentari Riuniti",
    age: "19",
    address: "Italy",
  },
];

class StudentInfoComponent extends Component {
  render() {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
              <tr key={index}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default StudentInfoComponent;