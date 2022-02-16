import React, { useState, useCallback, useEffect } from "react";
import { View, Alert } from "react-native";
import { getYouTubeId } from "../Utils/FetchApi";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Trailer({ movieId }) {
  const [playing, setPlaying] = useState(false);
  const [youTubeId, setYouTubeId] = useState(null);

  console.log("movie id", movieId);

  useEffect(() => {
    getYouTubeId(movieId).then((res) => {
      console.log(res);
      setYouTubeId(res);
    });
  }, []);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "100%", aspectRatio: 16 / 9 }}>
        {youTubeId && (
          <YoutubePlayer
            height={"100%"}
            play={playing}
            videoId={youTubeId}
            onChangeState={onStateChange}
          />
        )}
      </View>
    </View>
  );
}
