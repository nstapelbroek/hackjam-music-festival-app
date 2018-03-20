import React, { Component } from 'react';
import { FlatList, ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import { serverUrl } from '../config/server';
import StageOverviewCard from './StageOverviewCard';

class Stages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  renderItem = ({ item }) => {
    return <StageOverviewCard stage={item} />
  };

  renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
  );

  renderHeader = () => (
    <View
      style={{ height: 30, backgroundColor: "#5E5EB4", justifyContent: "center", alignItems: 'center' }}
    >
      <Text style={{ color: 'white' }}> All Stages</Text>
    </View>
  );

  async componentDidMount() {
    const { data: stages } = await axios.get(`${serverUrl}/stages`);
    this.setState({ stages });
  }

  render() {
    const { stages } = this.state;
    console.log(stages);
    return <View>
      <FlatList
        data={stages}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={item => item.id}
      />
    </View>
  }
}

export default Stages;