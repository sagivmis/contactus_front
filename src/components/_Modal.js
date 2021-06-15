import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import _Form from "./_Form";

const _Modal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        centered={true}
        trigger={
          <Button inverted color="orange">
            Sign up
          </Button>
        }
        dimmer={"blurring"}
        size="large"
        className="modall"
        closeIcon
      >
        <Modal.Header>Sign up for newsletter</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src="https://pbs.twimg.com/profile_images/936253176961003520/WnBMjSAB_400x400.jpg"
            wrapped
          />
          <Modal.Description>
            <Header>Register to our newsletter!</Header>
            <p>
              This will give you 12% discount promo code on your next purchases,
              <br /> and also you'll get access to exclusive offers for our
              members!
            </p>
            {/* Form within modal*/}
            <_Form />
            {/* Form end */}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, let's go"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default _Modal;
