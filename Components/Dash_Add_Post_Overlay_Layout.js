import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function Dash_Add_Post_Overlay_Layout({ onClickClose }) {
  const [socialContent, setSocialContent] = useState('');
  const [height, setHeight] = useState(40);
  const [selectedPostType, setSelectedPostType] = useState('Community');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleContentSizeChange = (event) => {
    setHeight(event.nativeEvent.contentSize.height);
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
    console.log('Selected Image URI:', selectedImage);
  };

  const handlePostTypeSelect = (postType) => {
    setSelectedPostType(postType);
    console.log('Selected Post Type:', postType);
    // Handle the selected post type (Community or Query)
  };

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      setSelectedImage(result.uri);
      console.log('Image URI: ', result.uri);
    }
  };
  
  

  const handleCloseOverlay = () => {
    onClickClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.myPostContainer}>
        <TouchableOpacity onPress={handleCloseOverlay} style={styles.overlayCloseButton}>
          <AntDesign name="closecircle" size={24} color="#C5C5C5" style={styles.close} />
        </TouchableOpacity>
        <Text style={styles.addTitle}>Add Your Post</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handlePostTypeSelect('Community')}
            style={[
              styles.postTypeButton,
              selectedPostType === 'Community' ? styles.selectedButton : null,
            ]}
          >
            <Text style={styles.buttonText}>Community</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePostTypeSelect('Query')}
            style={[
              styles.postTypeButton,
              selectedPostType === 'Query' ? styles.selectedButton : null,
            ]}
          >
            <Text style={styles.buttonText}>Query</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.textInput}
          value={socialContent}
          multiline={true}
          numberOfLines={4}
          onChangeText={(newText) => setSocialContent(newText)}
          onContentSizeChange={handleContentSizeChange}
          placeholder="Type something..."
        />

        <TouchableOpacity onPress={handleImageUpload} style={styles.uploadButton}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        )}

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        backgroundColor: '#fff',
    },
    myPostContainer: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 15,
    },
    addTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        marginTop: 10,
        padding: 10,
        width: '100%',
        textAlignVertical: 'top',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginBottom: 10,
    },
    postTypeButton: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#C5C5C5',
    },
    buttonText: {
        color: '#624DF6',
    },
    selectedButton: {
        backgroundColor: '#DCDDFF',
      },
    uploadButton: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#DCDDFF',
        alignItems: 'center',
    },
    submitButton: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#DCDDFF',
        alignItems: 'center',
    },

    close: {
        position: 'absolute', 
        top: 0,             
        right: 10,            
    },

    overlayCloseButton: {
        padding: 10,
        borderRadius: 15,
    },
});
