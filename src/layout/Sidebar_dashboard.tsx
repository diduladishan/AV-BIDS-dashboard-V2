import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import PLUS_ICON from "../assets/navigation bar/plus.png";
import NOTIFICATION_ICON from "../assets/navigation bar/bell.png";

export function Sidebar_dashboard() {
  return (
    <div>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 bg-[#fff]">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      ;
    </div>
  );
}
