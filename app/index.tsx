import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import icon from '../assets/images/max-icon.png';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const apiKey = 'df4f1e9e72cbea16aff6a624a6fcca13';

  const readAccessToken = 'YeyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjRmMWU5ZTcyY2JlYTE2YWZmNmE2MjRhNmZjY2ExMyIsIm5iZiI6MTczODg2MTQyMy4yODQ5OTk4LCJzdWIiOiI2N2E0ZWI2ZjQ1MDFiMmYyMzM2NmVkZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TT73svsLgFi_9PNX0MNOXkWb3jJbFntZEH2ZZdeS_mw';  

  const fetchMovies = async (searchQuery) => {
    if (searchQuery.length < 2) return;
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${readAccessToken}`,
          },
        }
      );
      setMovies(response.data.results);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setQuery(text);
    fetchMovies(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{ fontWeight: 'bold', fontSize: 22}}>CINEPEEK</Text>
        <Image source={icon} style={{ width: 50, height: 50, alignSelf: 'center' }} />
      </View>
      <TextInput
        placeholder="Search for a movie..."
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieCard}
            onPress={() => navigation.navigate('MovieDetails', { movie: item })}
          >
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.rating}>{item.vote_average.toFixed(1)}</Text>
            <Text style={styles.movieTitle} numberOfLines={2}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 14,
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  movieCard: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  rating: {
    position: 'absolute',
    bottom: 44,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    paddingHorizontal: 5,
    borderRadius: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
  movieTitle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SearchMovies;
