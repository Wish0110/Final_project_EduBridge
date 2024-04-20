import React from "react";
import "./About.css";
import Card from "./Card";

const About = () => {
    return (
        <div className="how-to-use">
          <div className="row">
            <Card
              front="Step 1"
              back="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            />
            <Card
              front="Step 2"
              back="Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
            />
            <Card
              front="Step 3"
              back="Nam at tortor in tellus interdum sagittis. Donec posuere metus vitae ipsum. Integer a nibh."
            />
            <Card
              front="Step 4"
              back="Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."
            />
          </div>
        </div>
      );
    };
export default About;