import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component{
    render(){
      const { style }= this.props;
      return(
        <View style={[styles.circleButton,style]}>
            <Text style={styles.circleButtonTitle}>
                {this.props.children}
            </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  circleButton:{
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
    circleButtonTitle:{
    fontSize:24,
    lineHeight:24,
    color:'#fff',
  },
});

export default CircleButton;
