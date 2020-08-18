const ComponentIndex = () => {
  const asyncModules = {
    ".test-component": "TestComponent",
    ".should-fail": "ShouldFail"
  };

  const loadModules = async () => {
    const imports = Object.entries(asyncModules);

    await Promise.all(
      imports.map(async ([selector, path]) => {
        const target = document.querySelector(selector);
        if (!target) return;

        /** Load & initialize the module */
        const module = await import(`./${path}/${path}`);
        if (module.default) module.default.initialize();
      })
    );
  };

  (() => {
    loadModules();
  })();
};

export default ComponentIndex;
