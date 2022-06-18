const addCommand = (name, cb) => {
  if (typeof cb != "function") throw new UserException("callback must be a function");
  CFG.commands[name] = cb;
  RegisterCommand(name, CFG.commands[name]);
};
CFG.core.addCommand = addCommand;

const triggerCommand = (name, source, args) => {
  CFG.commands[name](source, args);
};
CFG.core.triggerCommand = triggerCommand;
