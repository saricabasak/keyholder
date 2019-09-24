import React from "react";
import { Text, View } from "react-native";
import { Container, Header, Content, Button } from "native-base";

export default function MainPage() {
  return (
    <View>
      <Text>App.js to start working on your app!</Text>
        <Header />
          <Button light>
            <Text> Light </Text>
          </Button>
          <Button primary>
            <Text> Primary </Text>
          </Button>
          <Button success>
            <Text> Success </Text>
          </Button>
          <Button info>
            <Text> Info </Text>
          </Button>
          <Button warning>
            <Text> Warning </Text>
          </Button>
          <Button danger>
            <Text> Danger </Text>
          </Button>
          <Button dark>
            <Text> Dark </Text>
          </Button>
    </View>
  );
}
