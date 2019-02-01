let config;

switch (process.env.NODE_ENV) {
	case 'development':
		config = {
			ROOT_API_URL: 'http://door-shop.pavelgoltsev.com/api/v1'
		};
		break;
	case 'production':
		config = {
			ROOT_API_URL: '/api/v1'
		};
		break;
}

export default config;
