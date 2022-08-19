import TovarListItem from "../tovar-list-item/tovar-list-item";

import './tovar-list.css';

const TovarList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TovarListItem
             key={id}
              {...itemProps}
              onDelete={() => onDelete(id)}
              onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TovarList;
