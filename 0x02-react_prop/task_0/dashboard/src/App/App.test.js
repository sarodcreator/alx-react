import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<App />);
        expect(component).toBeDefined();
    });
    // At this point reloading the App should display the exact same page as the last task
    // The console should not show any error or warning
});