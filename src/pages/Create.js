import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, SetTitle] = useState("");
  const [details, SetDetails] = useState("");
  const [location, SetLocation] = useState("");
  const [city, SetCity] = useState("");
  const [date, SetDate] = useState("");
  const [host, SetHost] = useState("Member");
  const [titleError, SetTitleError] = useState(false);
  const [dateError, SetDateError] = useState(false);
  const [detailsError, SetDetailsError] = useState(false);
  const [cityError, SetCityError] = useState(false);
  const [locationError, SetLocationError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetTitleError(false);
    SetDetailsError(false);
    SetLocationError(false);
    SetCityError(false);
    SetDateError(false);

    if (title == "") {
      SetTitleError(true);
    }

    if (details == "") {
      SetDetailsError(true);
    }

    if (location == "") {
      SetLocationError(true);
    }

    if (city == "") {
      SetCityError(true);
    }

    if (date == "") {
      SetDateError(true);
    }

    if (title && details && city && location && date) {
      fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, city, date, location, details, host }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Host a New Event
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => SetTitle(e.target.value)}
          className={classes.field}
          label="Event Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => SetCity(e.target.value)}
          className={classes.field}
          label="City"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={cityError}
        />

        <TextField
          onChange={(e) => SetDate(e.target.value)}
          className={classes.field}
          label="Date"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={dateError}
        />

        <TextField
          onChange={(e) => SetLocation(e.target.value)}
          className={classes.field}
          label="Location"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={locationError}
        />

        <TextField
          onChange={(e) => SetDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormLabel>Event Host</FormLabel>
        <FormControl className={classes.field}>
          <RadioGroup value={host} onChange={(e) => SetHost(e.target.value)}>
            <FormControlLabel
              value="Member"
              control={<Radio />}
              label="Member"
            />

            <FormControlLabel value="Guest" control={<Radio />} label="Guest" />
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label="Business"
            />
          </RadioGroup>
        </FormControl>

        <Button
          onClick={() => console.log("you clicked me")}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
