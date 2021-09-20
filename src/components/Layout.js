import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { format } from "date-fns";
import Avatar from "@material-ui/core/Avatar";
import {
  DateRangeOutlined,
  AddCircleOutlineOutlined,
  InfoOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
      margin: 2,
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    image: {
      flex: 1,
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "Events",
      icon: <DateRangeOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Host Event",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
    {
      text: "About",
      icon: <InfoOutlined color="secondary" />,
      path: "/about",
    },
    {
      text: "Members",
      icon: <ExitToAppOutlined color="secondary" />,
      path: "/member",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appbar} elevation="0">
        <Toolbar>
          <Typography className={classes.date}>
            {format(new Date(), "MMMM do Y")}
          </Typography>
          <Typography>KevinRToday</Typography>
          <Avatar src="/kevin-av.jpeg" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title} color="secondary">
            Nomadee
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}> </div>
        {children}
      </div>
    </div>
  );
}
