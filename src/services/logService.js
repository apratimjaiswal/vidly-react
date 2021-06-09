
function init() {
    //  Initialize Sentry/Raven
    /*Raven.config('https://12345qwewer12345zxcv@sentry.io/123456', {
        release: "1-0-0",
        environment: "development-test"
    }).install();*/
}

function log(error) {
    //  Raven.captureException(error);
    console.error(error);
}

export default {
    init,
    log
}