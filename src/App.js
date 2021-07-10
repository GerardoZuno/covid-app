import styles from './App.module.css';
import React from 'react'
import {Cards} from './components/Cards/Cards'
import Chart from './components/Chars/Chart'
import {CountryPicker} from './components/CountryPicker/CountryPicker'
import {fetchData} from './api/index'
import coronaImage from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  
 async componentDidMount () {
    const fetch = await fetchData()

    this.setState({data: fetch})
  }

 handleCountryChange = async (country) => {
   const fetchedData = await fetchData(country)
   this.setState({data: fetchedData, country: country})

     //1 step fetch data
   //2 set state
 }

  render(){ 
  const { data, country } = this.state 
    
  return (

    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="logo"/>
      <Cards  data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
 }
}

export default App
