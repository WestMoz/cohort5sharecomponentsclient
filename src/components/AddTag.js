import React from "react";
import axios from "axios";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import "../styles/component.css";

export default function AddTag({ signedIn, component }) {
  const [tag, setTag] = React.useState(undefined);

  async function tagAComponent() {
    try {
      const token = signedIn.signInUserSession.idToken.jwtToken;
      const componentId = component.componentId;
      await axios.post("http://localhost:4000/addtag", {
        token,
        componentId,
        tag,
      });
      window.alert("Tag Added!!");
      //Add a snackbar here from Material UI
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="tag-comp-section">
      <input
        className="tag-input"
        onChange={(e) => setTag(e.target.value)}
        placeholder="#Add A Tag"
      ></input>
      <div className="tag-icon-container">
        <LocalOfferOutlinedIcon
          className="add-tag-btn"
          onClick={() => tagAComponent()}
        ></LocalOfferOutlinedIcon>
        <span className="tag-text-display">Add Tag</span>
      </div>
    </div>
  );
}
