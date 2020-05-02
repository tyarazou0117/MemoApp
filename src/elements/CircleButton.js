import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component{
    render(){
      return(
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonTitle}>
                {this.props.children}
            </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  circleBotton:{
    position:'absolute',
    bottom:32,
    right:32,
    width:48,
    height:48,
    backgroundColor: '#E31676',
    borderRadius:48,
    justifyContent:'center',
    alignItems:'center',
  },
    circleBottonTitle:{
    fontSize:24,
    lineHeight:24,
    color:'#fff',
  },
});

export default CircleButton;
