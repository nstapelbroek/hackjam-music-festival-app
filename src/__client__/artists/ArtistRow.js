import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ArtistRow = ({
  artist
}) => (
    <View style={styles.row}>
      <Image source={{ uri: artist.artistImageUrl }} style={styles.picture} />
      <Text style={styles.primaryText}>{artist.name}</Text>
    </View>
  );

ArtistRow.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artistImageUrl: PropTypes.string.isRequired,
  }).isRequired
};

export default ArtistRow;

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", padding: 12 },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    marginBottom: 4
  },
  secondaryText: { color: "grey" }
});