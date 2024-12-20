import * as amplitude from '@amplitude/analytics-browser';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function initAmplitude() {
    amplitude.init("02434e2a648821186600db8943872ab5", "", {
        autocapture: {
            attribution: true,
            pageViews: true,
            formInteractions: true
        }
    });
}

function trackSearchParam(param) {
    const eventProperties = {
        searchString: param,
    };
    amplitude.track("searchParam", eventProperties);
  }

export default (function amplitudeModule() {
    if (!ExecutionEnvironment.canUseDOM) {
        return null;
    }

    initAmplitude();
    if (window.location.search) {
        const param = window.location.search.replace('?whatap%5Bquery%5D=', '');
        // ?whatap%5Bquery%5D=whatap.conf
        trackSearchParam(param)
    }
    return {
        onRouteUpdate() {

        },
    };
})();