import React from 'react'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import icon from '../assets/images/splash-icon-light.png';
import { Ionicons } from '@expo/vector-icons';

const MovieDetails = () => {
  const route = useRoute();
  const { movie } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}` }}
        style={styles.poster}
        imageStyle={styles.imageStyle}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradient}
        >
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
            <Text style={styles.genresTitle}>Genres:</Text>
            <Text style={styles.genres}>{movie.genre_ids.join(', ')}</Text>
            <Image source={icon} style={{ width: 40, height: 40, alignSelf: 'center' }} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  detailsContainer: {
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 50,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  rating: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 10,
    justifyContent: 'center',
  },
  overview: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  genresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  genres: {
    fontSize: 16,
    color: '#ddd',
  },
});

export default MovieDetails;