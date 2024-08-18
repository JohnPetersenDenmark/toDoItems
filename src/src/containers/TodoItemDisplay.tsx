
export interface TodoItemDisplayProps {
    name: string;
}

const TodoItemDisplay: React.FunctionComponent<TodoItemDisplayProps> = ({name}) => {

    

    return <div style={{margin: '5px', padding: '5px', border: '1px solid cyan'}}>{name}</div>
}





export default TodoItemDisplay;