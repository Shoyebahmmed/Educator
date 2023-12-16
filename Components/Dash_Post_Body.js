import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Dash_Photo_View from './Dash_Photo_View';

export default function Dash_Post_Body() {
  const [post_text, setPostText] = useState(`
🎉 Exciting Announcement from UOW! 🏫✨

Dear UOW community,

We're delighted to share some thrilling news with you! 🌟 Our new campus is ready to welcome a new era of innovation, collaboration, and student success. 🚀✨

🏞 Explore state-of-the-art facilities designed to inspire learning excellence.
🤝 Engage in a vibrant community that fosters innovation and collaboration.
🎓 Join us as we embark on a journey towards a brighter and more promising future together!

Stay tuned for more updates and celebrations! 🥳📣

#UOW #NewCampus #Innovation #StudentSuccess #ExcitingTimesAhead
  `);

  const [post_img, setPostImg] = useState(true);
  const [showFullText, setShowFullText] = useState(false);

  const handleSeeMore = () => {
    setShowFullText(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text numberOfLines={showFullText ? undefined : 5}>
          {post_text}
        </Text>
        {showFullText || !post_text ? null : (
          <TouchableOpacity onPress={handleSeeMore}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.photoViewContainer}>
        {post_img ? <Dash_Photo_View /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginBottom: 10,
    paddingLeft: 20,
  },
  seeMore: {
    color: 'blue',
  },
  photoViewContainer: {
   flex: 1,
   width: '98%',
   justifyContent: 'center',
   alignItems: 'center',
   alignContent: 'center',
   paddingBottom: 20,
  },
});
