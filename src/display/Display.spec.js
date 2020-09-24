// Step 1: Import deps
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

// Step 2: cleanup
afterEach(rtl.cleanup);

let wrapper;

describe("Display Component:", () => {
	beforeEach(() => {
		wrapper = rtl.render(<Display locked={true} closed={true} />);
	});
	it("displays if gate is open/closed and if it is locked/unlocked", () => {
		// wrapper.debug();
		expect(wrapper.queryByText("Locked")).toBeInTheDocument();
		expect(wrapper.queryByText("Closed")).toBeInTheDocument();
		expect(
			wrapper.container.firstChild.firstChild.classList.contains(
				"red-led"
			)
		).toBe(true);
	});
});

describe("Display Component:", () => {
	beforeEach(() => {
		wrapper = rtl.render(<Display locked={false} closed={false} />);
	});
	it("displays open and unlocked", () => {
		// wrapper.debug();
		expect(wrapper.queryByText("Unlocked")).toBeInTheDocument();
		expect(wrapper.queryByText("Open")).toBeInTheDocument();
		expect(
			wrapper.container.firstChild.firstChild.classList.contains(
				"green-led"
			)
		).toBe(true);
	});
});
