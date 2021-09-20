import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import EditOutlined from "@material-ui/icons/EditOutlined";
import { blue, green, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (event) => {
      if (event.host == "Member") {
        return blue[500];
      }

      if (event.host == "Guest") {
        return yellow[600];
      }
      if (event.host == "Business") {
        return green[500];
      }
    },
    banner: {
      fontSize: "large",
    },
  },
  cardcity: {
    fontSize: "x-large",
  },
});

export default function EventCard({ event, handleDelete, handleEdit }) {
  const classes = useStyles(event);
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {event.host[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(event.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          edit={
            <IconButton onClick={() => handleEdit(event.id)}>
              <EditOutlined />
            </IconButton>
          }
          title={event.title}
          subheader={new Date(event.date).toLocaleDateString()}
        />
        <CardContent>
          <Typography className={classes.cardcity}>{event.city} </Typography>
          <Typography>{event.location} </Typography>
          <Typography variant="body2" color="textSecondary">
            {event.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
