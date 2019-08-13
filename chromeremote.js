const repl = require("repl");
const pjson = require("./package.json");
const chalk = require("chalk");
const cri = require("chrome-remote-interface");

let _client,
  page,
  network,
  runtime,
  dom,
  overlay,
  security,
  target,
  pages,
  clientWrapper;

const chromeHost = "127.0.0.1";
const localProtocol = true;

const list_pages = async chromePort => {
  return new Promise(async function list(resolve) {
    try {
      const browserTargets = await cri.List({
        host: chromeHost,
        port: chromePort
      });

      pages = browserTargets.filter(target => target.type === "page");
      resolve(pages);
    } catch (e) {
      console.log(e);
    }
  });
};

const connect_to_remote_chrome = async chromePort => {
  return new Promise(async function connect(resolve) {
    try {
      const browserTargets = await cri.List({
        host: chromeHost,
        port: chromePort
      });
      browserTargets.map(target => console.log(target));
      if (!browserTargets.length) throw new Error("No targets created yet 1!");
      target = browserTargets.filter(target => target.type === "page")[0];

      await cri({ target, local: localProtocol }, async c => {
        _client = c;
        page = c.Page;
        network = c.Network;
        runtime = c.Runtime;
        input = c.Input;
        dom = c.DOM;
        overlay = c.Overlay;
        security = c.Security;
        await Promise.all([
          runtime.enable(),
          network.enable(),
          page.enable(),
          dom.enable(),
          overlay.enable(),
          security.enable()
        ]);
        resolve(_client);
      });
    } catch (e) {
      console.log("error connecting -", e);
    }
  });
};

const replServer = repl.start({
  prompt: `${pjson.name}:REPL> `
});

replServer.on("exit", () => {
  console.log(chalk.red('Received "exit" event from REPL'));
  process.exit();
});

replServer.defineCommand("list", localPort => {
  console.log(
    chalk.blueBright("Detecting on local machine port : ", localPort)
  );
  list_pages(localPort)
    .then(c => {
      replServer.context.pages = c;
      c.map(page => {
        console.log(chalk.green("Active page detected - URL ", page.url));
      });
      replServer.displayPrompt();
    })
    .catch(err => {
      console.log("error", err);
    });
});

replServer.defineCommand("attach", localPort => {
  console.log(
    chalk.blueBright(
      "Detecting and attaching on local machine port : ",
      localPort
    )
  );
  connect_to_remote_chrome(localPort)
    .then(c => {
      replServer.context.client = () => getClientWrapper(c);
      replServer.displayPrompt();
    })
    .catch(err => {
      console.log("error", err);
    });
});

function getClientWrapper(target) {
  const handler = {
    get: (target, name) => {
      return target[name];
    }
  };
  return new Proxy(target, handler);
}
