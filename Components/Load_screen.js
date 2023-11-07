import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ProgressBar } from 'react-native';
import { quantum } from 'ldrs';
import Decimal from 'decimal.js';

quantum.register();

export default function Load_Screen() {
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    let interval = setInterval(() => {
        if (progress < 1) {
          const newProgress = new Decimal(progress).plus(0.1).toNumber();
          setProgress(newProgress);
        }
      }, 200); 
      
    return () => clearInterval(interval);
  }, [progress]);
  

  return (
    <View style={styles.loadingView}>
          <ProgressBar
            progress={progress}
            width={null} // Automatic width based on flexbox
            height={5} // Progress bar thickness
            color="#624DF6"
            backgroundColor="#fff"
            style={styles.progressBar}
          />
          <l-quantum size={60} speed={2} color="#624DF6" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 1,
  },

  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 5,
    backgroundColor: '#fff',
  },
});
