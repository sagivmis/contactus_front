import React from "react";
import { Image } from "semantic-ui-react";
const Logo = () => {
  return (
    <div>
      <Image
        size="large"
        src="https://pbs.twimg.com/profile_images/936253176961003520/WnBMjSAB_400x400.jpg"
        wrapped
        className="logo"
      />
    </div>
  );
};

export default Logo;
