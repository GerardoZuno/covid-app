import styles from './App.module.css';
import React from 'react'
import {Cards} from './components/Cards/Cards'
import Chart from './components/Chars/Chart'
import {CountryPicker} from './components/CountryPicker/CountryPicker'
import {fetchData} from './api/index'

class App extends React.Component {
  state = {
    data: {},
  }
  
 async componentDidMount () {
    const fetch = await fetchData()

    this.setState({data: fetch})
  }

  render(){ 
  const { data } = this.state 
    
  return (
    <div className={styles.container}>
      <Cards  data={data}/>
      <Chart data={data}/>
      <CountryPicker />
    </div>
  )
 }
}

export default App
