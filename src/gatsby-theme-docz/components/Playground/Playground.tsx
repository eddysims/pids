import React, { useState } from "react";
import { useConfig } from "docz";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Resizable } from "re-resizable";
// @ts-expect-error need this
import { usePrismTheme } from "gatsby-theme-docz/src/utils/theme";

interface PlaygroundProps {
  readonly code: string;
  readonly scope: Record<string, any>;
  /**
   * The language prop type comes from deep within dependecies,
   * instead of adding to peerDependecies, I have chosen to any
   * it for the time being
   */
  readonly language: any;
}

export function Playground({ code, scope, language }: PlaygroundProps) {
  const {
    themeConfig: { showLiveError, containerWidth },
  } = useConfig();

  // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads
  const [scopeOnMount] = useState(scope);
  const theme = usePrismTheme();
  const [width, setWidth] = useState(containerWidth);
  const resizableProps = getResizableProps();

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Resizable {...resizableProps} data-testid="playground">
        <LiveProvider
          code={code}
          scope={scopeOnMount}
          transformCode={transformCode}
          language={language}
          theme={theme}
        >
          <div>
            <LivePreview />
          </div>

          <div>
            <LiveEditor data-testid="live-editor" />
          </div>

          {showLiveError && <LiveError />}
        </LiveProvider>
      </Resizable>
    </div>
  );

  function getResizableProps() {
    return {
      minWidth: 260,
      maxWidth: "100%",
      size: { width, height: "auto" },
      style: { margin: "0 auto" },
      enable: { right: true },
      onResizeStop: (e: Event, direction: string, ref: any) =>
        setWidth(ref.style.width),
    };
  }
}

function transformCode(code: string) {
  if (code.startsWith("()") || code.startsWith("class")) {
    return code;
  }
  return `<React.Fragment>${code}</React.Fragment>`;
}
