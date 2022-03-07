import React, { useState, useCallback, useEffect } from "react";
import { View, Alert } from "react-native";
import { getGenreName, getYouTubeId } from "../Utils/FetchApi";
import YoutubePlayer from "react-native-youtube-iframe";
import { connect } from "react-redux";

function Trailer({ movieId ,setGenreName,genreName}) {
  const [playing, setPlaying] = useState(false);
  const [youTubeId, setYouTubeId] = useState(null);
  useEffect(() => {
    getYouTubeId(movieId).then((res) => {
      setYouTubeId(res);
    });
  }, []);
  useEffect(() => {
      getGenreName(movieId).then((res) => setGenreName(res));
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

function mapStateToProps(state) {
  return {    
    genreName:state.genreName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      setGenreName: (genreName) =>
        dispatch({
          type: "SET_GENRE_NAME",
          genreName,
        }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Trailer);