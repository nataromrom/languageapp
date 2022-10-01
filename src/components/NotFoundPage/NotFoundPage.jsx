import errorCat from "../../assets/img/errorCat.gif";

const NotFoundPage = () => {
    return (
        <div className="errorPage">
            <h1>Упс... а такой странички нет</h1>
            <img src={errorCat} alt="404" className="errorCat" />
        </div>
    );
};

export default NotFoundPage;