import React, { Component } from 'react';
import { IoKeypad } from "react-icons/io5";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import cls from 'classnames';
import style from './index.module.less';

export default class DashBoard extends Component {

    constructor(props) {
        super(props);

        const {columnOrder, columns, tasks} = this.props;
        this.state = {columnOrder, columns, tasks};
    }

    onDragEnd = (result, provided) => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };

            this.setState(newState);
            return;
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        };
        this.setState(newState);
    };

    render() {
        const {columnOrder, columns, tasks} = this.state;

        const context = cls('context', style.dashboard);

        return (
            <div className={context}>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className={style.container}>
                        {columnOrder.map(columnId => {
                            const column = columns[columnId];
                            const columnTasks = column.taskIds.map(taskId => tasks[taskId]);
                            return <Column key={column.id} column={column} tasks={columnTasks}/>;
                        })}
                    </div>
                </DragDropContext>
            </div>
        );
    }
}

class Column extends Component {
    render() {
        const {column: {title, id}, tasks} = this.props;

        return (
            <div className={style.ColumnContainer}>
                <div className={style.title}>
                    <h3>
                        {title}
                    </h3>
                    <div className={style.dashed}>
                        <div/>
                    </div>
                </div>
                <Droppable droppableId={id} type="task">
                    {(provided, snapshot) => (
                        <div className={style.taskList} {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task, index) => (<Task key={task.id} task={task} index={index}/>))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }
}

class Task extends Component {
    render() {
        const {task: {content}} = this.props;

        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div className={cls(style.task, snapshot.isDragging ? style.taskDragging : '')}
                        {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div className={style.taskContainer}>
                            <IoKeypad className={style.dragIcon}/>
                            <div className={style.taskContext}>
                                {content}
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }
}