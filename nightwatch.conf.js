const args = require('minimist')(process.argv);

let isProduction = args['grid'] === 'true';

// firefox setting
let FIREFOX_CONFIGURATION = {
	browserName: 'firefox',
	javascriptEnabled: true,
	acceptSslCerts: true
};

// chrome setting
let CHROME_CONFIGURATION = {
	browserName: 'chrome',
	javascriptEnabled: true,
	acceptSslCerts: true
};

// default setting
let DEFAULT_CONFIGURATION = {
	launch_url: "http://localhost",
	selenium_port: 4444,
	selenium_host: "172.16.53.136",
	silent: true,
	screenshots: {
		enabled: true,
		path: "screenshots",
		on_failure: true,
		on_error: true
	},
	desiredCapabilities: CHROME_CONFIGURATION
};

let ENVIRONMENTS = {
	default: DEFAULT_CONFIGURATION,
	"firefox": {
		"desiredCapabilities": FIREFOX_CONFIGURATION
	},
	"chrome": {
		"desiredCapabilities": CHROME_CONFIGURATION
	}
};

let SELENIUM_CONFIGURATION = {
	"start_process": isProduction,
	"server_path": "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar",
	"log_path": "logs",
	"host": "127.0.0.1",
	"port": 4444,
	"cli_args": {
		"trustAllSSLCertificates": true,
		"webdriver.chrome.driver": "node_modules/chromedriver/lib/chromedriver/chromedriver",
		"webdriver.gecko.driver": "node_modules/geckodriver/geckodriver"
	}
};

module.exports = {
	src_folders: ['src'],
	output_folder: 'reports',
	globals_path: 'globals_path.js',
	selenium: SELENIUM_CONFIGURATION,
	test_settings: ENVIRONMENTS
};
