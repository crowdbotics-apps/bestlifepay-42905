import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";

const ScreenComponent = () => {
  const dummyData = Array(10).fill({
    fileName: "File 1",
    createdOn: "01/01/2021",
    uploadedOn: "01/02/2021",
    createdBy: "User 1",
    numberOfConsumers: 100,
    totalBalance: 1000,
    type: "E-Letter",
    sentVia: "Email"
  });
  return <SafeAreaView style={_styles.hQGdNyIl}>
      <ScrollView>
        <View style={_styles.aCLIzFlK}>
          <Text style={_styles.nEPJOXXf}>Options</Text>
          <Text>Click on any option to go to the respective screen</Text>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Summery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Campaign History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Consumer Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Campaign Performance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Summery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Show 10 (Edit) entries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Download report- CSV Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Choose template</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Create group</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Schedule campaign</Text>
          </TouchableOpacity>
          <TextInput placeholder="Search bar" style={_styles.FXgVFHNU} />
          <Text style={_styles.zEQwslnI}>List of all campaigns</Text>
          {dummyData.map((data, index) => <View key={index} style={_styles.bBGZbfNA}>
              <Text>{data.fileName}</Text>
              <Text>{data.createdOn}</Text>
              <Text>{data.uploadedOn}</Text>
              <Text>{data.createdBy}</Text>
              <Text>{data.numberOfConsumers}</Text>
              <Text>{data.totalBalance}</Text>
              <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={_styles.TUrlCbGr} />
              <Text>{data.type}</Text>
              <Text>{data.sentVia}</Text>
              <View style={_styles.UluUtDfD}>
                <TouchableOpacity style={_styles.button} onPress={() => {}}>
                  <Text style={_styles.buttonText}>Manage template</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.button} onPress={() => {}}>
                  <Text style={_styles.buttonText}>Preview template</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.button} onPress={() => {}}>
                  <Text style={_styles.buttonText}>Resend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.button} onPress={() => {}}>
                  <Text style={_styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.button} onPress={() => {}}>
                  <Text style={_styles.buttonText}>Export</Text>
                </TouchableOpacity>
              </View>
            </View>)}
          <View style={_styles.owWTkAeC}>
            <TouchableOpacity style={_styles.button} onPress={() => {}}>
              <Text style={_styles.buttonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button} onPress={() => {}}>
              <Text style={_styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  hQGdNyIl: {
    flex: 1,
    backgroundColor: "#fff"
  },
  aCLIzFlK: {
    padding: 20
  },
  nEPJOXXf: {
    fontSize: 24,
    fontWeight: "bold"
  },
  FXgVFHNU: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 20
  },
  zEQwslnI: {
    fontSize: 24,
    fontWeight: "bold"
  },
  bBGZbfNA: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  TUrlCbGr: {
    width: 50,
    height: 50
  },
  UluUtDfD: {
    flexDirection: "row"
  },
  owWTkAeC: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});