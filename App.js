import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.appbar}>
      <View>
        <Text style={styles.appbarTitle}>MemoT</Text>
      </View>
    </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/05/02</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/05/02</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/05/02</Text>
        </View>
      </View>

      <View style={styles.memoaddBottom}>
        <Text style={styles.memoaddTitle}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
  },
  memoaddBottom:{
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
    memoaddTitle:{
    fontSize:24,
    lineHeight:24,
    color:'#fff',
  },
  memoList:{
    backgroundColor:'#eee',
    width:'100%',
    flex:1,
  },
  memoListItem:{
    padding:16,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  memoTitle:{
    fontSize:18,
    marginBottom:4,
  },
  memoDate: {
    fontSize:12,
    marginBottom:4,
  },
  appbar:{
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    height:78,
    paddingTop:30,
    backgroundColor:'#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'#000',
    shadowOffset:{ width:0,height:0},
    shadowOpacity: 3,
    shadowRadius:3,
    zIndex:10,
  },
  appbarTitle:{
    color:'#fff',
    fontSize:24,

  }
});
