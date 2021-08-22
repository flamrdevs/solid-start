import { renderToStringAsync } from "solid-js/web";
import { MetaProvider } from "solid-meta";
import { RouteDataFunc, Router } from "solid-app-router";
import Root from "~/root";
import { StartProvider } from "../../components";
import renderActions from "../actionsServer";
import { Component } from "solid-js";

export async function render({ url, manifest }) {
  const context = { tags: [] };
  const Start: Component<{ data?: RouteDataFunc }> = props => (
    <StartProvider context={context} manifest={manifest}>
      <MetaProvider tags={context.tags}>
        <Router url={url} out={context} data={props.data}>
          {props.children}
        </Router>
      </MetaProvider>
    </StartProvider>
  );
  const html = await renderToStringAsync(() => <Root Start={Start} />);
  return "<!DOCTYPE html>" + html;
}

export { renderActions };