// Step 1: Import deps
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

// Step 2: cleanup
afterEach(rtl.cleanup);

let wrapper;
beforeEach(() => {
	wrapper = rtl.render(<Dashboard />);
});

let Unlocked = () => {
	return wrapper.queryByText("Unlocked");
};
let Open = () => {
	return wrapper.queryByText("Open");
};
let LockGate = () => {
	return wrapper.queryByText("Lock Gate");
};
let CloseGate = () => {
	return wrapper.queryByText("Close Gate");
};
let Closed = () => {
	return wrapper.queryByText("Closed");
};
let Locked = () => {
	return wrapper.queryByText("Locked");
};
let OpenGate = () => {
	return wrapper.queryByText("Open Gate");
};
let UnlockGate = () => {
	return wrapper.queryByText("Unlock Gate");
};

describe("renders everything", () => {
	// Test
	it("renders without crashing", () => {
		// wrapper.debug();
		expect(wrapper.container).toMatchSnapshot();
	});
	it("renders a 'Unlocked' text node", () => {
		expect(Unlocked()).toBeInTheDocument();
		expect(Unlocked()).toBeVisible();
	});
	it("renders a 'Open' text node", () => {
		expect(Open()).toBeInTheDocument();
		expect(Open()).toBeVisible();
	});
	it("renders a 'LockGate' text node", () => {
		expect(LockGate()).toBeInTheDocument();
		expect(LockGate()).toBeVisible();
	});
	it("renders a 'CloseGate' text node", () => {
		expect(CloseGate()).toBeInTheDocument();
		expect(CloseGate()).toBeVisible();
	});
});
describe("Gate", () => {
	it("defaults to unlocked and open", () => {
		expect(Unlocked()).toBeInTheDocument();
		expect(Open()).toBeInTheDocument();
	});
	it("cannot be closed or opened if it is locked", () => {
		rtl.fireEvent.click(CloseGate());
		rtl.fireEvent.click(LockGate());
		expect(Unlocked()).not.toBeInTheDocument();
		expect(Locked()).toBeInTheDocument();
	});
});

describe("Dashboard", () => {
	it("shows the controls and display", () => {
		expect(Unlocked()).toBeInTheDocument();
		expect(Open()).toBeInTheDocument();
		expect(LockGate()).toBeInTheDocument();
		expect(CloseGate()).toBeInTheDocument();
	});
});
