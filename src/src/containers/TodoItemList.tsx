import { useState } from "react";
import todoItem from "../models/todoItemModel";
import TodoItemDisplay from "./TodoItemDisplay";

export interface TodoItemListProps {
    items: todoItem[]
}

const TodoItemList: React.FunctionComponent<TodoItemListProps> = ({ items }) => {

    const [draggableItems, setDragableItems] = useState(items)
    const [enteredItem, setEnteredItem] = useState(0)
    const handleDragStart: (item:todoItem) => React.DragEventHandler<HTMLDivElement> = (item) => (e) => {
        console.log('DragStart', item, e)
    }
    const handleDragEnter: (item:todoItem) => React.DragEventHandler<HTMLDivElement> = (item) => (e) => {
        console.log('DragEnter', item, e)
        setEnteredItem(item.order)
    }

    const handleDragEnd: (item:todoItem) => React.DragEventHandler<HTMLDivElement> = (item) => (e) => {

        const movingUp = item.order > enteredItem
        const newItems = draggableItems.map((di) => {
            if(di.id === item.id){
                return {
                    ...di,
                    order: enteredItem
                }
            }
            else {
                return {
                    ...di,
                    order: movingUp ? di.order + 1 : di.order - 1
                }
            }

        })
console.log(newItems)
        setDragableItems(newItems);
    }
    return (<div style={{ border: '1px solid purple', margin: '10px', padding: '10px' }}>
        <h1>Item List</h1>
        {
            draggableItems.sort(({order},{order:orderb}) => order - orderb).map(
                (item) => (
                    <div draggable onDragStart={handleDragStart(item)} onDragEnter={handleDragEnter(item)} onDragEnd={handleDragEnd(item)}>
                        <TodoItemDisplay key={item.id} name={item.name} />
                    </div>
                )
            )
        }
    </div>)
}

export default TodoItemList;