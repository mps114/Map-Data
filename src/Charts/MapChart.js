import React from 'react';
import PropTypes from 'prop-types';
//import customWorld from '../data/CustomWorld.js';
//import myCountriesData from '../data/MyCountriesData.js';
//import Highcharts from 'highcharts/highmaps';

var Highcharts = require('highcharts/highmaps');

class MapChart extends React.Component {

	constructor(props) {
		super(props);

		const { pointFormat, dataColor, mapType, mapData, mapTitle, mapSubtitle, joinByVal } = this.props;
		

		this.state = {
			chart: {
        map: mapType,//object?
        borderWidth: 1
	    },

	    title: {
	        text: mapTitle,//string
	    },
	    
	    mapNavigation: {
	    		enabled: true
	    },

	    subtitle: {
	        text: mapSubtitle,//string
	    },

	    legend: {
	        enabled: false
	    },
	    colorAxis: {

	    },
	    series: [{
	      name: 'Country',
	      data: mapData,
	      joinBy: joinByVal,
	      dataLabels: {
		      enabled: true,
		      color: dataColor,//string
		      formatter: function () {
		          if (this.point.value) {
		              return this.point.name;
		          }
		      }
	      },
	      tooltip: {
	            headerFormat: '',
	            pointFormat: pointFormat,//`{point.name}`
	      }
			}]
		};
	}

	componentDidMount() {
		this.mapChart = Highcharts.mapChart(this.mapChartEl, this.state);
	}

	componentWillReceiveProps(nextProps) {
		this.mapChart.destroy();
		const { pointFormat, dataColor, mapType, mapData, joinByVal, mapTitle, mapSubtitle } = nextProps;
		this.setState({
			chart: {
				map: mapType,
			},
			title: {
				text: mapTitle,
			},
			subtitle: {
				text: mapSubtitle,
			},
			series: [{
				data: mapData,
				joinBy: joinByVal,
				dataLabels: {
					color: dataColor
				},
				tooltip: {
					pointFormat: pointFormat,
				},	
			}]
		});
	}

	componentDidUpdate() {
		this.mapChart = Highcharts.mapChart(this.mapChartEl, this.state);
	}

	componentWillUnmount() {
		if (this.mapChart) {
			this.mapChart.destroy();
		}
	}

	render() {
		return <div ref={(el) => { this.mapChartEl = el; }} />;
	}
}

MapChart.propTypes = {
	mapData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MapChart;