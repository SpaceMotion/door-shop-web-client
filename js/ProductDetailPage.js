import React from "react";
import ReloadPageMixin from "./ReloadPageMixin";
import {Link, withRouter} from "react-router-dom";
import DataService from "./DataService";

export default withRouter(class ProductDetailPage extends ReloadPageMixin(React.Component) {
    constructor(props) {
        super(props);

        this.onURLChanged = this.onURLChanged.bind(this);
        
        this.showPreLoader();
        this.state = {};
        this.lastRequestId = 0;
        DataService.getComplex(data => {
            this.dataIsReady = true;
            this.colors = data[0].results;
            this.manufacturers = data[1].results;
            this.collections = data[2].results;
            this.onURLChanged(this.props.location);
        }, ['getColors', 'getManufacturers', 'getCollections']);
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
            this.setState({
                data: null
            });
            if (this.dataIsReady) {
                const routeState = location.state;
                let data = routeState && routeState.data;
                if (data) {
                    this.onDataUpdated(data);
                } else {
                    const lastRequestId = ++this.lastRequestId;
                    DataService.getProducts(data => {
                        if (lastRequestId === this.lastRequestId) {
                            this.lastRequestId = 0;
                            this.onDataUpdated(data);
                        }
                    }, {
                        id: this.props.match.params.id
                    });
                }
            }            
        }
    }
    
    onDataUpdated(data) {
        const not_found = !!!data;
        this.setState({data, not_found}, () => {
            if (!not_found) {
                this.initGallery();                
            }
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

        if (!data) {
            return null;
        }

        const price = data.price;
        const discountPrice = data.price_with_discount;
        const roubleIcon = String.fromCharCode(8381);
        const categories = this.props.categories;
        const collections = this.collections;
        const manufacturers = this.manufacturers;
        const colors = this.colors;

        return (
            <div>
                <section className="main-header" style={{backgroundImage: "url(%URI_PREFIX%assets/images/gallery-2.jpg)"}}>
                    <header>
                        <div className="container">
                            <h1 className="h2 title">Описание товара</h1>
                            <ol className="breadcrumb breadcrumb-inverted">
                                <li>
                                    <Link to="/"><span className="icon icon-home"></span></Link>
                                </li>
                                {data.categories && <li>
                                    <Link to={`/products?category=${data.categories[0]}`}>{categories.get(data.categories[0]).name}</Link>
                                </li>}
                                <li>{data.name}</li>
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
                                            {data.name}
                                            {data.collection && <small>{collections.get(data.collection).name}</small>}
                                        </h1>
                                        <div className="clearfix">
                                            <div className="price">
                                                <span className="h3">
                                                    {`${roubleIcon} ${discountPrice}`}
                                                    {discountPrice !== price && <small>{`${roubleIcon} ${price}`}</small>}
                                                </span>
                                            </div>
                                            <hr />
                                            {data.manufacturer && <div className="info-box">
                                                <span><strong>Производитель&nbsp;</strong></span>
                                                <span>{manufacturers.get(data.manufacturer).name}</span>
                                            </div>}
                                            {data.collection && <div className="info-box">
                                                <span><strong>Коллекция&nbsp;</strong></span>
                                                <span>{collections.get(data.collection).name}</span>
                                            </div>}

                                            <hr />
                                            {data.colors.length && (
                                                <div className="info-box">
                                                    <span><strong>Доступные цвета&nbsp;</strong></span>
                                                    <div className="product-colors clearfix">
                                                        {data.colors.map(colorId => {
                                                            const color = colors.get(colorId);
                                                            return <span key={color.id} title={color.name} className="color-btn" style={{
                                                                backgroundColor: `#${color.value}`,
                                                                backgroundImage: color.texture ? `url('${color.texture}')` : 'none'
                                                            }}/>;
                                                        })}                                                    
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12 product-flex-gallery">
                                    <button type="submit" className="btn btn-buy" onClick={() => {
                                        this.props.addCartProduct(data);
                                    }}></button>
                                    {data.images.length && <div className="owl-product-gallery open-popup-gallery">
                                        {data.images.map(image => {
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
                                                        <p>{data.description || "Описание отсутствует"}</p>
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