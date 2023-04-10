import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";

type CovidData = {
    Date: string;
    Confirmed: number;
    Active: number;
    Recovered: number;
    Deaths: number;
};

const Home =({ covidData }: { covidData: CovidData[] }) =>{


    return (
      <div className={styles.container}>
          <main className={styles.main}>
              <h1>Vietnam COVID-19 Information</h1>
              <table className={styles.table}>
                  <thead>
                  <tr className={styles.tr}>
                      <th className={styles.th}>Date</th>
                      <th className={styles.th}>Confirmed</th>
                      <th className={styles.th}>Active</th>
                      <th className={styles.th}>Recovered</th>
                      <th className={styles.th}>Deaths</th>
                  </tr>
                  </thead>
                  <tbody>
                  {covidData.map((data,index) => (
                      <tr className={styles.tr} key={index}>
                          <td className={styles.td}>{data.Date}</td>
                          <td className={styles.td}>{data.Confirmed}</td>
                          <td className={styles.td}>{data.Active}</td>
                          <td className={styles.td}>{data.Recovered}</td>
                          <td className={styles.td}>{data.Deaths}</td>

                      </tr>
                  ))}
                  </tbody>
              </table>
          </main>
      </div>
  )
}
export async function getStaticProps() {
    const response = await fetch('https://api.covid19api.com/total/country/vietnam');
    const data = await response.json();

    return {
        props: {
            covidData: data,
        },
    };
}

export default Home