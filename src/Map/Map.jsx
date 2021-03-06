import React from 'react';
import mapboxgl from 'mapbox-gl';

export class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoieW9rYWlrYWkiLCJhIjoiY2tsdHhqMGhlMWQycDJ2bGxvNGUwMmh2ZyJ9.Vo58wzn80kNs2Hd3Elh2bA'

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [33.432, 47.900],
      zoom: 11,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <>
        <div className='map-wrapper'>
          <div data-testid='map' className='map' ref={this.mapContainer} />
        </div>
      </>
    );
  }
}