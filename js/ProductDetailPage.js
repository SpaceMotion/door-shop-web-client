import ReloadPageMixin from "./ReloadPageMixin";
import {Link, withRouter} from "react-router-dom";
import CONFIG from "./config";

export default withRouter(class ProductDetailPage extends ReloadPageMixin(React.Component) {
    constructor(props) {
        super(props);

        this.onURLChanged = this.onURLChanged.bind(this);
        
        this.showPreLoader();
        this.state = {
            data: {}
        };
        this.props.setUpProductInfoCommonData(commonData => {
            this.commonData = commonData;
            this.dataIsReady = true;
            if (this.lastURLChangeLocation) {
                this.onURLChanged(this.lastURLChangeLocation);
            }
        });
        this.removeURLChangeListener = this.props.history.listen(this.onURLChanged);
    }

    componentWillUnmount() {
        this.removeURLChangeListener();
    }

    componentDidMount() {
        this.onURLChanged(this.props.location);
    }

    onURLChanged(location) {
        if (/^\/products\/\d+/.test(location.pathname)) {
            this.showPreLoader();
            if (this.dataIsReady) {
                const routeState = location.state;
                let data = routeState && routeState.data;
                this.setState({
                    data: {}
                });
                if (data) {
                    this.setDataAndUpdateUI(data);
                } else {
                    const productId = this.props.match.params.id;
                    fetch(`${CONFIG.ROOT_API_URL}/products/${productId}/`, {
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }).then((response) => {
                        if (response.status === 404) {
                            return Promise.reject();
                        }
                        return response.json();
                    }).then((data) => {
                        this.setDataAndUpdateUI(data);
                    }, () => {
                        this.props.setPageNotFound(true);
                        this.hidePreLoader();
                    });
                }
            } else {
                this.lastURLChangeLocation = location;
            }            
        }
    }
    
    setDataAndUpdateUI(data) {
        const commonData = this.commonData;
        this.props.prepareProductData(data, {
            categories: this.props.categories,
            colors: commonData.colors,
            manufacturers: commonData.manufacturers,
            collections: commonData.collections    
        });
        this.setState({data}, () => {
            this.initGallery();
            this.hidePreLoader();
        });
    }

    initGallery() {
        $(".product-detail .owl-product-gallery").owlCarousel({
            //transitionStyle: "fadeUp",
            autoHeight: true,
            slideSpeed: 800,
            navigation: true,
            navigationText: [
                '<span class="icon icon-chevron-left"></span>',
                '<span class="icon icon-chevron-right"></span>'
            ],
            pagination: true,
            items: 1,
            singleItem: true
        });
        $('.product-detail .open-popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Загрузка изображения...',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }

    render() {
        const data = this.state.data;
        const price = data.price;
        const discountPrice = data.price_with_discount;
        const roubleIcon = String.fromCharCode(8381);

        return (
            <div>
                <section className="main-header" style={{backgroundImage: "url(assets/images/gallery-2.jpg)"}}>
                    <header>
                        <div className="container">
                            <h1 className="h2 title">Описание товара</h1>
                            <ol className="breadcrumb breadcrumb-inverted">
                                <li>
                                    <Link to="/"><span className="icon icon-home"></span></Link>
                                </li>
                                {this.state.data.categories && this.state.data.categories[0] && <li>
                                    <Link to={`/products?category=${this.state.data.categories[0].id}`}>{this.state.data.categories[0].name}</Link>
                                </li>}
                                <li>
                                    {this.state.data.name}
                                </li>
                            </ol>
                        </div>
                    </header>
                </section>
                
                <section className="product product-detail">
                    <div className="main">
                        <div className="container">
                            <div className="row product-flex">
                                <div className="col-md-4 col-sm-12 product-flex-info">
                                    <div className="clearfix">
                                        <h1 className="title">
                                            {this.state.data.name}
                                            {this.state.data.collection && <small>{this.state.data.collection.name}</small>}
                                        </h1>
                                        <div className="clearfix">
                                            <div className="price">
                                                <span className="h3">
                                                    {`${roubleIcon} ${discountPrice}`}
                                                    {discountPrice !== price && <small>{`${roubleIcon} ${price}`}</small>}
                                                </span>
                                            </div>
                                            <hr />
                                            {this.state.data.manufacturer && <div className="info-box">
                                                <span><strong>Производитель&nbsp;</strong></span>
                                                <span>{this.state.data.manufacturer.name}</span>
                                            </div>}
                                            {this.state.data.collection && <div className="info-box">
                                                <span><strong>Коллекция&nbsp;</strong></span>
                                                <span>{this.state.data.collection.name}</span>
                                            </div>}

                                            <hr />
                                            {this.state.data.colors && Object.keys(this.state.data.colors).length > 0 && (
                                                <div className="info-box">
                                                    <span><strong>Доступные цвета&nbsp;</strong></span>
                                                    <div className="product-colors clearfix">
                                                        {Object.values(this.state.data.colors).map((color, index) => <span key={color.id} className="color-btn" style={{
                                                            backgroundColor: `#${color.value}`
                                                        }}/>)}                                                    
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12 product-flex-gallery">
                                    <button type="submit" className="btn btn-buy" onClick={() => {
                                        this.props.addCartProduct(this.state.data);
                                    }}></button>
                                    {this.state.data.images && <div className="owl-product-gallery open-popup-gallery">
                                        {this.state.data.images.map((image) => {
                                            const imagePath = image.preview || image.full;
                                            return (
                                                <a key={imagePath} href={imagePath}>
                                                    <img src={imagePath} alt=""/>
                                                </a>
                                            );
                                        })}
                                    </div>}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="info">
                        <div className="container">
                            <div>
                                <div>
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className='active'>
                                            <a href="#design" aria-controls="design" role="tab" data-toggle="tab">
                                                <i className="icon icon-sort-alpha-asc"></i>
                                                <span>&nbsp;&nbsp;Описание</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="design">
                                            <div className="content">
                                                <div>
                                                    <div>
                                                        <h3>Описание товара</h3>
                                                        <p>{this.state.data.description || "Описание отсутствует"}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});