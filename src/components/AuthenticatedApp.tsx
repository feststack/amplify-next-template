'use client';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import logo from "./logo.svg"; // adapte ou retire si tu n'as pas de logo

function App({ signOut }: any) {
  return (
    <View className="App">
      <Card>
        <Image src="/logo.svg" className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
