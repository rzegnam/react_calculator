const calculations = {
  "+": (a, b) => (parseFloat(a) + parseFloat(b)).toString(10),
  "-": (a, b) => (parseFloat(a) - parseFloat(b)).toString(10),
  "*": (a, b) => (parseFloat(a) * parseFloat(b)).toString(10),
  "/": (a, b) => (parseFloat(a) / parseFloat(b)).toString(10)
};

const calculate = (state, buttonType, clickedButton) => {
  console.log(buttonType);
  console.log(clickedButton);
  if (buttonType === "numeric") {
    const nextValue = state.nextValue + clickedButton;
    return { nextValue };
  }

  if (buttonType === "clear") {
    return { nextValue: "", operation: "", total: "" };
  }

  if (buttonType === "revert-sign") {
    if (state.nextValue !== "") {
      const reverted = (parseFloat(state.nextValue) * -1).toString(10);
      return { nextValue: reverted };
    } else if (state.total !== "") {
      const revertedTotal = (parseFloat(state.total) * -1).toString(10);
      return { total: revertedTotal };
    }
  }

  if (buttonType === "calculation") {
    if (state.nextValue && state.operation && state.total) {
      const calculated = calculations[state.operation](
        state.total,
        state.nextValue
      );
      return { nextValue: "", operation: clickedButton, total: calculated };
    } else if (state.total) {
      return { operation: clickedButton };
    } else {
      return {
        nextValue: "",
        operation: clickedButton,
        total: state.nextValue
      };
    }
  }

  if (buttonType === "result") {
    if (state.operation && state.nextValue) {
      const calculated = calculations[state.operation](
        state.total,
        state.nextValue
      );
      return { total: calculated, nextValue: "", operation: "" };
    }
  }

  if (buttonType === "dot") {
    if (!state.nextValue.includes(".")) {
      const nextValue = state.nextValue + clickedButton;
      return { nextValue };
    }
  }

  if (buttonType === "percent" && state.nextValue) {
    if (state.operation) {
      const percent = (
        parseFloat(
          calculations[state.operation](state.total, state.nextValue)
        ) * 0.01
      ).toString(10);
      return { nextValue: percent };
    } else {
      const percent = (parseFloat(state.nextValue) * 0.01).toString(10);
      return { nextValue: percent };
    }
  }
};

export default calculate;
