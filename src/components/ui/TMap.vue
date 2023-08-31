<template>
  <!-- :cluster="{ options: { styles: clusterStyle } }" -->
  <GMap
    ref="gMap"
    class="h-full"
    :center="{ lat: locations[0].lat, lng: locations[0].lng }"
    :options="{
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: true,
      gestureHandling: 'cooperative',
      styles: mapStyle
    }"
    :zoom="15"
    @bounds_changed="checkForMarkers"
  >
    <GMapMarker
      v-for="location in locations"
      :key="location.id"
      ref="gMarker"
      :position="{ lat: location.lat, lng: location.lng }"
      @click="currentLocation = location"
    >
      <GMapInfoWindow
        class="font-poppins"
        :options="{ maxWidth: 200 }"
      >
        <p class="mb-2 text-center text-lg font-semibold text-primary">{{ location.name }}</p>
        <p>Av. Pedro Ludovico</p>
        <p>Residencial Reny Cury</p>
        <p>Anápolis - GO, 75131-457</p>
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>

<script>
export default {
  name: 'TMap',
  data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: '',
      locations: [
        {
          lat: -16.373289,
          lng: -48.982065,
          name: 'Code Tower'
        }
      ],
      pins: {
        // selected:
        //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAABuElEQVQ4ja1UwXHCQAxcrgHSAdBBUgF2BaEDoAP7HT/88B93gOkAKjjogA6COyAVOCNmBRdxmGQmO3PD+SQtOt1Kg67rYJEWeAEw40oADOnyBWAPYCvLVzjb2DvCtEAGoAxIHkHIS1+hDu3OkDUAViRrAeQA3nyFgSzZ86ylz4ox9xnSMOd5bv85UpaMfy7Y+AqLa4Y0KtnyGZmAPkt+zsmBQfLRyQOceIWnmfVkKjUdC6Gkupa6+Apj4/zKB3rn0Y4PcTR+ktBIMnaUhqCOkO0DMnC/py2Exs4cdQYGh1DpHABMuA48K42vxiZO9WavEWS28BVOsmRvbDCxQ4d/hqNIEanLjr9NWmAsS/bGBhPbCqGmm+AnSkphCuCTa6otZ3w19ujY6IIsUpfEZCP7JFJvjd1aYUuXNPgD0gKq44uwHUeQ6qjk6PoV6KvXr4VLX7nm44yswJ+gZkyrcY71OgcauzZ6H8xAWeiwverQVxe15/xcsTZR0KajK2fsBbGJ3ZhR1hi7PgLCOai46xQ6bPi5Toub5rh/SBbN8EGmqkXt4ShZL2HkeoperfYSklT6VKWURbrkBgDfdPK74qE/fbUAAAAASUVORK5CYII=',
        // notSelected:
        //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII=',
      },
      // clusterStyle: [
      //   {
      //     url:
      //       'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
      //     width: 56,
      //     height: 56,
      //     textColor: '#fff',
      //   },
      // ],
      mapStyle: [
        // {
        //   featureType: 'all',
        //   elementType: 'labels.text.fill',
        //   stylers: [
        //     {
        //       color: '#ffffff',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'all',
        //   elementType: 'labels.text.stroke',
        //   stylers: [
        //     {
        //       visibility: 'on',
        //     },
        //     {
        //       color: '#3e606f',
        //     },
        //     {
        //       weight: 2,
        //     },
        //     {
        //       gamma: 0.84,
        //     },
        //   ],
        // },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
        // {
        //   featureType: 'administrative',
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       weight: 0.6,
        //     },
        //     {
        //       color: '#313536',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'landscape',
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       color: 'var(--primary)',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'poi',
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       color: '#13876c',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'poi.attraction',
        //   elementType: 'geometry.stroke',
        //   stylers: [
        //     {
        //       color: '#f5e4e4',
        //     },
        //     {
        //       visibility: 'off',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'poi.attraction',
        //   elementType: 'labels',
        //   stylers: [
        //     {
        //       visibility: 'on',
        //     },
        //     {
        //       lightness: '14',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'poi.park',
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       color: '#13876c',
        //     },
        //     {
        //       visibility: 'simplified',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'road',
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       color: '#067372',
        //     },
        //     {
        //       lightness: '-20',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'road.highway',
        //   elementType: 'geometry.stroke',
        //   stylers: [
        //     {
        //       color: '#f2994a',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'road.highway',
        //   elementType: 'geometry.fill',
        //   stylers: [
        //     {
        //       color: '#f2ba4a',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'transit',
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       color: '#357374',
        //     },
        //   ],
        // },
        // {
        //   featureType: 'water',
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       color: '#004757',
        //     },
        //   ],
        // },
      ]
    }
  },
  methods: {
    returnToCenter() {
      this.$refs.gMap.map.setCenter(this.locations[0])
    },

    checkForMarkers() {
      this.locations.forEach((location, i) => {
        location.visible = this.$refs.gMap.map
          .getBounds()
          .contains(this.$refs.gMap.markers[i].getPosition())
      })

      this.locationsVisibleOnMap = this.locations
        .filter((l) => l.visible)
        .map((l) => l.name)
        .join(', ')
    }
  }
}
</script>
