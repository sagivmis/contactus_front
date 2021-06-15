import React from "react";
import {
  Checkbox,
  Grid,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const _Sidebar = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <div className="sidebar-container">
      <Grid columns={1}>
        <Grid.Column>
          <Checkbox
            checked={visible}
            label={{ children: <>Show Side-Bar</> }}
            onChange={(e, data) => setVisible(data.checked)}
          />
        </Grid.Column>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              onHide={() => setVisible(false)}
              vertical
              // inverted
              visible={visible}
              width="thin"
              direction="right"
            >
              <Menu.Item as="">
                <Icon name="home" />
                <a href="http://www.proshofar.com">Our Website</a>
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="cut" />
                Coupons
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="camera" />
                Share with us
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="calendar outline" />
                Schedule an appointment with us
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment
                basic
                className={`segment-container ${visible ? "" : ""}`}
              ></Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default _Sidebar;
