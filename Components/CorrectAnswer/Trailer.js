import React, { useState, useCallback, useEffect } from "react";
import { View, Alert, Platform, useWindowDimensions } from "react-native";
import { getYouTubeId } from "../../Utils/FetchApi";
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from "react-native-web-webview";

function Trailer({ movieId }) {
  const [playing, setPlaying] = useState(false);
  const [youTubeId, setYouTubeId] = useState(null);
  const { height } = useWindowDimensions();

  useEffect(() => {
    getYouTubeId(movieId)
      .then((res) => {
        setYouTubeId(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const onStateChange = useCallback((state) => {
    window.postMessage = postMessage.bind(window);

    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  if (Platform.OS === "web") {
    return (
      <View
        style={{
          flex: 1,
          width: height > 550 ? "100%" : "50%",
          aspectRatio: 16 / 9,
        }}
      >
        {youTubeId && (
          <WebView
            mediaPlaybackRequiresUserAction={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: `https://www.youtube.com/embed/${youTubeId}?rel=0` }}
          />
        )}
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "100%", aspectRatio: 16 / 9 }}>
          {youTubeId && (
            <YoutubePlayer
              height={"100%"}
              width={"100%"}
              play={playing}
              videoId={youTubeId}
              onChangeState={onStateChange}
            />
          )}
        </View>
      </View>
    );
  }
}

export default Trailer;
