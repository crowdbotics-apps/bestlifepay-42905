import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Button } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    setFile({
      name: 'dummy_file.pdf',
      date: new Date().toLocaleDateString()
    });
  };

  const handleDelete = () => {
    setFile(null);
  };

  return <SafeAreaView style={_styles.yTlTokQE}>
      <View style={_styles.WytexFPv}>
        <Text style={_styles.sQcSLANS}>Step 1- Upload Notice</Text>
        {!file ? <View style={_styles.vdtzbcCe}>
            <Text>Before uploading file</Text>
            <TouchableOpacity onPress={handleUpload} style={_styles.mbyyfrdJ}>
              <Text style={_styles.boKnKyZP}>Click to upload or drag and drop</Text>
            </TouchableOpacity>
            <Text style={_styles.LtiMCqAi}>Supported file types- PDF, PNG, JPG</Text>
          </View> : <View style={_styles.CbZnySwW}>
            <Text>Name of the file: {file.name}</Text>
            <Text>Date of upload: {file.date}</Text>
            <TouchableOpacity onPress={handleDelete} style={_styles.YlFanSxq}>
              <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.lkfODeGw} />
            </TouchableOpacity>
          </View>}
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI34");
      }}><View style={_styles.vClstANF}>
          <Button title="Back" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View></Pressable>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  yTlTokQE: {
    flex: 1,
    backgroundColor: "#fff"
  },
  WytexFPv: {
    padding: 20
  },
  sQcSLANS: {
    fontSize: 24,
    fontWeight: "bold"
  },
  vdtzbcCe: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  mbyyfrdJ: {
    marginTop: 20
  },
  boKnKyZP: {
    color: "blue"
  },
  LtiMCqAi: {
    marginTop: 20
  },
  CbZnySwW: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  YlFanSxq: {
    marginTop: 20
  },
  lkfODeGw: {
    width: 20,
    height: 20
  },
  vClstANF: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50
  }
});