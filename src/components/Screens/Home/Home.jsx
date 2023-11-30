import styles from './Home.module.css';
import Select from './Select/Select';


function Home() {

  return (
    <div className={styles.home}>
      <h1>My first Select here: </h1>
      <Select/>
    </div>
  );
}

export default Home;
