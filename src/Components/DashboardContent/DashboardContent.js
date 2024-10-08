import styles from './dashboardContent.module.scss';

const tableData = [
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
  { id: 3000, date: "May 9, 2024", name: "Leslie Alexander", event: "Bear Hug: Live in Concert", price: "$80.00" },
];

//Card data JSON
const cardData = [
  {
    title: "Total Revenue",
    value: "$2.6M",
    points: "+4.5%"
  },
  {
    title: "Total Users",
    value:  "$455",
    points: "-0.5%"
  },
  {
    title: "Total Sales",
    value:  "5888",
    points: "+4.5%"
  },
  {
    title: "Total Events",
    value:  "823067",
    points: "+21.2"
  }
];

export default function DashboardContent() {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.overviewGrid}>
        {cardData.map((card, index) => (
          <div className={styles.statCard} key={index} role="article" aria-labelledby={`card-${index}`} tabIndex={0} >
            <h3 id={`card-${index}`}>{card.title}</h3>
            <p>{card.value}</p>
            <span className={parseFloat(card.points) > 0 ? styles.increase : styles.decrease}>
              {card.points}
            </span> from last week
          </div>
        ))}
      </div>

      <div className={styles.tableContainer}>
        <table aria-labelledby="recent-orders" role="table">
          <thead>
            <tr>
              <th scope="col">Order number</th>
              <th scope="col">Purchase date</th>
              <th scope="col">Customer</th>
              <th scope="col">Event</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.event}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
  