import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, TextInput, Image, Picker, ScrollView } from "react-native";

const ProfileScreen = () => {
  return <SafeAreaView style={_styles.ljijItdX}>
      <ScrollView>
        <View style={_styles.YQZTVRiY}>
          <Image style={_styles.ZgcekCiD} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={_styles.VwEzifGU}>Creator Profile</Text>
          <Text style={_styles.bGxHBsSy}>Language</Text>
          <Picker>
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Spanish" value="spanish" />
          </Picker>
          <Text style={_styles.oYArbsAX}>Business Type</Text>
          <TextInput style={_styles.oigQPBXk} />
          <Text style={_styles.KnHnNddv}>Business Info</Text>
          <TextInput style={_styles.dKxlOwcD} />
          <Text style={_styles.rOHDObig}>Owner's Info</Text>
          <TextInput style={_styles.GUlBIMKM} />
          <Text style={_styles.XNhBvLex}>Choose Membership Plan</Text>
          <Picker>
            <Picker.Item label="Plan 1" value="plan1" />
            <Picker.Item label="Plan 2" value="plan2" />
          </Picker>
          <Text style={_styles.gLyLcrCi}>Billing Details</Text>
          <TextInput style={_styles.khAAjNoc} />
          <Text style={_styles.FADXHlit}>Name on Check</Text>
          <TextInput style={_styles.faRdXKVW} />
          <Text style={_styles.pytqVDjW}>Routing Number</Text>
          <TextInput style={_styles.rsJuUJfU} />
          <Text style={_styles.dulcqMOg}>Account Number</Text>
          <TextInput style={_styles.afhYlviQ} />
          <Text style={_styles.GxZyeNPq}>Check Number</Text>
          <TextInput style={_styles.gJNrIyrT} />
          <Text style={_styles.rarlmCYs}>ACH Format</Text>
          <Picker>
            <Picker.Item label="Format 1" value="format1" />
            <Picker.Item label="Format 2" value="format2" />
          </Picker>
          <Text style={_styles.cZlhHKDu}>Account Type</Text>
          <Picker>
            <Picker.Item label="Type 1" value="type1" />
            <Picker.Item label="Type 2" value="type2" />
          </Picker>
          <Text style={_styles.VTTQfIEM}>State</Text>
          <Picker>
            <Picker.Item label="State 1" value="state1" />
            <Picker.Item label="State 2" value="state2" />
          </Picker>
          <Text style={_styles.YDthCwGD}>Zip</Text>
          <TextInput style={_styles.VCytfbiZ} />
          <Text style={_styles.zLflkjzK}>Card Number</Text>
          <TextInput style={_styles.FZbachvF} />
          <Text style={_styles.zrcRFnyO}>Name on the Card</Text>
          <TextInput style={_styles.BThmKHLY} />
          <Text style={_styles.bipzlekq}>Billing Address</Text>
          <TextInput style={_styles.OmYbOVaG} />
          <Text style={_styles.KyGikZmp}>First Name</Text>
          <TextInput style={_styles.UivZjAhn} />
          <Text style={_styles.kudPjxeJ}>Last Name</Text>
          <TextInput style={_styles.EYggvMZZ} />
          <Text style={_styles.gcuPHoid}>Address</Text>
          <TextInput style={_styles.KnegmDdd} />
          <Text style={_styles.EQPdapZp}>City</Text>
          <Picker>
            <Picker.Item label="City 1" value="city1" />
            <Picker.Item label="City 2" value="city2" />
          </Picker>
          <Text style={_styles.dUmhuOEV}>State</Text>
          <Picker>
            <Picker.Item label="State 1" value="state1" />
            <Picker.Item label="State 2" value="state2" />
          </Picker>
          <Text style={_styles.fhjWbFDf}>Zip</Text>
          <TextInput style={_styles.dALCbavg} />
          <View style={_styles.cHxItvyf}>
            <TouchableOpacity style={_styles.button}>
              <Text style={_styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button}>
              <Text style={_styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  ljijItdX: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  YQZTVRiY: {
    padding: 20
  },
  ZgcekCiD: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  VwEzifGU: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  },
  bGxHBsSy: {
    fontSize: 18,
    fontWeight: "bold"
  },
  oYArbsAX: {
    fontSize: 18,
    fontWeight: "bold"
  },
  oigQPBXk: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  KnHnNddv: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dKxlOwcD: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  rOHDObig: {
    fontSize: 18,
    fontWeight: "bold"
  },
  GUlBIMKM: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  XNhBvLex: {
    fontSize: 18,
    fontWeight: "bold"
  },
  gLyLcrCi: {
    fontSize: 18,
    fontWeight: "bold"
  },
  khAAjNoc: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  FADXHlit: {
    fontSize: 18,
    fontWeight: "bold"
  },
  faRdXKVW: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  pytqVDjW: {
    fontSize: 18,
    fontWeight: "bold"
  },
  rsJuUJfU: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  dulcqMOg: {
    fontSize: 18,
    fontWeight: "bold"
  },
  afhYlviQ: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  GxZyeNPq: {
    fontSize: 18,
    fontWeight: "bold"
  },
  gJNrIyrT: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  rarlmCYs: {
    fontSize: 18,
    fontWeight: "bold"
  },
  cZlhHKDu: {
    fontSize: 18,
    fontWeight: "bold"
  },
  VTTQfIEM: {
    fontSize: 18,
    fontWeight: "bold"
  },
  YDthCwGD: {
    fontSize: 18,
    fontWeight: "bold"
  },
  VCytfbiZ: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  zLflkjzK: {
    fontSize: 18,
    fontWeight: "bold"
  },
  FZbachvF: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  zrcRFnyO: {
    fontSize: 18,
    fontWeight: "bold"
  },
  BThmKHLY: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  bipzlekq: {
    fontSize: 18,
    fontWeight: "bold"
  },
  OmYbOVaG: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  KyGikZmp: {
    fontSize: 18,
    fontWeight: "bold"
  },
  UivZjAhn: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  kudPjxeJ: {
    fontSize: 18,
    fontWeight: "bold"
  },
  EYggvMZZ: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  gcuPHoid: {
    fontSize: 18,
    fontWeight: "bold"
  },
  KnegmDdd: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  EQPdapZp: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dUmhuOEV: {
    fontSize: 18,
    fontWeight: "bold"
  },
  fhjWbFDf: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dALCbavg: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  cHxItvyf: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center"
  }
});