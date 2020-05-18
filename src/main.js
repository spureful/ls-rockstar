import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/rew";
import "./scripts/login";
import "./scripts/promo-prlx";
import "./scripts/openMenu";