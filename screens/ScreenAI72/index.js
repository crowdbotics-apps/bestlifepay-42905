import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
const data = [{
  id: '1',
  title: 'Summery'
}, {
  id: '2',
  title: 'Campaign History'
}, {
  id: '3',
  title: 'Consumer Status'
}, {
  id: '4',
  title: 'Campaign Performance'
}];

const CampaignScreen = ({
  navigation
}) => {
  return <SafeAreaView style={_styles.FOABQSUQ}>
      <View style={_styles.jNmQiRLZ}>
        <Text style={_styles.uzezVJFH}>Options</Text>
        <Text style={_styles.OjLzNvIM}>Click on any option to go to the respective screen</Text>
        <FlatList data={data} keyExtractor={item => item.id} renderItem={({
        item
      }) => <TouchableOpacity onPress={() => navigation.navigate(item.title)}>
              <View style={_styles.evjLtkUS}>
                <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.WuQQmkFi} />
                <Text style={_styles.ouDwrDux}>{item.title}</Text>
              </View>
            </TouchableOpacity>} />
        <View style={_styles.oBgpIIaz}>
          <Button title="Previous" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

export default CampaignScreen;

const _styles = StyleSheet.create({
  FOABQSUQ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  jNmQiRLZ: {
    padding: 20
  },
  uzezVJFH: {
    fontSize: 24,
    fontWeight: "bold"
  },
  OjLzNvIM: {
    fontSize: 16,
    color: "#888"
  },
  evjLtkUS: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  WuQQmkFi: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  ouDwrDux: {
    fontSize: 18
  },
  oBgpIIaz: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});