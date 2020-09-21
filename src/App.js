import React from 'react';
import {Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import covidImage from './images/covid-19.jpg'
import heartImage from './images/heart.jpg'
import covidGif from './images/Coronavirus.gif'
import StatePicker from "./components/statePicker/statePicker";


class App extends React.Component {

    state = {
        displayData: {},
        data: {},
        country: '',
        stateName: '',
        loading: false
    };

    async componentDidMount() {
        this.setState({loading: true});
        const fethedData = await fetchData();
        console.log(fethedData);
        this.setState({data: fethedData, displayData: fethedData, loading: false});
    }

    handleCountryChange = async (country) => {
        this.setState({loading: true});
        const fethedData = await fetchData(country);
        console.log('country with state data', fethedData);
        this.setState({data: fethedData, displayData: fethedData, country, stateName: '', loading: false});
    }
    handleStateChange = (state) => {
        this.setState({loading: true});
        const data = this.state.data.stateData.find((sData) => {
            return sData.provinceState === state;
        });
        if (data) {
            const dData = {
                confirmed: {
                    value: data.confirmed
                },
                recovered: {
                    value: data.recovered
                },
                deaths: {
                    value: data.deaths
                },
                active: {
                    value: data.active
                },
                lastUpdate: data.lastUpdate
            };
            this.setState({
                displayData: dData,
                stateName: state,
                loading: false
            })
        } else {
            this.setState({
                displayData: this.state.data,
                stateName: '',
                loading: false
            })
        }
    };

    getStateOptions = () => {
        return this.state.data.stateData.map((state) => {
            return state.provinceState;
        })
    };

    render() {
        const {displayData,data, country, stateName, loading} = this.state;
        return (
        <div>
            <div style={{display:'flex'}}>
                <div className={styles.appbar}>
                    <img className={styles.image} src={covidImage} alt="imdage"/>
                </div>
                <img className={styles.gif}   src={covidGif} alt="loading..."/></div>


            <div className={styles.container}>

                {loading? <div className={styles.loader}><img src={covidGif} alt="loading..."/></div>:
                    <div className={styles.container}>
                    <Cards data={displayData} stateName={stateName}/>
                    <div style={{display: 'flex'}}>
                        <CountryPicker value={country} handleCountryChange={this.handleCountryChange}/>
                        {country && data && data.stateData.length > 1 &&
                        <div style={{marginLeft: 20}}><StatePicker value={stateName} options={this.getStateOptions()}
                                                                   handleStateChange={this.handleStateChange}/></div>}
                    </div>
                    <Charts data={displayData} country={country} stateName={stateName}/></div>}
                <div className={styles.footer}>Last Updated {new Date(displayData?displayData.lastUpdate:'').toDateString()} by <img
                    className={styles.heartImage} src={heartImage} alt="heart"/> @ Ashish Kumar
                </div>
            </div>
        </div>

        );
    }

}

export default App;
