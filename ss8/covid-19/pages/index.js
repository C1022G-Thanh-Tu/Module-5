import axios from "axios";

export const getStaticProps = async () => {
  const response = await axios.get("https://api.covid19api.com/total/country/vietnam");
  const data = response.data;
  return { props: { data } };
};

export const Home = ({ data }) => {
  return (
    <div>
      <h1>Thông tin COVID-19 tại Việt Nam</h1>
      <table>
        <thead>
          <tr>
            <th>Ngày thống kê</th>
            <th>Số ca được xác nhận</th>
            <th>Số ca đang điều trị</th>
            <th>Số ca đã khỏi</th>
            <th>Số ca tử vong</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Date}</td>
              <td>{item.Confirmed}</td>
              <td>{item.Active}</td>
              <td>{item.Recovered}</td>
              <td>{item.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
