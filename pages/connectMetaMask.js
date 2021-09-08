import { Box, Button } from "grommet";

export default function ConnectButton(props) {
  let currentAccount = null;

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
    }
  }

  async function getAccount() {
    const accs = window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(handleAccountsChanged)
      .catch((err) => {
        if (err.code === 4001) {
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });

    props.setAccounts(accs);
  }

  return (
    <Box
      gridArea="betting"
      align="center"
      justify="center"
      round="xsmall"
      pad="xsmall"
      animation="zoomOut"
      responsive={true}
      border={{ color: "#1B1B1B", size: "xsmall" }}
    >
      <Box animation="fadeIn">
        <Button
          id="connectButton"
          secondary
          label="CONNECT"
          onClick={() => {
            getAccount();
          }}
          color="brand"
        />
      </Box>
    </Box>
  );
}
