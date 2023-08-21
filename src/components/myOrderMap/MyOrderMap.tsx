import React, {LegacyRef, useRef} from 'react';
import {Platform, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import MapView, {Camera, Marker} from 'react-native-maps';
import Bar from '../bar';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type MyOrderMapProps = {};

const MyOrderMap = ({route}: MyOrderMapProps) => {
  const DEFAULT_MAP_SIZE: number = 25;
  const map: LegacyRef<MapView> = useRef(null);
  const {address} = route.params;
  const navigation = useNavigation();

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
        isCard={true}
        navigation={navigation}
      />
      <View style={styles.container}>
        <MapView
          ref={map}
          style={styles.map}
          zoomEnabled={true}
          zoomControlEnabled={true}
          zoomTapEnabled={true}
          maxZoomLevel={DEFAULT_MAP_SIZE}
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
