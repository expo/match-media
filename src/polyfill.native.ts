import { Subscription } from "@unimodules/core";
import mediaQuery from "css-mediaquery";
import * as ScreenOrientation from "expo-screen-orientation";
import { Dimensions } from "react-native";

type Listener = (context: MediaQuery) => any;

class MediaQuery {
  private listeners: Listener[] = [];

  private orientation: ScreenOrientation.Orientation =
    ScreenOrientation.Orientation.PORTRAIT_UP;

  private unsubscribe: Subscription;

  constructor(private query: string) {
    // @ts-ignore
    (async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      this.updateListeners({ orientation });
    })();

    this.unsubscribe = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo: { orientation } }) => {
        this.updateListeners({ orientation });
      }
    );

    Dimensions.addEventListener("change", this.resize);
  }

  private resize = () => {
    this.updateListeners({ orientation: this.orientation });
  };

  _unmount() {
    if (this.unsubscribe) this.unsubscribe.remove();
    Dimensions.removeEventListener("change", this.resize);
  }

  public addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  public removeListener(listener: Listener) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) this.listeners.splice(index, 1);
  }

  // @ts-ignore
  public get matches(): boolean {
    const windowDimensions = Dimensions.get("window");
    return mediaQuery.match(this.query, {
      type: "screen",
      orientation:
        this.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
        this.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
          ? "landscape"
          : "portrait",
      ...windowDimensions,
      "device-width": windowDimensions.width,
      "device-height": windowDimensions.height,
    });
  }

  private updateListeners({ orientation }) {
    this.orientation = orientation;
    this.listeners.forEach((listener) => {
      listener(this);
    });
  }
}

if (window) {
  // @ts-ignore
  window.matchMedia = (mediaQueryString) => new MediaQuery(mediaQueryString);
}
