import ReactDOM from "react-dom/client";
import './index.css';
const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
<table class="table table-striped">
<thead>
    <tr>
      <th scope="col">Company</th>
      <th scope="col">Contact</th>
      <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody>
  {students.map(student => (
          <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        ))}
  </tbody>
</table>
)
