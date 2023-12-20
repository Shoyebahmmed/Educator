import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';



export default function Post_Bottom_Bar() {
  const [num_of_likes, setNumOfLikes] = useState(54);
  const [num_of_dislikes, setNumOfDislikes] = useState(8);
  const [num_of_comm, setNumOfComm] = useState(21);

  const [is_like, setIsLike] = useState(false);
  const [is_dislike, setIsDislike] = useState(false);
  const [is_comm, setIsComm] = useState(false);



  return (
    <View style={styles.container}>
      <View style={[styles.options, {borderRightWidth: 1, borderRightColor: '#cccccc'}]}>
        <TouchableOpacity onPress={() => setIsLike(!is_like)} style={[styles.optRow, {borderLeftWidth: 0, borderLeftColor: '#fff'}]}>
          {is_like ? (<AntDesign name="like1" size={24} color="#624DF6" />) : (<AntDesign name="like2" size={24} color="#cccccc" />)}
          <Text style={is_like ? styles.dess : styles.dess_not}>{num_of_likes}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.options, {borderRightWidth: 1, borderRightColor: '#cccccc'}]}>
        <TouchableOpacity onPress={() => setIsDislike(!is_dislike)} style={styles.optRow}>
          {is_dislike ? (<AntDesign name="dislike1" size={24} color="#624DF6" />) : (<AntDesign name="dislike2" size={24} color="#cccccc" />)}
          <Text style={is_dislike ? styles.dess : styles.dess_not}>{num_of_dislikes}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optRow}>
          <Fontisto name="commenting" size={24} color="#A4A5FD" />
          <Text style={[styles.dess_not, { color: '#A4A5FD' }]}>{num_of_comm}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    height: 60
  },

  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  optRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dess_not: {
    color: '#cccccc',
    textAlign: 'center',
    paddingLeft: 10,
  },

  dess: {
    color: '#624DF6',
    textAlign: 'center',
    paddingLeft: 10,
  },
});
