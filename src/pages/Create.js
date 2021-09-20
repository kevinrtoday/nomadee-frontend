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
import axios from "axios";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const [event, setEvent] = useState({
    title: "",
    city: "",
    location: "",
    date: "",
    details: "",
    host: "",
  });
  const classes = useStyles();
  const history = useHistory();
  // const [title, SetTitle] = useState("");
  // const [details, SetDetails] = useState("");
  // const [location, SetLocation] = useState("");
  // const [city, SetCity] = useState("");
  // const [date, SetDate] = useState("");
  // const [host, SetHost] = useState("Member");
  const [titleError, SetTitleError] = useState(false);
  const [dateError, SetDateError] = useState(false);
  const [detailsError, SetDetailsError] = useState(false);
  const [cityError, SetCityError] = useState(false);
  const [locationError, SetLocationError] = useState(false);

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
    console.log(`
      name: ${event.title},
      city: ${event.city},
      date: ${event.date},
      location: ${event.location},
      detail: ${event.detail},
      host: ${event.host},
    `);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/events/event`, event);
    /*
      - set the POST with axios inside of this function
        * use my react repo as referece
    */
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
          name="title"
          value={event.title}
          onChange={handleChange}
          className={classes.field}
          label="Event Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={handleChange}
          value={event.city}
          name="city"
          className={classes.field}
          label="City"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={cityError}
        />

        <TextField
          onChange={handleChange}
          value={event.date}
          name="date"
          type="date"
          className={classes.field}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={dateError}
        />

        <TextField
          onChange={handleChange}
          value={event.location}
          name="location"
          className={classes.field}
          label="Location"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={locationError}
        />

        <TextField
          onChange={handleChange}
          value={event.details}
          name="details"
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
          <RadioGroup onSelect={handleChange}>
            <FormControlLabel
              onChange={handleChange}
              name="host"
              value="Member"
              control={<Radio />}
              label="Member"
            />

            <FormControlLabel
              value="Guest"
              control={<Radio />}
              label="Guest"
              onChange={handleChange}
              name="host"
            />
            <FormControlLabel
              onChange={handleChange}
              name="host"
              value="Business"
              control={<Radio />}
              label="Business"
            />
          </RadioGroup>
        </FormControl>

        <Button
          onClick={handleSubmit}
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
