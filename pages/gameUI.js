import {
  Box,
  Grommet,
  Grid,
  Button,
  Form,
  FormField,
  TextInput,
  Text,
} from "grommet";

export default function GameUI() {
  return (
    <Box
      gridArea="betting"
      background="#171717"
      align="center"
      justify="center"
      round="xsmall"
      pad="medium"
      border={{ color: "#1B1B1B", size: "large" }}
    >
      <Grid
        columns={{
          count: 1,
          size: "auto",
        }}
        gap="xsmall"
      >
        <Form
          onSubmit={({ value }) => {
            props.placeBet(value);
            setValueBet(undefined);
            setValueAutoBet(undefined);
          }}
        >
          <Box
            direction="column"
            gap="xxsmall"
            pad="xsmall"
            animation={{ type: "fadeIn", duration: 390 }}
          >
            <FormField required={true} name="betAmount">
              <TextInput
                size="small"
                name="betAmount"
                placeholder="Bet Amount"
                icon={
                  <Text weight="bold" size="medium">
                    $LLTH
                  </Text>
                }
                reverse
              />
            </FormField>
            <FormField name="autoCashOut">
              <TextInput
                name="autoCashOut"
                size="small"
                placeholder="Multiplier"
                icon={
                  <Text weight="bold" size="medium">
                    x
                  </Text>
                }
                reverse
              />
            </FormField>
            <Button secondary type="submit" label="PLACE BET" />
          </Box>
        </Form>
      </Grid>
    </Box>
  );
}
