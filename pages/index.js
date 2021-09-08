import { Box, Grommet, Grid, Button } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import React from "react";
import { useState, useEffect } from "react";
import ConnectButton from "./connectMetaMask";
import GameUI from "./gameUI";

export default function Home() {
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (accounts !== undefined && accounts.length > 0) {
      console.log(accounts);
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [accounts]);

  const customTheme = {
    global: {
      background: {
        color: "#040404",
      },
    },
  };
  return (
    <Grommet
      theme={deepMerge(grommet, customTheme)}
      style={{
        backgroundColor: "#040404",
      }}
    >
      <Grid
        rows={["large"]}
        columns={["auto", "xlarge", "auto"]}
        gap="small"
        areas={[
          { name: "start", start: [0, 0], end: [0, 0] },
          { name: "center", start: [1, 0], end: [1, 0] },
          { name: "end", start: [2, 0], end: [2, 0] },
        ]}
      >
        <Box gridArea="start" background="#040404" />
        <Box
          gridArea="center"
          alignSelf="center"
          background="#040404"
          direction="column"
          align="center"
        >
          {connected ? <ConnectButton setAccounts={setAccounts} /> : <GameUI />}
        </Box>
        <Box gridArea="end" background="#040404" />
      </Grid>
    </Grommet>
  );
}
