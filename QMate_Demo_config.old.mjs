// const QmateService = require("@sap_oss/wdio-qmate-service");
import QmateService from '@sap_oss/wdio-qmate-service';
// const path = require("path");
// const merge = require(path.resolve(process.env.DEEPMERGE_PATH));
// const profile = require(path.resolve(process.env.QMATE_CONFIGS, "report.headless.conf.js"));
// const profile = require(path.resolve(process.env.QMATE_CONFIGS, "report.conf.js"));


exports.config = merge(profile.config, {
    services: [[QmateService]],
    // maxInstances: 1,
    // bail: 0,
    // specFileRetries: 0,
    // storeAllScreenshots: true,
    // logLevel: "error",
    // stableCountTries: 0,
    params: {
        auth: {
            formType: "plain"
        },
        SystemToTest: "T-FLP", 
        systemUrl: "https://ict.wdf.sap.corp/",
        username: "C5253257",
        password: "kKOToYvxNMpu495fltCUm",
        cpqUrl: "https://sap-ies-sales-test.cpq.cloud.sap/login.aspx",
        export: {
            exportData: "./specs/data.json"
        },
        import: {
            oppData: "./specs/data.json"
        },
        coverage: {
            status: false,
           // coverage_files: ["<your_component>"],
           // sourcePath: "./sourceFolder"
        },
        logUI5Version: "always"
    },

    baseUrl: "https://sap-ies-sales-dev.cpq.cloud.sap/login.aspx",

    specs: [ "./specs/*.spec.js" ]
    
});

