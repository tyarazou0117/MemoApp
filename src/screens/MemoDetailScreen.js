import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component{
    render(){
      return(
          <View style={styles.container}>
            <View>
              <View style={styles.memoHeader}>
                <View>
                  <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
                  <Text style={styles.memoHeaderDate}>2020/05/03</Text>
                </View>
              </View>
          </View>
          <View style={styles.memoContents}>
              <Text>講座の内容</Text>
          </View>
          <CircleButton style={styles.editButton}>+</CircleButton>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
  },
  memoHeader:{
    height: 100,
    backgroundColor: '#172172',
    justifyContent:'center',
  },
  memoHeaderTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#172172',
  },
  memoHeaderDate:{
    fontSize: 12,
    color: '#ffff',
    backgroundColor: '#172172',

  },
  memoContents:{
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  editButton:{
    top: 80,
  },
});


export default MemoDetailScreen;
