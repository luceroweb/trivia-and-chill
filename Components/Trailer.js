import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Trailer({movieId}) {
  const [playing, setPlaying] = useState(false);
  const [videoI,setVideoI]=useState("iee2TATGMyI")
  // const [videoI,setVideoI]=useState("_zxhK3Z-R0c")
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View 
    style={{ flex:1,alignItems:'center',justifyContent:'center'}}
    >
      <View style={{width:'80%',aspectRatio:16/9}}>
      <YoutubePlayer
        height={'100%'}        
        play={playing}
        videoId={videoI}
        onChangeState={onStateChange}
      />
       </View>
    </View>
  );
}