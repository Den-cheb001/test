
import "./app-info.css";

const AppInfo = ({increased, tovar}) => {
    return (
        <div className="app-info">
            <h1>Учет продуктов в магазине N</h1>
            <h2>Общее количество: {tovar}</h2>
            <h2>В козине: {increased}</h2>
        </div>
    )
}

export default AppInfo;