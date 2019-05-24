// Link to MOIA's annual report
$('#report-button').on('click', function() {
alert('https://www1.nyc.gov/site/immigrants/about/annual-report.page');
});
// Add map of Queens
mapboxgl.accessToken = 'pk.eyJ1IjoibWVhZ2FuYmVlIiwiYSI6ImNqdWQ5NWNjYTBmZTQzeXJ5YTdoZmo2ZnIifQ.2QCTx5st31pRF3nT1mZDjQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-73.843549,40.717157],
zoom: 11

});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Community Based Services');

var el = document.createElement('div');
el.className = 'marker';
// Add markers for community services
new mapboxgl.Marker(el)
  .setLngLat([-73.8523193, 40.7362691])
  .setPopup(popup)
  .addTo(map);

  var communityCenters = [
    {
      name: "Forest Hills Community Center",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.8523193,
      lat: 40.7362691
    },
    {
      name: "Pomonok Community Center",
      services: "Housing, Social Services, Career Services",
      lng: -73.8165482,
      lat: 40.7349421
    },
    {
      name: "Kew Gardens",
      services: "Housing, Social Services, Career Services",
      lng: -73.8334202,
      lat: 40.713654
    },
    {
      name: "Sunnyside Community Services",
      services: "Language Classes, Career Services, Youth Programs",
      lng: -73.9277968,
      lat: 40.7451662
    },
    {
      name: "Commonpoint Queens",
      services: "Youth Programs, Social Services",
      lng: -73.8492869,
      lat: 40.728738
    },
    {
      name: "Immigration Advocacy Services",
      services: "Legal Services, Citizenship",
      lng: -73.9155134,
      lat: 40.7690691
    },
    {
      name: "ANSOB Center for Refugees",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.9160424,
      lat: 40.7648236
    },
    {
      name: "Queens Library",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.7969024,
      lat: 40.7077915
    },
    {
      name: "Catholic Migration Services",
      services: "Legal Services, Citizenship",
      lng: -73.9195764,
      lat: 40.7434193
    },
    {
      name: "Emerald Isle Immigration Center",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services, Career Services",
      lng: -73.9069004,
      lat: 40.7450074
    },
    {
      name: "Make the Road NY",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.8763532,
      lat: 40.7484547
    }
  ]

communityCenters.forEach(function(centerData) {

  var el = document.createElement('div');
  el.className = 'marker';
// Add popups to markers that show the name of community organizations and the types of services offered
  new mapboxgl.Marker(el)
    .setLngLat([centerData.lng, centerData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setHTML(`
        <h5>${centerData.name}</h5>
        <h6> Services: ${centerData.services}</h6>
      `))
    .addTo(map);
})

map.on('load', function () {

  map.addSource('queens-NTA', {
     type: 'geojson',
     data: './data/queens-NTA.geojson',
   });
// Add queens neighbhorhood outline to map using NYC Planning Neighbhorhood Names data. NTA is used in naming because it's shorter and easier, but it's only the neighborhood name. I removed all other boroughs from the original data so it just shows neighborhoods in Queens.
  map.addLayer({
      id: 'NTA-fill',
      type: 'fill',
      paint: {
        'fill-color': '#db4551',
        'fill-opacity': 0.3,
       },
         layout: {},
      source: {
          type: "geojson",
          'data': {
              type: "Feature",
              properties: {},
              geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                        [
                          -73.90949249267578,
                          40.791459266015764
                        ],
                        [
                          -73.92562866210938,
                          40.77846164090355
                        ],
                        [
                          -73.9376449584961,
                          40.77664177039938
                        ],
                        [
                          -73.96099090576172,
                          40.73841297394456
                        ],
                        [
                          -73.9445114135742,
                          40.73737242735457
                        ],
                        [
                          -73.92940521240234,
                          40.72878729696505
                        ],
                        [
                          -73.92356872558594,
                          40.71655807771725
                        ],
                        [
                          -73.8614273071289,
                          40.68662604564053
                        ],
                        [
                          -73.85250091552734,
                          40.64548010364599
                        ],
                        [
                          -73.73645782470703,
                          40.65016889724004
                        ],
                        [
                          -73.7234115600586,
                          40.72696606629052
                        ],
                        [
                          -73.74641418457031,
                          40.78210123234386
                        ],
                        [
                          -73.7563705444336,
                          40.767541670057234
                        ],
                        [
                          -73.77628326416016,
                          40.79717741518766
                        ],
                        [
                          -73.82022857666016,
                          40.80107587088608
                        ],
                        [
                          -73.84632110595703,
                          40.795617968801466
                        ],
                        [
                          -73.88614654541016,
                          40.780021490225984
                        ],
                        [
                          -73.90949249267578,
                          40.791459266015764
                        ]
                      ]
                  ]
              }
          }
         }
       });
});
