import React, { Component } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
// import
// import SingleImageZoomViewer from 'react-native-single-image-zoom-viewer'
import ImageZoom from 'react-native-image-pan-zoom';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <ImageZoom cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width}
          imageHeight={Dimensions.get('window').width * 4 / 5}>

          <Image style={{
            // position: 'absolute',
            width: Dimensions.get('window').width, height: Dimensions.get('window').width * 4 / 5
          }}
            source={{ uri: 'https://images.unsplash.com/photo-1627625598893-5cb20952f6fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80' }} />
          <Text style={{ position: 'absolute' }}>aaaa</Text>
        </ImageZoom>

      </View>
    );
  }
}

