import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onWelcomeButtonClick = jest.fn();

  const main = shallow(<WelcomeScreen
    errorsCount={3}
    onWelcomeButtonClick={onWelcomeButtonClick}
  />
  );

  const welcomeButton = main.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});