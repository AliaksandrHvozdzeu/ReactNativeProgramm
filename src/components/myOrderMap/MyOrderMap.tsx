import React, {LegacyRef, useRef, useState} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import MapView, {Camera, Marker} from 'react-native-maps';
import Bar from '../bar';
import {Icon} from 'react-native-elements';

type myOrderMapProps = {
  route: any;
  navigation: any;
};

const MyOrderMap = ({route, navigation}: myOrderMapProps) => {
  const [mapSize, setMapSize] = useState(25);
  const map: LegacyRef<MapView> = useRef(null);
  const {address} = route.params;

  const shadowStyles = Platform.select({
    ios: {
      shadowColor: COLORS.neutral_700,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
    android: {
      shadowColor: COLORS.neutral_700,
      shadowRadius: 4,
      elevation: 10,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
  });

  const mapViewStyles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 'auto',
      width: 'auto',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  const onMapPlusSize = () => {
    map.current?.getCamera().then((cam: Camera) => {
      if (Platform.OS === 'android') {
        cam.zoom += 1;
      } else {
        cam.altitude /= 2;
      }
      map.current?.animateCamera(cam);
    });
  };

  const onMapMinusSize = () => {
    map.current?.getCamera().then((cam: Camera) => {
      if (Platform.OS === 'android') {
        cam.zoom -= 1;
      } else {
        cam.altitude *= 2;
      }
      map.current?.animateCamera(cam);
    });
  };

  return (
    <View style={styles.centeredView}>
      <Bar
        text="Shipping address"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={true}
        navigation={navigation}
      />
      <View style={mapViewStyles.container}>
        <MapView
          ref={map}
          style={mapViewStyles.map}
          zoomEnabled={true}
          zoomControlEnabled={true}
          zoomTapEnabled={true}
          maxZoomLevel={mapSize}
          rotateEnabled={true}
          loadingEnabled={true}
          initialRegion={{
            latitude: address.latitude,
            longitude: address.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: address.latitude,
              longitude: address.longitude,
            }}
            title="Shipping address"
            description={address.address}
          />
        </MapView>
        <View style={styles.mapPlusButton}>
          <Icon
            style={styles.mapTitleWhiteButton}
            onPress={onMapPlusSize}
            type="font-awesome"
            name="plus"
            color={COLORS.neutral_500}
          />
        </View>
        <View style={styles.mapMinusButton}>
          <Icon
            style={styles.mapTitleBlueButton}
            onPress={onMapMinusSize}
            type="font-awesome"
            name="minus"
            color={COLORS.neutral_100}
          />
        </View>
      </View>
    </View>
  );
};

export default MyOrderMap;
