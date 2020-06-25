import React from 'react';
import ListItems from "./ListItems";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blocks: [
                {
                    id: 1,
                    name: '1',
                    sortIndex: 0
                },
                {
                    id: 2,
                    name: '2',
                    sortIndex: 1
                },
                {
                    id: 3,
                    name: '3',
                    sortIndex: 2
                }
            ],
            draggedOverId: undefined,
            beingDragged: undefined
        }
    }


    handleDataChanged = (data) => {
        this.setState({ blocks: data })
    }


    updateState = (blocks, draggedOverId) => {
        this.setState({ draggedOverId: draggedOverId, beingDragged: draggedOverId })

        blocks.forEach((block, i) => {
            block.sortIndex = i
        })

        this.handleDataChanged(blocks)
    }

    dragStart = (e) => {
        e.target.style.opacity = '0.4';
        this.setState({ beingDragged: Number(e.target.dataset.id) })
        e.dataTransfer.effectAllowed = 'move'
    }

    dragOver = (e) => {
        e.preventDefault()
        let from = this.state.beingDragged
        let to = Number(e.target.dataset.id)
        this.setState({ draggedOverId: to })

        let items = this.state.blocks
        items.splice(to, 0, items.splice(from, 1)[0])

        this.updateState(items, to)
    }

    dragEnter = (e) => {
        e.target.classList.add('over')
    }

    dragLeave = (e) => {
        e.target.classList.remove('over')
    }

    dragEnd = (e) => {
        this.updateState(this.state.blocks, undefined);
        e.target.style.opacity = '1';
    }

    handleDrop = (e) => {
        e.target.classList.remove('over')
    }

    render() {
        return (
            <ListItems
                blocks={this.state.blocks}
                onDragOver={this.dragOver}
                dragStart={this.dragStart}
                dragEnd={this.dragEnd}
                dragOver={this.dragOver}
                dragEnter={this.dragEnter}
                dragLeave={this.dragLeave}
                handleDrop={this.handleDrop}
            />
        )
    }
}
export default App;
