export default class PageNotFound extends React.Component {
    render() {
        return (
            <section className="not-found">
                <div className="container">
                    <h1 className="title" data-title="Страница не найдена">404</h1>
                    <div className="h4 subtitle">Страница не найдена</div>
                    <p>Запрощенная страница не найдена по указанному адресу.</p>
                </div>
            </section>    
        );
    }
}