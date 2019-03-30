import CONFIG from "./config";
import CookieService from "./CookieService";

const headers = new Headers({
    'Content-Type': 'application/json'
});

function prepareItems(data, key = 'id') {
    data.results = new Map(data.results.map(item => [item[key], item]));
}

const DataService = {
    // Complex data fetch
    getComplex(callback, services) {
        const promises = [];
        let serviceName;
        let options;

        for (let i = 0, len = services.length; i < len; i++) {
            serviceName = services[i].name || services[i];
            options = services[i].options || {};
            promises.push(new Promise(resolve => {
                this[serviceName](data => {
                    resolve(data);
                }, options);
            }));
        }
        Promise.all(promises).then(callback);
    },

    // Colors
    getColors(callback) {
        fetch(`${CONFIG.ROOT_API_URL}/colors/`, {headers}).then(response => {
            return response.json();
        }).then(data => {
            prepareItems(data);
            callback(data);        
        });        
    },

    // Manufacturers
    getManufacturers(callback) {
        fetch(`${CONFIG.ROOT_API_URL}/manufacturers/`, {headers}).then(response => {
            return response.json();
        }).then(data => {
            prepareItems(data);
            callback(data);        
        });            
    },

    // Collections
    getCollections(callback) {
        fetch(`${CONFIG.ROOT_API_URL}/collections/`, {headers}).then(response => {
            return response.json();
        }).then(data => {
            prepareItems(data);
            callback(data);        
        });            
    },

    // Categories
    getCategories(callback) {
        fetch(`${CONFIG.ROOT_API_URL}/categories/?no_parent=true`, {headers}).then(response => {
            return response.json();
        }).then(data => {
            prepareItems(data);
            callback(data);        
        });            
    },

    // Company info
    getCompanyInfo(callback) {
        fetch(`${CONFIG.ROOT_API_URL}/company/`, {headers}).then(response => {
            return response.json();
        }).then(callback);            
    },

    // Products
    getProducts(callback, {...options}) {
        const productId = options.id || "";
        const searchParams = options.search ? `?${options.search}` : ""; 
        
        fetch(`${CONFIG.ROOT_API_URL}/products/${productId}${searchParams}`, {headers}).then(response => {
            return response.status === 404 ? null : response.json();
        }).then(data => {
            if (!data || !Array.isArray(data.results)) {
                callback(data);
                return;
            }
            prepareItems(data);
            callback(data);
        });            
    },

    // Delivery
    getDeliveryInfo(callback) {
        fetch(`${CONFIG.ROOT_API_URL}/delivery/`, {headers}).then(response => response.json()).then(data => {
            callback(data);
        });                    
    },

    // Products search
    getSearchProducts(callback, {...options}) {
        const searchText = options.search;
        
        fetch(`${CONFIG.ROOT_API_URL}/products/?search=${searchText}`, {
            headers,
            signal: options.signal
        }).then(response => response.json()).then(data => {
            callback(data);
        }, () => {});
    },

    // Post a new order
    postOrder(callback, body) {
        let status;
        const internalHeaders = new Headers(headers);
        internalHeaders.append('X-CSRFToken', CookieService.get('csrftoken'));

        fetch(`${CONFIG.ROOT_API_URL}/orders/`, {
            headers: internalHeaders,
            method: 'POST',
            body: JSON.stringify(body)
        }).then(response => {
            status = response.status;
            return response.json();
        }).then(data => {
            callback(status, data);
        });                    
    }
};

export default DataService;