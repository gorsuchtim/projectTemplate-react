/**
 * TestComponent
 */

export default (() => {
  const handleClick = () => {
    console.log("Click!");
  };

  const handleTest = () => {
    const testButton = document.querySelector(".test-component__button");
    testButton.addEventListener("click", handleClick);
  };
  const initialize = () => {
    // handleTest();
    console.log("its working!!!");
  };

  return {
    initialize
  };
})();
