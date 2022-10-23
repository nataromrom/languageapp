import errorCat from "../../assets/img/errorCat.gif";

const ErrorPage = () => {
    return (
        <div className="errorPage">
            <h1>У сервера выходной, заходи позже... </h1>
            <img src={errorCat} alt="serverError" className="errorCat" />
        </div>
    );
};

export default ErrorPage;