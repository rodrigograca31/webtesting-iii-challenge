// Step 1: Import deps
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

// Step 2: cleanup
afterEach(rtl.cleanup);

let wrapper;

describe("Display Component:", () => {
	it("provide buttons to toggle the closed and locked states", () => {
		wrapper = rtl.render(<Controls />);
		// wrapper.debug();
		expect(wrapper.container.querySelectorAll(".toggle-btn").length).toBe(
			2
		);
	});

	it("buttons' text changes to reflect the state the door will be in if clicked", () => {
		wrapper = rtl.render(<Controls closed={true} />);
		// wrapper.debug();
		expect(wrapper.queryByText("Open Gate")).toBeInTheDocument();
	});
	it("the closed toggle button is disabled if the gate is locked", () => {
		wrapper = rtl.render(<Controls locked={true} />);
		wrapper.debug();
		expect(wrapper.queryByText("Close Gate")).toBeDisabled();
	});
	it("the locked toggle button is disabled if the gate is open", () => {
		wrapper = rtl.render(<Controls locked={true} />);
		wrapper.debug();
		expect(wrapper.queryByText("Unlock Gate")).toBeDisabled();
	});
});
